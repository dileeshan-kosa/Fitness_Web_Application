const router = require("express").Router();
const admin = require("firebase-admin");

// POST route to receive frontend data and return BOTH plans
router.post("/getPlan", async (req, res) => {
  try {
    // 1. Get all the data sent from the React frontend
    const {
      userName, // <-- Added here
      userAge, gender, userHeight, userCurrentWeight,
      primaryGoal, dietaryPreference,
      experienceLevel, preferredLocation
    } = req.body;

    console.log("Generating combined plan for:", userName);

    // --- PART A: MEAL PLAN MATH ---
    const weight = parseFloat(userCurrentWeight);
    const height = parseFloat(userHeight);
    const age = parseInt(userAge);

    let bmr = 0;
    if (gender === "male") {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else if (gender === "female") {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 78; 
    }

    let targetCalories = bmr;
    if (primaryGoal === "lose_weight" || primaryGoal === "lose_fat") {
      targetCalories -= 500;
    } else if (primaryGoal === "build_muscle") {
      targetCalories += 500;
    }

    let calorieBucket = 2000; 
    if (targetCalories < 1750) {
      calorieBucket = 1500;
    } else if (targetCalories > 2250) {
      calorieBucket = 2500;
    }

    // --- PART B: FETCH FROM BOTH DATABASES ---
    const db = admin.firestore();

    const mealPromise = db.collection("meal_plans")
      .where("calories", "==", calorieBucket)
      .where("dietaryPreference", "==", dietaryPreference)
      .limit(1).get();

    const exercisePromise = db.collection("exercise_plans")
      .where("primaryGoal", "==", primaryGoal)
      .where("experienceLevel", "==", experienceLevel)
      .where("preferredLocation", "==", preferredLocation)
      .limit(1).get();

    // Run both queries at the exact same time
    const [mealSnapshot, exerciseSnapshot] = await Promise.all([mealPromise, exercisePromise]);

    // --- PART C: SAFETY CHECK ---
    if (mealSnapshot.empty || exerciseSnapshot.empty) {
        let errorMsg = "Missing data in Firebase! ";
        if (mealSnapshot.empty) errorMsg += `No meal plan found for ${calorieBucket} kcal, ${dietaryPreference}. `;
        if (exerciseSnapshot.empty) errorMsg += `No exercise plan found for ${primaryGoal}, ${experienceLevel}, ${preferredLocation}.`;
        
        return res.status(404).json({ success: false, msg: errorMsg });
    }

    let finalMealPlan = {};
    mealSnapshot.forEach(doc => finalMealPlan = doc.data());

    let finalExercisePlan = {};
    exerciseSnapshot.forEach(doc => finalExercisePlan = doc.data());

    // --- PART D: SEND COMBINED PACKAGE TO FRONTEND ---
    return res.status(200).json({
      success: true,
      calculatedCalories: Math.round(targetCalories),
      mealPlan: finalMealPlan,
      exercisePlan: finalExercisePlan
    });

  } catch (error) {
    console.error("Error fetching combined plan:", error);
    return res.status(500).json({ success: false, msg: "Server Error" });
  }
});

module.exports = router;