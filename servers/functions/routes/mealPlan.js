const router = require("express").Router();
const admin = require("firebase-admin");

// POST route to receive frontend data and return a meal plan
router.post("/getPlan", async (req, res) => {
  try {
    // 1. Get the data sent from the React frontend
    const {
      userAge,
      gender,
      userHeight,
      userCurrentWeight,
      primaryGoal,
      dietaryPreference
    } = req.body;

    // Convert strings to numbers for the math calculations
    const weight = parseFloat(userCurrentWeight);
    const height = parseFloat(userHeight);
    const age = parseInt(userAge);

    // 2. Calculate BMR (Basal Metabolic Rate)
    let bmr = 0;
    if (gender === "male") {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else if (gender === "female") {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    } else {
      // Default math if gender is 'other'
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 78; 
    }

    // 3. Adjust calories based on their primary goal
    let targetCalories = bmr;
    if (primaryGoal === "lose_fat") {
      targetCalories -= 500;
    } else if (primaryGoal === "build_muscle") {
      targetCalories += 500;
    }
    // If goal is "maintain_weight", targetCalories stays the same as BMR

    // 4. Find the closest Calorie Bucket (1500, 2000, or 2500)
    let calorieBucket = 2000; // Default to middle bucket
    if (targetCalories < 1750) {
      calorieBucket = 1500;
    } else if (targetCalories > 2250) {
      calorieBucket = 2500;
    }

    // 5. Query Firebase Firestore for the matching plan
    const db = admin.firestore();
    
    // Search the "meal_plans" collection for a match
    const planSnapshot = await db.collection("meal_plans")
      .where("calories", "==", calorieBucket)
      .where("dietaryPreference", "==", dietaryPreference)
      .limit(1) // We only need 1 matching plan
      .get();

    // If the database doesn't have a plan that matches yet
    if (planSnapshot.empty) {
      return res.status(404).json({ 
        success: false, 
        msg: "No matching meal plan found in database yet." 
      });
    }

    // 6. Extract the matched plan data
    let finalPlan = {};
    planSnapshot.forEach((doc) => {
      finalPlan = doc.data();
    });

    // 7. Send the plan back to the React frontend
    return res.status(200).json({
      success: true,
      calculatedCalories: Math.round(targetCalories),
      bucketMatched: calorieBucket,
      plan: finalPlan
    });

  } catch (error) {
    console.error("Error fetching meal plan:", error);
    return res.status(500).json({ success: false, msg: "Server Error" });
  }
});

module.exports = router;