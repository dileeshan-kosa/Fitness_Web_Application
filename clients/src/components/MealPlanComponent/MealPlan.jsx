// import React, { useState } from "react";
// import LoginInput from "../Logininput";
// import { LogingBg2, Logo_02 } from "../../assets";

// function MealPlan() {
//   const [userEmail, setuserEmail] = useState("");
//   const [isSignUp, setisSignUp] = useState(false);

//   const [gender, setGender] = useState("");

//   const [userAge, setuserAge] = useState("");

//   const [CurrentEatingHabits, setCurrentEatingHabits] = useState("");

//   const [userIllnesses, setuserIllnesses] = useState("");

//   const [userFitness, setuserFitness] = useState("");

//   const [userlocation, setuserlocation] = useState("");

//   const [userMotivation, setuserMotivation] = useState("");
//   const [userTime, setuserTime] = useState("");
//   const [userStress, setuserStress] = useState("");
//   const [userInjury, setuserInjury] = useState("");
//   const [userHealth, setuserHealth] = useState("");
//   const [userContact, setuserContact] = useState("");
//   const [userSleep_Pattern, setuserSleep_Pattern] = useState("");
//   const [isSubmitHovered, setisSubmitHovered] = useState(false); // SUMBIT button

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   const handleCurrentEatingHabitsChange = (event) => {
//     setCurrentEatingHabits(event.target.value);
//   };

//   const handleLocationChange = (event) => {
//     setuserlocation(event.target.value);
//   };

//   const handlesubmitClick = () => {};
//   return (
//     <div className=" w-screen h-screen relative overflow-hidden flex">
//       <img src={LogingBg2} className="w-full h-full object-cover" alt="" />

//       <div className="absolute -top-80 -left-44 w-full h-full flex flex-col justify-center items-center p-10 gap-4">
//         <div className=" flex items-center">
//           <img
//             style={{ width: 60, height: 60 }}
//             src={Logo_02}
//             className="w-8 h-10"
//             alt=""
//           />
//           <p className="text-white font-semibold text-5xl ml">
//             Please fill the information
//           </p>
//         </div>
//       </div>

//       <div className="absolute top-72 left-4 w-1/4 h-full flex flex-col justify-start items-start gap-8">
//         <LoginInput
//           placeHolder={"Name"}
//           icons
//           inputState={userEmail}
//           inputStateFunc={setuserEmail}
//           type="name"
//           isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Age"}
//           icons
//           inputState={userAge}
//           inputStateFunc={setuserAge}
//           type="age"
//           isSignUp={isSignUp}
//         />
//         {/* Experience level dropdown */}

//         <select
//           style={{ width: 385 }}
//           value={CurrentEatingHabits}
//           onChange={handleCurrentEatingHabitsChange}
//           className="border border-gray-300 rounded-md p-3"
//         >
//           <option value="">Current Eating Habits</option>
//           <option value="beginner">Beginner</option>
//           <option value="intermediate">Intermediate</option>
//           <option value="expert">Expert</option>
//         </select>

//         <LoginInput
//           placeHolder={"Meal preference"}
//           icons
//           inputState={userIllnesses}
//           inputStateFunc={setuserIllnesses}
//           type="illnesse"
//           isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Allergies"}
//           icons
//           inputState={userFitness}
//           inputStateFunc={setuserFitness}
//           type="fitness"
//           isSignUp={isSignUp}
//         />
//         {/* Prefer experience location dropdown */}
//         <select
//           style={{ width: 385 }}
//           value={userlocation}
//           onChange={handleLocationChange}
//           className="border border-gray-300 rounded-md p-3"
//         >
//           <option value="">Nutrient focus</option>
//           <option value="GYM">GYM</option>
//           <option value="HOME">HOME</option>
//         </select>
//       </div>

//       {/*GENDER CHEk  */}
//       <div className="absolute -top-4 left-96 w-1/4 h-full flex flex-col justify-center items-start p-10">
//         <label>
//           <input
//             type="radio"
//             value="male"
//             checked={gender === "male"}
//             onChange={handleGenderChange}
//             style={{
//               width: "20px",
//               height: "20px",
//               marginLeft: 90,
//               marginTop: 60,
//             }}
//           />
//           <span
//             style={{ marginLeft: "8px", marginRight: "16px", color: "orange" }}
//           >
//             Male
//           </span>
//           <input
//             type="radio"
//             value="female"
//             checked={gender === "female"}
//             onChange={handleGenderChange}
//             style={{ width: "20px", height: "20px" }}
//           />
//           <span style={{ marginLeft: "10px", color: "orange" }}>Female</span>
//         </label>
//       </div>
//       <div className="absolute top-32 right-96 w-1/4 h-full flex flex-col justify-center items-start p-10 gap-8 ">
//         <LoginInput
//           placeHolder={"Cooking abilities"}
//           icon
//           inputState={userMotivation}
//           inputStateFunc={setuserMotivation}
//           type="motivation"
//           isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Hydration"}
//           icon
//           inputState={userHealth}
//           inputStateFunc={setuserHealth}
//           type="health"
//           isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Sugar and Salt intake"}
//           icon
//           inputState={userContact}
//           inputStateFunc={setuserContact}
//           type="contact"
//           isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Medical consideration"}
//           icon
//           inputState={userSleep_Pattern}
//           inputStateFunc={setuserSleep_Pattern}
//           type="Sleep"
//           isSignUp={isSignUp}
//         />

//         <LoginInput
//           placeHolder={"Supplement type"}
//           icon
//           inputState={userTime}
//           inputStateFunc={setuserTime}
//           type="time"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Emergency Contact"}
//           icon
//           inputState={userStress}
//           inputStateFunc={setuserStress}
//           type="stress"
//           isSignUp={isSignUp}
//         />
//       </div>
//       <div className="absolute -top-16 right-6 w-1/4 h-full flex flex-col justify-center items-start p-10 gap-8">
//         <LoginInput
//           placeHolder={"Injury history"}
//           icon
//           inputState={userInjury}
//           inputStateFunc={setuserInjury}
//           type="injury"
//           isSignUp={isSignUp}
//         />
//       </div>
//       <div className=" absolute bottom-20 right-28">
//         <div
//           className={`bg-headingColor hover:bg-7EA0E0 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer`}
//           onClick={handlesubmitClick}
//           onMouseEnter={() => setisSubmitHovered(true)}
//           onMouseLeave={() => setisSubmitHovered(false)}
//         >
//           SUMBIT
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MealPlan;

import React, { useState } from "react";
import LoginInput from "../Logininput";
import { LogingBg2, Logo_02 } from "../../assets";

function MealPlan() {
  // --- STATE VARIABLES ---
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);

  // 1. Basic Info
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [gender, setGender] = useState("");

  // 2. Body Metrics
  const [userHeight, setUserHeight] = useState("");
  const [userCurrentWeight, setUserCurrentWeight] = useState("");
  const [userGoalWeight, setUserGoalWeight] = useState("");

  // 3. Goals & Preferences
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [cookingAbilities, setCookingAbilities] = useState("");

  // 4. Health Data
  const [userAllergies, setUserAllergies] = useState("");
  const [userHydration, setUserHydration] = useState("");
  const [medicalConsiderations, setMedicalConsiderations] = useState("");

  // --- RESULT STATES ---
  const [mealPlanResult, setMealPlanResult] = useState(null);
  const [targetCalories, setTargetCalories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // --- HANDLERS ---
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleStartOver = () => {
    // Clear the results to hide the dashboard
    setMealPlanResult(null);
    setTargetCalories(null);

    // Clear all the form inputs
    setUserName("");
    setUserAge("");
    setGender("");
    setUserHeight("");
    setUserCurrentWeight("");
    setUserGoalWeight("");
    setPrimaryGoal("");
    setDietaryPreference("");
    setCookingAbilities("");
    setUserAllergies("");
    setUserHydration("");
    setMedicalConsiderations("");
  };

  const handlesubmitClick = async (e) => {
    e.preventDefault(); // Prevents the page from reloading

    // Start the loading animation
    setIsLoading(true);

    // 1. Package all the frontend state data into one object
    const userData = {
      userName: userName,
      userAge: userAge,
      gender: gender,
      userHeight: userHeight,
      userCurrentWeight: userCurrentWeight,
      userGoalWeight: userGoalWeight,
      primaryGoal: primaryGoal,
      dietaryPreference: dietaryPreference,
      cookingAbilities: cookingAbilities,
      userAllergies: userAllergies,
      userHydration: userHydration,
      medicalConsiderations: medicalConsiderations,
    };

    console.log("Sending this data to backend:", userData);

    try {
      // 2. Send the data to your local Firebase Emulator backend
      const response = await fetch(
        "http://127.0.0.1:5001/full-stack-project-fitness/us-central1/app/api/mealplans/getPlan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );

      const data = await response.json();

      // 3. Check the response from the backend
      if (data.success) {
        setTargetCalories(data.calculatedCalories);
        setMealPlanResult(data.plan); // This triggers the screen to change!
        console.log(
          "SUCCESS! Backend calculated BMR:",
          data.calculatedCalories,
        );
        console.log("Matched Bucket:", data.bucketMatched);
        console.log("Here is your Meal Plan:", data.plan);

        alert(
          `Plan Found! You need ${data.calculatedCalories} calories. Check console for details.`,
        );
      } else {
        console.error("Backend Error:", data.msg);
        alert("Could not find a plan: " + data.msg);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert(
        "Failed to connect to the server. Make sure 'npm run serve' is running.",
      );
    } finally {
      // Stop the loading animation no matter what happens
      setIsLoading(false);
    }
  };

  // return (
  //   <div className="min-h-screen w-full relative flex flex-col font-sans">
  //     {/* Background stays fixed while scrolling */}
  //     <img
  //       src={LogingBg2}
  //       className="fixed top-0 left-0 w-full h-full object-cover -z-10"
  //       alt=""
  //     />

  //     {/* DYNAMIC HEADER SECTION */}
  //     <div className="relative z-10 w-full flex flex-col justify-center items-center p-10 pt-10 gap-4">
  //       <div className="flex items-center">
  //         <img
  //           style={{ width: 60, height: 60 }}
  //           src={Logo_02}
  //           className="w-8 h-10 mr-4"
  //           alt=""
  //         />
  //         <p className="text-white font-semibold text-5xl drop-shadow-md">
  //           {mealPlanResult
  //             ? "Your Custom Plan"
  //             : "Please fill the information"}
  //         </p>
  //       </div>
  //     </div>

  //     {/* CONDITIONAL RENDERING: Show Dashboard if we have a result, otherwise show Form */}
  //     {mealPlanResult ? (
  //       /* --- BEAUTIFUL RESULTS DASHBOARD --- */
  //       <div className="relative z-10 flex-grow w-full flex justify-center items-start p-10 pb-20 animate-fade-in">
  //         <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 flex flex-col items-center shadow-2xl text-center">
  //           <h2 className="text-4xl font-bold text-white mb-2">
  //             Hello, {userName}!
  //           </h2>
  //           <p className="text-xl text-gray-200 mb-8">
  //             Here is your customized ACTIVE PLATE meal plan.
  //           </p>

  //           <div className="flex gap-8 w-full mb-10">
  //             <div className="bg-orange-500/20 border border-orange-500/50 rounded-2xl p-6 w-1/2 shadow-inner">
  //               <h4 className="text-orange-400 font-semibold text-lg uppercase tracking-wider mb-2">
  //                 Daily Target
  //               </h4>
  //               <p className="text-5xl font-bold text-white">
  //                 {targetCalories}{" "}
  //                 <span className="text-2xl font-normal text-gray-300">
  //                   kcal
  //                 </span>
  //               </p>
  //             </div>
  //             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-1/2 flex flex-col justify-center shadow-inner">
  //               <h4 className="text-orange-400 font-semibold text-lg uppercase tracking-wider mb-2">
  //                 Assigned Plan
  //               </h4>
  //               <p className="text-2xl font-bold text-white">
  //                 {mealPlanResult.planName}
  //               </p>
  //             </div>
  //           </div>

  //           <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 text-left mb-10 shadow-inner">
  //             <h4 className="text-orange-400 font-semibold text-xl border-b border-white/10 pb-4 mb-6">
  //               Your Daily Menu
  //             </h4>
  //             <ul className="text-white text-lg space-y-4">
  //               {mealPlanResult.dailyMenu.split(". ").map((item, index) => {
  //                 if (item.trim() !== "") {
  //                   return (
  //                     <li key={index} className="flex items-start">
  //                       <span className="text-orange-500 mr-3 text-xl">✔️</span>
  //                       {item}
  //                     </li>
  //                   );
  //                 }
  //                 return null;
  //               })}
  //             </ul>
  //           </div>

  //           <button
  //             onClick={handleStartOver}
  //             className="bg-transparent border-2 border-gray-400 hover:border-orange-500 text-gray-300 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
  //           >
  //             Start Over / Recalculate
  //           </button>
  //         </div>
  //       </div>
  //     ) : (
  //       /* --- YOUR EXISTING MAIN FORM CONTAINER --- */
  //       <div className="relative z-10 flex-grow w-full flex justify-center items-start p-10 pb-20">
  //         <div className="w-full max-w-7xl bg-white/10 backdrop-blur-sm rounded-3xl p-10 flex gap-12 shadow-2xl border border-white/10">
  //           {/* COLUMN 1: Basic Info, Body Metrics, Goals & Preferences */}
  //           <div className="w-1/2 flex flex-col gap-10">
  //             {/* 1. Basic Information Section */}
  //             <div>
  //               <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">
  //                 Basic Information
  //               </h3>
  //               <div className="flex flex-col gap-6">
  //                 <div className="w-full">
  //                   <label
  //                     htmlFor="userName"
  //                     className="text-white font-medium mb-2 block drop-shadow-sm"
  //                   >
  //                     Name
  //                   </label>
  //                   <LoginInput
  //                     id="userName"
  //                     placeHolder={"Your Full Name"}
  //                     icons
  //                     inputState={userName}
  //                     inputStateFunc={setUserName}
  //                     type="text"
  //                     isSignUp={isSignUp}
  //                   />
  //                 </div>
  //                 <div className="flex gap-6">
  //                   <div className="w-1/2">
  //                     <label
  //                       htmlFor="userAge"
  //                       className="text-white font-medium mb-2 block drop-shadow-sm"
  //                     >
  //                       Age
  //                     </label>
  //                     <LoginInput
  //                       id="userAge"
  //                       placeHolder={"Age"}
  //                       icons
  //                       inputState={userAge}
  //                       inputStateFunc={setUserAge}
  //                       type="number"
  //                       isSignUp={isSignUp}
  //                     />
  //                   </div>
  //                   <div className="w-1/2">
  //                     <p className="text-white font-medium mb-2 block drop-shadow-sm">
  //                       Gender
  //                     </p>
  //                     <div className="flex gap-4 p-3 bg-white/5 border border-gray-600 rounded-md">
  //                       <label className="flex items-center gap-2 cursor-pointer">
  //                         <input
  //                           type="radio"
  //                           value="male"
  //                           checked={gender === "male"}
  //                           onChange={handleGenderChange}
  //                           className="accent-orange-500 w-5 h-5"
  //                         />
  //                         <span className="text-gray-200 hover:text-white transition">
  //                           Male
  //                         </span>
  //                       </label>
  //                       <label className="flex items-center gap-2 cursor-pointer">
  //                         <input
  //                           type="radio"
  //                           value="female"
  //                           checked={gender === "female"}
  //                           onChange={handleGenderChange}
  //                           className="accent-orange-500 w-5 h-5"
  //                         />
  //                         <span className="text-gray-200 hover:text-white transition">
  //                           Female
  //                         </span>
  //                       </label>
  //                       <label className="flex items-center gap-2 cursor-pointer">
  //                         <input
  //                           type="radio"
  //                           value="other"
  //                           checked={gender === "other"}
  //                           onChange={handleGenderChange}
  //                           className="accent-orange-500 w-5 h-5"
  //                         />
  //                         <span className="text-gray-200 hover:text-white transition">
  //                           Other
  //                         </span>
  //                       </label>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>

  //             {/* 2. Body Metrics Section */}
  //             <div>
  //               <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">
  //                 Body Metrics
  //               </h3>
  //               <div className="grid grid-cols-3 gap-6">
  //                 <div className="w-full">
  //                   <label
  //                     htmlFor="userHeight"
  //                     className="text-white font-medium mb-2 block drop-shadow-sm"
  //                   >
  //                     Height (cm)
  //                   </label>
  //                   <LoginInput
  //                     id="userHeight"
  //                     placeHolder={"cm"}
  //                     icons
  //                     inputState={userHeight}
  //                     inputStateFunc={setUserHeight}
  //                     type="number"
  //                     isSignUp={isSignUp}
  //                   />
  //                 </div>
  //                 <div className="w-full">
  //                   <label
  //                     htmlFor="userCurrentWeight"
  //                     className="text-white font-medium mb-2 block drop-shadow-sm"
  //                   >
  //                     Current Weight (kg)
  //                   </label>
  //                   <LoginInput
  //                     id="userCurrentWeight"
  //                     placeHolder={"kg"}
  //                     icons
  //                     inputState={userCurrentWeight}
  //                     inputStateFunc={setUserCurrentWeight}
  //                     type="number"
  //                     isSignUp={isSignUp}
  //                   />
  //                 </div>
  //                 <div className="w-full">
  //                   <label
  //                     htmlFor="userGoalWeight"
  //                     className="text-white font-medium mb-2 block drop-shadow-sm"
  //                   >
  //                     Goal Weight (kg)
  //                   </label>
  //                   <LoginInput
  //                     id="userGoalWeight"
  //                     placeHolder={"kg"}
  //                     icons
  //                     inputState={userGoalWeight}
  //                     inputStateFunc={setUserGoalWeight}
  //                     type="number"
  //                     isSignUp={isSignUp}
  //                   />
  //                 </div>
  //               </div>
  //             </div>

  //             {/* 3. Goals & Preferences Section */}
  //             <div>
  //               <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">
  //                 Goals & Preferences
  //               </h3>
  //               <div className="flex flex-col gap-6">
  //                 <div className="w-full">
  //                   <label
  //                     htmlFor="primaryGoal"
  //                     className="text-white font-medium mb-2 block drop-shadow-sm"
  //                   >
  //                     Primary Goal
  //                   </label>
  //                   <select
  //                     id="primaryGoal"
  //                     value={primaryGoal}
  //                     onChange={(e) => setPrimaryGoal(e.target.value)}
  //                     className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
  //                   >
  //                     <option value="">Select Primary Goal</option>
  //                     <option value="lose_fat">Lose Fat</option>
  //                     <option value="maintain_weight">Maintain Weight</option>
  //                     <option value="build_muscle">Build Muscle</option>
  //                   </select>
  //                 </div>
  //                 <div className="flex gap-6">
  //                   <div className="w-1/2">
  //                     <label
  //                       htmlFor="dietaryPreference"
  //                       className="text-white font-medium mb-2 block drop-shadow-sm"
  //                     >
  //                       Dietary Preference
  //                     </label>
  //                     <select
  //                       id="dietaryPreference"
  //                       value={dietaryPreference}
  //                       onChange={(e) => setDietaryPreference(e.target.value)}
  //                       className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
  //                     >
  //                       <option value="">Dietary Preference</option>
  //                       <option value="any">Any (Standard Diet)</option>
  //                       <option value="vegetarian">Vegetarian</option>
  //                       <option value="vegan">Vegan</option>
  //                       <option value="keto">Keto</option>
  //                       <option value="no_dairy">No Dairy</option>
  //                     </select>
  //                   </div>
  //                   <div className="w-1/2">
  //                     <label
  //                       htmlFor="cookingAbilities"
  //                       className="text-white font-medium mb-2 block drop-shadow-sm"
  //                     >
  //                       Cooking Abilities
  //                     </label>
  //                     <select
  //                       id="cookingAbilities"
  //                       value={cookingAbilities}
  //                       onChange={(e) => setCookingAbilities(e.target.value)}
  //                       className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
  //                     >
  //                       <option value="">Cooking Abilities</option>
  //                       <option value="beginner">Beginner</option>
  //                       <option value="intermediate">Intermediate</option>
  //                       <option value="expert">Expert</option>
  //                     </select>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           {/* COLUMN 2: Health Data */}
  //           <div className="w-1/2 flex flex-col gap-10">
  //             <div>
  //               <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">
  //                 Health Data
  //               </h3>
  //               <div className="flex flex-col gap-6">
  //                 <div className="w-full">
  //                   <label
  //                     htmlFor="userAllergies"
  //                     className="text-white font-medium mb-2 block drop-shadow-sm"
  //                   >
  //                     Allergies (leave blank if none)
  //                   </label>
  //                   <LoginInput
  //                     id="userAllergies"
  //                     placeHolder={"e.g., Peanuts, Dairy"}
  //                     icon
  //                     inputState={userAllergies}
  //                     inputStateFunc={setUserAllergies}
  //                     type="text"
  //                     isSignUp={isSignUp}
  //                   />
  //                 </div>
  //                 <div className="w-full">
  //                   <label
  //                     htmlFor="userHydration"
  //                     className="text-white font-medium mb-2 block drop-shadow-sm"
  //                   >
  //                     Hydration (Glasses of water/day)
  //                   </label>
  //                   <LoginInput
  //                     id="userHydration"
  //                     placeHolder={"How many glasses?"}
  //                     icon
  //                     inputState={userHydration}
  //                     inputStateFunc={setUserHydration}
  //                     type="number"
  //                     isSignUp={isSignUp}
  //                   />
  //                 </div>
  //                 <div className="w-full">
  //                   <label
  //                     htmlFor="medicalConsiderations"
  //                     className="text-white font-medium mb-2 block drop-shadow-sm"
  //                   >
  //                     Medical Considerations
  //                   </label>
  //                   <LoginInput
  //                     id="medicalConsiderations"
  //                     placeHolder={"Specify any medical conditions"}
  //                     icon
  //                     inputState={medicalConsiderations}
  //                     inputStateFunc={setMedicalConsiderations}
  //                     type="text"
  //                     isSignUp={isSignUp}
  //                   />
  //                 </div>
  //               </div>
  //             </div>

  //             {/* SUBMIT BUTTON */}
  //             <div className="flex-grow flex items-end justify-end">
  //               <button
  //                 type="submit"
  //                 className={`bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-10 rounded-lg mt-8 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-transparent ${
  //                   isSubmitHovered
  //                     ? "shadow-lg shadow-orange-500/50 scale-105"
  //                     : "shadow-md"
  //                 }`}
  //                 onClick={handlesubmitClick}
  //                 onMouseEnter={() => setIsSubmitHovered(true)}
  //                 onMouseLeave={() => setIsSubmitHovered(false)}
  //               >
  //                 SUBMIT
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className="min-h-screen w-full relative flex flex-col font-sans">
      {/* Background stays fixed while scrolling */}
      <img
        src={LogingBg2}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        alt=""
      />

      {/* DYNAMIC HEADER SECTION */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center p-10 pt-10 gap-4">
        <div className="flex items-center">
          <img
            style={{ width: 60, height: 60 }}
            src={Logo_02}
            className="w-8 h-10 mr-4"
            alt=""
          />
          <p className="text-white font-semibold text-5xl drop-shadow-md">
            {isLoading
              ? "Processing..."
              : mealPlanResult
                ? "Your Custom Plan"
                : "Please fill the information"}
          </p>
        </div>
      </div>

      {/* CONDITIONAL RENDERING: Loading -> Dashboard -> Form */}
      {isLoading ? (
        /* --- 1. PROCESSING / LOADING OVERLAY --- */
        <div className="relative z-10 flex-grow w-full flex justify-center items-center p-10 pb-20">
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-16 shadow-2xl animate-pulse">
            {/* Spinning Circle */}
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <h3 className="text-2xl font-semibold text-white tracking-widest uppercase">
              Processing Data
            </h3>
            <p className="text-orange-300 mt-2 text-lg">
              Crafting your perfect meal plan...
            </p>
          </div>
        </div>
      ) : mealPlanResult ? (
        /* --- 2. BEAUTIFUL RESULTS DASHBOARD --- */
        <div className="relative z-10 flex-grow w-full flex justify-center items-start p-10 pb-20 animate-fade-in">
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 flex flex-col items-center shadow-2xl text-center">
            <h2 className="text-4xl font-bold text-white mb-2">
              Hello, {userName}!
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Here is your customized ACTIVE PLATE meal plan.
            </p>

            <div className="flex gap-8 w-full mb-10">
              <div className="bg-orange-500/20 border border-orange-500/50 rounded-2xl p-6 w-1/2 shadow-inner">
                <h4 className="text-orange-400 font-semibold text-lg uppercase tracking-wider mb-2">
                  Daily Target
                </h4>
                <p className="text-5xl font-bold text-white">
                  {targetCalories}{" "}
                  <span className="text-2xl font-normal text-gray-300">
                    kcal
                  </span>
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-1/2 flex flex-col justify-center shadow-inner">
                <h4 className="text-orange-400 font-semibold text-lg uppercase tracking-wider mb-2">
                  Assigned Plan
                </h4>
                <p className="text-2xl font-bold text-white">
                  {mealPlanResult.planName}
                </p>
              </div>
            </div>

            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 text-left mb-10 shadow-inner">
              <h4 className="text-orange-400 font-semibold text-xl border-b border-white/10 pb-4 mb-6">
                Your Daily Menu
              </h4>
              <ul className="text-white text-lg space-y-4">
                {mealPlanResult.dailyMenu.split(". ").map((item, index) => {
                  if (item.trim() !== "") {
                    return (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-3 text-xl">✔️</span>
                        {item}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>

            <button
              onClick={handleStartOver}
              className="bg-transparent border-2 border-gray-400 hover:border-orange-500 text-gray-300 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Start Over / Recalculate
            </button>
          </div>
        </div>
      ) : (
        /* --- 3. YOUR EXISTING MAIN FORM CONTAINER --- */
        <div className="relative z-10 flex-grow w-full flex justify-center items-start p-10 pb-20">
          <div className="w-full max-w-7xl bg-white/10 backdrop-blur-sm rounded-3xl p-10 flex gap-12 shadow-2xl border border-white/10">
            {/* COLUMN 1: Basic Info, Body Metrics, Goals & Preferences */}
            <div className="w-1/2 flex flex-col gap-10">
              {/* 1. Basic Information Section */}
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">
                  Basic Information
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="w-full">
                    <label
                      htmlFor="userName"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Name
                    </label>
                    <LoginInput
                      id="userName"
                      placeHolder={"Your Full Name"}
                      icons
                      inputState={userName}
                      inputStateFunc={setUserName}
                      type="text"
                      isSignUp={isSignUp}
                    />
                  </div>
                  <div className="flex gap-6">
                    <div className="w-1/2">
                      <label
                        htmlFor="userAge"
                        className="text-white font-medium mb-2 block drop-shadow-sm"
                      >
                        Age
                      </label>
                      <LoginInput
                        id="userAge"
                        placeHolder={"Age"}
                        icons
                        inputState={userAge}
                        inputStateFunc={setUserAge}
                        type="number"
                        isSignUp={isSignUp}
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="text-white font-medium mb-2 block drop-shadow-sm">
                        Gender
                      </p>
                      <div className="flex gap-4 p-3 bg-white/5 border border-gray-600 rounded-md">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            value="male"
                            checked={gender === "male"}
                            onChange={handleGenderChange}
                            className="accent-orange-500 w-5 h-5"
                          />
                          <span className="text-gray-200 hover:text-white transition">
                            Male
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            value="female"
                            checked={gender === "female"}
                            onChange={handleGenderChange}
                            className="accent-orange-500 w-5 h-5"
                          />
                          <span className="text-gray-200 hover:text-white transition">
                            Female
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            value="other"
                            checked={gender === "other"}
                            onChange={handleGenderChange}
                            className="accent-orange-500 w-5 h-5"
                          />
                          <span className="text-gray-200 hover:text-white transition">
                            Other
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Body Metrics Section */}
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">
                  Body Metrics
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="w-full">
                    <label
                      htmlFor="userHeight"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Height (cm)
                    </label>
                    <LoginInput
                      id="userHeight"
                      placeHolder={"cm"}
                      icons
                      inputState={userHeight}
                      inputStateFunc={setUserHeight}
                      type="number"
                      isSignUp={isSignUp}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="userCurrentWeight"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Current Weight (kg)
                    </label>
                    <LoginInput
                      id="userCurrentWeight"
                      placeHolder={"kg"}
                      icons
                      inputState={userCurrentWeight}
                      inputStateFunc={setUserCurrentWeight}
                      type="number"
                      isSignUp={isSignUp}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="userGoalWeight"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Goal Weight (kg)
                    </label>
                    <LoginInput
                      id="userGoalWeight"
                      placeHolder={"kg"}
                      icons
                      inputState={userGoalWeight}
                      inputStateFunc={setUserGoalWeight}
                      type="number"
                      isSignUp={isSignUp}
                    />
                  </div>
                </div>
              </div>

              {/* 3. Goals & Preferences Section */}
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">
                  Goals & Preferences
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="w-full">
                    <label
                      htmlFor="primaryGoal"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Primary Goal
                    </label>
                    <select
                      id="primaryGoal"
                      value={primaryGoal}
                      onChange={(e) => setPrimaryGoal(e.target.value)}
                      className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                    >
                      <option value="">Select Primary Goal</option>
                      <option value="lose_fat">Lose Fat</option>
                      <option value="maintain_weight">Maintain Weight</option>
                      <option value="build_muscle">Build Muscle</option>
                    </select>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-1/2">
                      <label
                        htmlFor="dietaryPreference"
                        className="text-white font-medium mb-2 block drop-shadow-sm"
                      >
                        Dietary Preference
                      </label>
                      <select
                        id="dietaryPreference"
                        value={dietaryPreference}
                        onChange={(e) => setDietaryPreference(e.target.value)}
                        className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                      >
                        <option value="">Dietary Preference</option>
                        <option value="any">Any (Standard Diet)</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="keto">Keto</option>
                        <option value="no_dairy">No Dairy</option>
                      </select>
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="cookingAbilities"
                        className="text-white font-medium mb-2 block drop-shadow-sm"
                      >
                        Cooking Abilities
                      </label>
                      <select
                        id="cookingAbilities"
                        value={cookingAbilities}
                        onChange={(e) => setCookingAbilities(e.target.value)}
                        className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                      >
                        <option value="">Cooking Abilities</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Health Data */}
            <div className="w-1/2 flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">
                  Health Data
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="w-full">
                    <label
                      htmlFor="userAllergies"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Allergies (leave blank if none)
                    </label>
                    <LoginInput
                      id="userAllergies"
                      placeHolder={"e.g., Peanuts, Dairy"}
                      icon
                      inputState={userAllergies}
                      inputStateFunc={setUserAllergies}
                      type="text"
                      isSignUp={isSignUp}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="userHydration"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Hydration (Glasses of water/day)
                    </label>
                    <LoginInput
                      id="userHydration"
                      placeHolder={"How many glasses?"}
                      icon
                      inputState={userHydration}
                      inputStateFunc={setUserHydration}
                      type="number"
                      isSignUp={isSignUp}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="medicalConsiderations"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Medical Considerations
                    </label>
                    <LoginInput
                      id="medicalConsiderations"
                      placeHolder={"Specify any medical conditions"}
                      icon
                      inputState={medicalConsiderations}
                      inputStateFunc={setMedicalConsiderations}
                      type="text"
                      isSignUp={isSignUp}
                    />
                  </div>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex-grow flex items-end justify-end">
                <button
                  type="submit"
                  className={`bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-10 rounded-lg mt-8 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-transparent ${
                    isSubmitHovered
                      ? "shadow-lg shadow-orange-500/50 scale-105"
                      : "shadow-md"
                  }`}
                  onClick={handlesubmitClick}
                  onMouseEnter={() => setIsSubmitHovered(true)}
                  onMouseLeave={() => setIsSubmitHovered(false)}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MealPlan;
