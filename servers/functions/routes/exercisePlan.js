const router = require("express").Router();
const admin = require("firebase-admin");

// POST route to receive frontend exercise data and return a workout plan
router.post("/getPlan", async (req, res) => {
  try {
    // 1. Get the data sent from the React frontend
    const {
      primaryGoal,
      experienceLevel,
      preferredLocation,
      medicalConditions
    } = req.body;

    console.log("Looking for plan with tags:", primaryGoal, experienceLevel, preferredLocation);

    // 2. Connect to Firebase Firestore
    const db = admin.firestore();
    
    // 3. Query the database using our 3 Main Tags
    // This searches the "exercise_plans" collection for a perfect match
    const planSnapshot = await db.collection("exercise_plans")
      .where("primaryGoal", "==", primaryGoal)
      .where("experienceLevel", "==", experienceLevel)
      .where("preferredLocation", "==", preferredLocation)
      .limit(1) // We only need 1 matching plan
      .get();

    // 4. Check if a plan was found
    if (planSnapshot.empty) {
      return res.status(404).json({ 
        success: false, 
        msg: "No matching exercise plan found in the database yet." 
      });
    }

    // 5. Extract the matched plan data
    let finalPlan = {};
    planSnapshot.forEach((doc) => {
      finalPlan = doc.data();
    });

    // 6. Send the plan back to the React frontend
    return res.status(200).json({
      success: true,
      plan: finalPlan,
      // We pass the medical conditions back just as a confirmation, 
      // though your React frontend already handles the warning UI!
      hasMedicalWarning: medicalConditions && medicalConditions.trim() !== "" ? true : false
    });

  } catch (error) {
    console.error("Error fetching exercise plan:", error);
    return res.status(500).json({ success: false, msg: "Server Error" });
  }
});

module.exports = router;