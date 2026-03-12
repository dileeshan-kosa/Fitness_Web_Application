// import React, { useState } from "react";
// import { LogingBg2, Logo_02 } from "../../assets";
// import LoginInput from "../Logininput";

// function TheCombined() {
//   const [userEmail, setuserEmail] = useState("");
//   const [isSignUp, setisSignUp] = useState(false);

//   const [gender, setGender] = useState("");

//   const [userAge, setuserAge] = useState("");
//   const [userWeight, setuserWeight] = useState("");

//   const [userExperience, setuserExperience] = useState("");

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

//   const handleExperienceChange = (event) => {
//     setuserExperience(event.target.value);
//   };
//   const handleWeightChange = (event) => {
//     setuserWeight(event.target.value);
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
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Age"}
//           icons
//           inputState={userAge}
//           inputStateFunc={setuserAge}
//           type="age"
//           // isSignUp={isSignUp}
//         />
//         {/* Experience level dropdown */}

//         <select
//           id="weightSelect"
//           value={userWeight}
//           onChange={handleWeightChange}
//           className="border border-gray-300 rounded-md p-3"
//           style={{ height: "40px", width: 385 }}
//         >
//           <option value="" disabled hidden>
//             Select Weight (in kg)
//           </option>
//           {Array.from({ length: 91 }, (_, index) => (
//             <option key={index} value={index + 10}>
//               {index + 10} kg
//             </option>
//           ))}
//         </select>

//         <select
//           value={userExperience}
//           onChange={handleExperienceChange}
//           className="border border-gray-300 rounded-md p-3"
//           style={{ height: "40px", width: 385 }}
//         >
//           <option value="" disabled hidden>
//             Select Height (in cm)
//           </option>
//           {Array.from({ length: 191 }, (_, index) => (
//             <option key={index} value={index + 10}>
//               {index + 10} cm
//             </option>
//           ))}
//         </select>
//         <LoginInput
//           placeHolder={"Waist    (in cm)"}
//           icons
//           inputState={userFitness}
//           inputStateFunc={setuserFitness}
//           type="fitness"
//           // isSignUp={isSignUp}
//         />
//         {/* Prefer experience location dropdown */}
//         <select
//           value={userlocation}
//           onChange={handleLocationChange}
//           className="border border-gray-300 rounded-md p-3"
//           style={{ width: 385 }}
//         >
//           <option value="">Neck (in cm)</option>
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
//           placeHolder={"Your active level"}
//           icon
//           inputState={userMotivation}
//           inputStateFunc={setuserMotivation}
//           type="motivation"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Description of your Daily routine"}
//           icon
//           inputState={userHealth}
//           inputStateFunc={setuserHealth}
//           type="health"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Description of your Daily diet"}
//           icon
//           inputState={userContact}
//           inputStateFunc={setuserContact}
//           type="contact"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Currently taking medication (if any)"}
//           icon
//           inputState={userSleep_Pattern}
//           inputStateFunc={setuserSleep_Pattern}
//           type="Sleep"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Current Injuries (if any)"}
//           icon
//           inputState={userSleep_Pattern}
//           inputStateFunc={setuserSleep_Pattern}
//           type="Sleep"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Disabilities (if any)"}
//           icon
//           inputState={userSleep_Pattern}
//           inputStateFunc={setuserSleep_Pattern}
//           type="Sleep"
//           // isSignUp={isSignUp}
//         />
//       </div>
//       <div className=" absolute bottom-20 right-52">
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

// export default TheCombined;

import React, { useState } from "react";
import LoginInput from "../Logininput";
import { LogingBg2, Logo_02 } from "../../assets";

function TheCombined() {
  // --- STATE VARIABLES ---
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);

  // 1. Basic Info & Body Metrics
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [gender, setGender] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userCurrentWeight, setUserCurrentWeight] = useState("");
  
  // 2. Meal Preferences (From Option 1)
  const [primaryGoal, setPrimaryGoal] = useState(""); // Shared between both
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [cookingAbilities, setCookingAbilities] = useState("");
  
  // 3. Workout Preferences (From Option 2)
  const [experienceLevel, setExperienceLevel] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("");
  const [minutesPerDay, setMinutesPerDay] = useState("");

  // 4. Health Data (Combined)
  const [userAllergies, setUserAllergies] = useState("");
  const [userHydration, setUserHydration] = useState("");
  const [medicalConditions, setMedicalConditions] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  // --- RESULT & LOADING STATES ---
  const [combinedResult, setCombinedResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [medicalWarning, setMedicalWarning] = useState(false);

  // --- HANDLERS ---
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleStartOver = () => {
    setCombinedResult(null);
    setMedicalWarning(false);
    // Form reset
    setUserName(""); setUserAge(""); setGender(""); setUserHeight(""); setUserCurrentWeight("");
    setPrimaryGoal(""); setDietaryPreference(""); setCookingAbilities("");
    setExperienceLevel(""); setPreferredLocation(""); setDaysPerWeek(""); setMinutesPerDay("");
    setUserAllergies(""); setUserHydration(""); setMedicalConditions(""); setEmergencyContact("");
  };

  const handlesubmitClick = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!primaryGoal || !experienceLevel || !preferredLocation || !dietaryPreference || !userHeight || !userCurrentWeight) {
      alert("Please fill out all the dropdowns and body metrics to get your custom plan.");
      return;
    }

    setIsLoading(true);

    const userData = {
      userName, userAge, gender, userHeight, userCurrentWeight,
      primaryGoal, dietaryPreference, cookingAbilities,
      experienceLevel, preferredLocation, daysPerWeek, minutesPerDay,
      userAllergies, userHydration, medicalConditions, emergencyContact
    };

    console.log("Sending Combined Data:", userData);

    try {
      const response = await fetch(
        "http://127.0.0.1:5001/full-stack-project-fitness/us-central1/app/api/combinedplans/getPlan",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (data.success) {
        if (medicalConditions.trim() !== "") setMedicalWarning(true);
        setCombinedResult(data); 
        console.log("Matched Combined Plan:", data);
      } else {
        alert("Could not generate a combined plan: " + data.msg);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col font-sans">
      
      <img src={LogingBg2} className="fixed top-0 left-0 w-full h-full object-cover -z-10" alt="" />

      {/* DYNAMIC HEADER SECTION */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center p-10 pt-10 gap-4">
        <div className="flex items-center">
          <img style={{ width: 60, height: 60 }} src={Logo_02} className="w-8 h-10 mr-4" alt="" />
          <p className="text-white font-semibold text-5xl drop-shadow-md">
            {isLoading ? "Processing..." : combinedResult ? "Your Complete Blueprint" : "Build Your Complete Plan"}
          </p>
        </div>
      </div>

      {/* CONDITIONAL RENDERING */}
      {isLoading ? (
        
        /* --- 1. LOADING OVERLAY --- */
        <div className="relative z-10 flex-grow w-full flex justify-center items-center p-10 pb-20">
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-16 shadow-2xl animate-pulse">
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <h3 className="text-2xl font-semibold text-white tracking-widest uppercase">Syncing Data</h3>
            <p className="text-orange-300 mt-2 text-lg">Aligning your diet and workouts...</p>
          </div>
        </div>

      ) : combinedResult ? (
        
        /* --- 2. MEGA RESULTS DASHBOARD --- */
        <div className="relative z-10 flex-grow w-full flex justify-center items-start p-10 pb-20 animate-fade-in">
          <div className="w-full max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 flex flex-col items-center shadow-2xl">
            
            {medicalWarning && (
              <div className="w-full bg-red-500/20 border border-red-500 text-red-200 p-4 rounded-lg mb-8 text-left flex items-center shadow-inner">
                <span className="text-2xl mr-4">⚠️</span>
                <p><strong>Medical Notice:</strong> You indicated past medical conditions. Please consult with a doctor before beginning this program.</p>
              </div>
            )}

            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-2">Welcome to your new lifestyle, {userName}.</h2>
              <p className="text-xl text-gray-200">Here is your fully integrated diet and exercise blueprint.</p>
            </div>
            
            <div className="flex gap-10 w-full mb-10">
              
              {/* LEFT SIDE: DIET PLAN */}
              <div className="w-1/2 flex flex-col gap-6">
                <div className="bg-orange-500/20 border border-orange-500/50 rounded-2xl p-6 shadow-inner text-center">
                  <h4 className="text-orange-400 font-semibold text-lg uppercase tracking-wider mb-2">Daily Fuel</h4>
                  <p className="text-5xl font-bold text-white">{combinedResult.calculatedCalories} <span className="text-2xl font-normal text-gray-300">kcal</span></p>
                  <p className="text-orange-300 mt-2">{combinedResult.mealPlan.planName}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-inner flex-grow">
                  <h4 className="text-orange-400 font-semibold text-xl border-b border-white/10 pb-4 mb-6">Your Daily Menu</h4>
                  <ul className="text-white space-y-4">
                    {combinedResult.mealPlan.dailyMenu.split('. ').map((item, index) => {
                      if (item.trim() !== "") return <li key={index} className="flex items-start"><span className="text-orange-500 mr-3">🍽️</span>{item}</li>;
                      return null;
                    })}
                  </ul>
                </div>
              </div>

              {/* RIGHT SIDE: EXERCISE PLAN */}
              <div className="w-1/2 flex flex-col gap-6">
                <div className="bg-orange-500/20 border border-orange-500/50 rounded-2xl p-6 shadow-inner text-center">
                  <h4 className="text-orange-400 font-semibold text-lg uppercase tracking-wider mb-2">Training Protocol</h4>
                  <p className="text-3xl font-bold text-white capitalize">{preferredLocation} • {experienceLevel}</p>
                  <p className="text-orange-300 mt-2">{combinedResult.exercisePlan.planName}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-inner flex-grow">
                  <h4 className="text-orange-400 font-semibold text-xl border-b border-white/10 pb-4 mb-6">Your Weekly Split</h4>
                  <ul className="text-white space-y-4">
                    {combinedResult.exercisePlan.weeklyRoutine.split('. ').map((item, index) => {
                      if (item.trim() !== "") return <li key={index} className="flex items-start"><span className="text-orange-500 mr-3">💪</span>{item}</li>;
                      return null;
                    })}
                  </ul>
                </div>
              </div>

            </div>

            <button
              onClick={handleStartOver}
              className="bg-transparent border-2 border-gray-400 hover:border-orange-500 text-gray-300 hover:text-white font-bold py-3 px-12 rounded-lg transition duration-300"
            >
              Start Over / Recalculate
            </button>
          </div>
        </div>

      ) : (

        /* --- 3. MAIN FORM CONTAINER --- */
        <div className="relative z-10 flex-grow w-full flex justify-center items-start p-10 pb-20">
          <div className="w-full max-w-7xl bg-white/10 backdrop-blur-sm rounded-3xl p-10 flex gap-12 shadow-2xl border border-white/10">
            
            {/* COLUMN 1: Basic Info & Body Metrics */}
            <div className="w-1/2 flex flex-col gap-10">
              
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">Basic Information</h3>
                <div className="flex flex-col gap-6">
                  <div className="w-full">
                    <label className="text-white font-medium mb-2 block">Name</label>
                    <LoginInput placeHolder={"Your Full Name"} icons inputState={userName} inputStateFunc={setUserName} type="text" />
                  </div>
                  <div className="flex gap-6">
                    <div className="w-1/2">
                      <label className="text-white font-medium mb-2 block">Age</label>
                      <LoginInput placeHolder={"Age"} icons inputState={userAge} inputStateFunc={setUserAge} type="number" />
                    </div>
                    <div className="w-1/2">
                      <p className="text-white font-medium mb-2 block">Gender</p>
                      <div className="flex gap-4 p-3 bg-white/5 border border-gray-600 rounded-md">
                        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" value="male" checked={gender === "male"} onChange={handleGenderChange} className="accent-orange-500 w-5 h-5"/><span className="text-gray-200">Male</span></label>
                        <label className="flex items-center gap-2 cursor-pointer"><input type="radio" value="female" checked={gender === "female"} onChange={handleGenderChange} className="accent-orange-500 w-5 h-5"/><span className="text-gray-200">Female</span></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">Body Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="w-full"><label className="text-white font-medium mb-2 block">Height (cm)</label><LoginInput placeHolder={"cm"} icons inputState={userHeight} inputStateFunc={setUserHeight} type="number" /></div>
                  <div className="w-full"><label className="text-white font-medium mb-2 block">Current Weight (kg)</label><LoginInput placeHolder={"kg"} icons inputState={userCurrentWeight} inputStateFunc={setUserCurrentWeight} type="number" /></div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">Health & Safety</h3>
                <div className="flex flex-col gap-6">
                  <div className="w-full"><label className="text-white font-medium mb-2 block">Medical Conditions</label><LoginInput placeHolder={"Specify any medical conditions"} icon inputState={medicalConditions} inputStateFunc={setMedicalConditions} type="text" /></div>
                  <div className="w-full"><label className="text-white font-medium mb-2 block">Allergies</label><LoginInput placeHolder={"e.g., Peanuts"} icon inputState={userAllergies} inputStateFunc={setUserAllergies} type="text" /></div>
                </div>
              </div>

            </div>

            {/* COLUMN 2: Goals & Preferences */}
            <div className="w-1/2 flex flex-col gap-10">
              
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">Your Master Goal</h3>
                <div className="w-full">
                  <select value={primaryGoal} onChange={(e) => setPrimaryGoal(e.target.value)} className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm">
                    <option value="">Select Primary Goal</option>
                    <option value="lose_weight">Lose Fat / Lose Weight</option>
                    <option value="build_muscle">Build Muscle</option>
                  </select>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">Diet Preferences</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-6">
                    <div className="w-1/2"><select value={dietaryPreference} onChange={(e) => setDietaryPreference(e.target.value)} className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500"><option value="">Diet Type</option><option value="any">Standard</option><option value="vegetarian">Vegetarian</option><option value="vegan">Vegan</option><option value="keto">Keto</option><option value="no_dairy">No Dairy</option></select></div>
                    <div className="w-1/2"><select value={cookingAbilities} onChange={(e) => setCookingAbilities(e.target.value)} className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500"><option value="">Cooking Skill</option><option value="beginner">Beginner</option><option value="expert">Expert</option></select></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">Workout Preferences</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-6">
                    <div className="w-1/2"><select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)} className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500"><option value="">Experience</option><option value="beginner">Beginner</option><option value="intermediate">Intermediate</option><option value="expert">Expert</option></select></div>
                    <div className="w-1/2"><select value={preferredLocation} onChange={(e) => setPreferredLocation(e.target.value)} className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500"><option value="">Location</option><option value="gym">Gym</option><option value="home">Home</option></select></div>
                  </div>
                  <div className="flex gap-6 mt-2">
                      <div className="w-1/2"><label className="text-white font-medium mb-2 block">Days per Week</label><LoginInput placeHolder={"e.g., 3"} icons inputState={daysPerWeek} inputStateFunc={setDaysPerWeek} type="number" /></div>
                      <div className="w-1/2"><label className="text-white font-medium mb-2 block">Minutes/Day</label><LoginInput placeHolder={"e.g., 45"} icons inputState={minutesPerDay} inputStateFunc={setMinutesPerDay} type="number" /></div>
                  </div>
                </div>
              </div>

              <div className="flex-grow flex items-end justify-end mt-4">
                <button
                  type="submit"
                  className={`bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-10 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-transparent ${isSubmitHovered ? 'shadow-lg shadow-orange-500/50 scale-105' : 'shadow-md'}`}
                  onClick={handlesubmitClick} onMouseEnter={() => setIsSubmitHovered(true)} onMouseLeave={() => setIsSubmitHovered(false)}
                >
                  GENERATE BLUEPRINT
                </button>
              </div>

            </div>
          </div>
        </div>

      )}
    </div>
  );
}

export default TheCombined;