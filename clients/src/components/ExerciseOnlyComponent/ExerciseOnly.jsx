// import React, { useState } from "react";
// import { LogingBg2, Logo_02 } from "../../assets";
// import LoginInput from "../Logininput";

// function ExerciseOnly() {
//   const [userEmail, setuserEmail] = useState("");
//   const [gender, setGender] = useState("");
//   const [userAge, setuserAge] = useState("");
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
//   const [isSubmitHovered, setisSubmitHovered] = useState(false);

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   const handleExperienceChange = (event) => {
//     setuserExperience(event.target.value);
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
//           value={userExperience}
//           onChange={handleExperienceChange}
//           className="border border-gray-300 rounded-md p-3"
//           style={{ width: 385 }}
//         >
//           <option value="">Select Experience Level</option>
//           <option value="beginner">Beginner</option>
//           <option value="intermediate">Intermediate</option>
//           <option value="expert">Expert</option>
//         </select>
//         <LoginInput
//           placeHolder={"Illnesses"}
//           icons
//           inputState={userIllnesses}
//           inputStateFunc={setuserIllnesses}
//           type="illnesse"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Fitness goal"}
//           icons
//           inputState={userFitness}
//           inputStateFunc={setuserFitness}
//           type="fitness"
//           // isSignUp={isSignUp}
//         />
//         {/* Prefer experience location dropdown */}
//         <select
//           style={{ width: 385 }}
//           value={userlocation}
//           onChange={handleLocationChange}
//           className="border border-gray-300 rounded-md p-3"
//         >
//           <option value="">Select Prefer Experience Location</option>
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

//       <div className="absolute top-10 right-96 w-1/4 h-full flex flex-col justify-center items-start p-10 gap-8 ">
//         <LoginInput
//           placeHolder={"Motivation"}
//           icon
//           inputState={userMotivation}
//           inputStateFunc={setuserMotivation}
//           type="motivation"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Health history"}
//           icon
//           inputState={userHealth}
//           inputStateFunc={setuserHealth}
//           type="health"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Emergency Contact"}
//           icon
//           inputState={userContact}
//           inputStateFunc={setuserContact}
//           type="contact"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Sleep patterns"}
//           icon
//           inputState={userSleep_Pattern}
//           inputStateFunc={setuserSleep_Pattern}
//           type="Sleep"
//           // isSignUp={isSignUp}
//         />
//       </div>
//       <div className="absolute -top-18 right-6 w-1/4 h-full flex flex-col justify-center items-start p-10 gap-8">
//         <LoginInput
//           placeHolder={"Time"}
//           icon
//           inputState={userTime}
//           inputStateFunc={setuserTime}
//           type="time"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Stress levels"}
//           icon
//           inputState={userStress}
//           inputStateFunc={setuserStress}
//           type="stress"
//           // isSignUp={isSignUp}
//         />
//         <LoginInput
//           placeHolder={"Injury history"}
//           icon
//           inputState={userInjury}
//           inputStateFunc={setuserInjury}
//           type="injury"
//           // isSignUp={isSignUp}
//         />
//       </div>
//       <div className=" absolute bottom-20 right-72">
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

// export default ExerciseOnly;

import React, { useState } from "react";
import LoginInput from "../Logininput";
import { LogingBg2, Logo_02 } from "../../assets";

function ExerciseOnly() {
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

  // 3. Exercise Goals & Preferences
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("");
  const [minutesPerDay, setMinutesPerDay] = useState("");

  // 4. Health & Safety
  const [medicalConditions, setMedicalConditions] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  // --- RESULT & LOADING STATES ---
  const [exercisePlanResult, setExercisePlanResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [medicalWarning, setMedicalWarning] = useState(false);

  // --- HANDLERS ---
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleStartOver = () => {
    // Clear the results and warnings
    setExercisePlanResult(null);
    setMedicalWarning(false);

    // Clear all the form inputs
    setUserName("");
    setUserAge("");
    setGender("");
    setUserHeight("");
    setUserCurrentWeight("");
    setPrimaryGoal("");
    setExperienceLevel("");
    setPreferredLocation("");
    setDaysPerWeek("");
    setMinutesPerDay("");
    setMedicalConditions("");
    setEmergencyContact("");
  };

  const handlesubmitClick = async (e) => {
    e.preventDefault();

    // Basic Validation: Ensure the critical tags are selected
    if (!primaryGoal || !experienceLevel || !preferredLocation) {
      alert(
        "Please select your Goal, Experience Level, and Preferred Location to get a plan.",
      );
      return;
    }

    setIsLoading(true);

    // Package the frontend data
    const userData = {
      userName,
      userAge,
      gender,
      userHeight,
      userCurrentWeight,
      primaryGoal,
      experienceLevel,
      preferredLocation,
      daysPerWeek,
      minutesPerDay,
      medicalConditions,
      emergencyContact,
    };

    console.log("Sending Exercise Data:", userData);

    try {
      const response = await fetch(
        "http://127.0.0.1:5001/full-stack-project-fitness/us-central1/app/api/exerciseplans/getPlan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );

      const data = await response.json();

      if (data.success) {
        // If the user typed anything in the medical box, trigger the warning flag
        if (medicalConditions.trim() !== "") {
          setMedicalWarning(true);
        }

        setExercisePlanResult(data.plan);
        console.log("Matched Exercise Plan:", data.plan);
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
      setIsLoading(false);
    }
  };

  // return (
  //   // The min-h-screen and w-full setup allows for scrolling
  //   <div className="min-h-screen w-full relative flex flex-col font-sans">
  //     {/* Background image is fixed so it stays in place while scrolling */}
  //     <img
  //       src={LogingBg2}
  //       className="fixed top-0 left-0 w-full h-full object-cover -z-10"
  //       alt=""
  //     />

  //     {/* HEADER SECTION */}
  //     <div className="relative z-10 w-full flex flex-col justify-center items-center p-10 pt-10 gap-4">
  //       <div className="flex items-center">
  //         <img
  //           style={{ width: 60, height: 60 }}
  //           src={Logo_02}
  //           className="w-8 h-10 mr-4"
  //           alt=""
  //         />
  //         <p className="text-white font-semibold text-5xl">
  //           Please fill the information
  //         </p>
  //       </div>
  //     </div>

  //     {/* MAIN FORM CONTAINER */}
  //     <div className="relative z-10 flex-grow w-full flex justify-center items-start p-10 pb-20">
  //       <div className="w-full max-w-7xl bg-white/10 backdrop-blur-sm rounded-3xl p-10 flex gap-12 shadow-2xl">
  //         {/* COLUMN 1: Basic Info & Body Metrics */}
  //         <div className="w-1/2 flex flex-col gap-10">
  //           {/* 1. Basic Information Section */}
  //           <div>
  //             <h3 className="text-2xl font-semibold text-orange-500 mb-6">
  //               Basic Information
  //             </h3>
  //             <div className="flex flex-col gap-6">
  //               <div className="w-full">
  //                 <label
  //                   htmlFor="userName"
  //                   className="text-white font-medium mb-2 block"
  //                 >
  //                   Name
  //                 </label>
  //                 <LoginInput
  //                   id="userName"
  //                   placeHolder={"Your Full Name"}
  //                   icons
  //                   inputState={userName}
  //                   inputStateFunc={setUserName}
  //                   type="text"
  //                   isSignUp={isSignUp}
  //                 />
  //               </div>
  //               <div className="flex gap-6">
  //                 <div className="w-1/2">
  //                   <label
  //                     htmlFor="userAge"
  //                     className="text-white font-medium mb-2 block"
  //                   >
  //                     Age
  //                   </label>
  //                   <LoginInput
  //                     id="userAge"
  //                     placeHolder={"Age"}
  //                     icons
  //                     inputState={userAge}
  //                     inputStateFunc={setUserAge}
  //                     type="number"
  //                     isSignUp={isSignUp}
  //                   />
  //                 </div>
  //                 {/* Gender Radio Buttons */}
  //                 <div className="w-1/2">
  //                   <p className="text-white font-medium mb-2 block">Gender</p>
  //                   <div className="flex gap-4 p-3 bg-white/5 border border-gray-600 rounded-md">
  //                     <label className="flex items-center gap-2 cursor-pointer">
  //                       <input
  //                         type="radio"
  //                         value="male"
  //                         checked={gender === "male"}
  //                         onChange={handleGenderChange}
  //                         className="accent-orange-500 w-5 h-5"
  //                       />
  //                       <span className="text-orange-400">Male</span>
  //                     </label>
  //                     <label className="flex items-center gap-2 cursor-pointer">
  //                       <input
  //                         type="radio"
  //                         value="female"
  //                         checked={gender === "female"}
  //                         onChange={handleGenderChange}
  //                         className="accent-orange-500 w-5 h-5"
  //                       />
  //                       <span className="text-orange-400">Female</span>
  //                     </label>
  //                     <label className="flex items-center gap-2 cursor-pointer">
  //                       <input
  //                         type="radio"
  //                         value="other"
  //                         checked={gender === "other"}
  //                         onChange={handleGenderChange}
  //                         className="accent-orange-500 w-5 h-5"
  //                       />
  //                       <span className="text-orange-400">Other</span>
  //                     </label>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           {/* 2. Body Metrics Section */}
  //           <div>
  //             <h3 className="text-2xl font-semibold text-orange-500 mb-6">
  //               Body Metrics
  //             </h3>
  //             <div className="grid grid-cols-2 gap-6">
  //               <div className="w-full">
  //                 <label
  //                   htmlFor="userHeight"
  //                   className="text-white font-medium mb-2 block"
  //                 >
  //                   Height (cm)
  //                 </label>
  //                 <LoginInput
  //                   id="userHeight"
  //                   placeHolder={"cm"}
  //                   icons
  //                   inputState={userHeight}
  //                   inputStateFunc={setUserHeight}
  //                   type="number"
  //                   isSignUp={isSignUp}
  //                 />
  //               </div>
  //               <div className="w-full">
  //                 <label
  //                   htmlFor="userCurrentWeight"
  //                   className="text-white font-medium mb-2 block"
  //                 >
  //                   Current Weight (kg)
  //                 </label>
  //                 <LoginInput
  //                   id="userCurrentWeight"
  //                   placeHolder={"kg"}
  //                   icons
  //                   inputState={userCurrentWeight}
  //                   inputStateFunc={setUserCurrentWeight}
  //                   type="number"
  //                   isSignUp={isSignUp}
  //                 />
  //               </div>
  //             </div>
  //           </div>

  //           {/* 3. Health & Safety Section */}
  //           <div>
  //             <h3 className="text-2xl font-semibold text-orange-500 mb-6">
  //               Health & Safety
  //             </h3>
  //             <div className="flex flex-col gap-6">
  //               <div className="w-full">
  //                 <label
  //                   htmlFor="medicalConditions"
  //                   className="text-white font-medium mb-2 block"
  //                 >
  //                   Medical Conditions & Injuries
  //                 </label>
  //                 <LoginInput
  //                   id="medicalConditions"
  //                   placeHolder={"List any past injuries or illnesses"}
  //                   icon
  //                   inputState={medicalConditions}
  //                   inputStateFunc={setMedicalConditions}
  //                   type="text"
  //                   isSignUp={isSignUp}
  //                 />
  //               </div>
  //               <div className="w-full">
  //                 <label
  //                   htmlFor="emergencyContact"
  //                   className="text-white font-medium mb-2 block"
  //                 >
  //                   Emergency Contact
  //                 </label>
  //                 <LoginInput
  //                   id="emergencyContact"
  //                   placeHolder={"Name and Phone Number"}
  //                   icon
  //                   inputState={emergencyContact}
  //                   inputStateFunc={setEmergencyContact}
  //                   type="text"
  //                   isSignUp={isSignUp}
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* COLUMN 2: Exercise Goals & Preferences */}
  //         <div className="w-1/2 flex flex-col gap-10">
  //           <div>
  //             <h3 className="text-2xl font-semibold text-orange-500 mb-6">
  //               Workout Preferences
  //             </h3>
  //             <div className="flex flex-col gap-6">
  //               <div className="w-full">
  //                 <label
  //                   htmlFor="primaryGoal"
  //                   className="text-white font-medium mb-2 block"
  //                 >
  //                   Primary Fitness Goal
  //                 </label>
  //                 <select
  //                   id="primaryGoal"
  //                   value={primaryGoal}
  //                   onChange={(e) => setPrimaryGoal(e.target.value)}
  //                   className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
  //                 >
  //                   <option value="">Select Goal</option>
  //                   <option value="lose_weight">Lose Weight</option>
  //                   <option value="build_muscle">Build Muscle</option>
  //                   <option value="improve_endurance">Improve Endurance</option>
  //                 </select>
  //               </div>

  //               <div className="w-full">
  //                 <label
  //                   htmlFor="experienceLevel"
  //                   className="text-white font-medium mb-2 block"
  //                 >
  //                   Experience Level
  //                 </label>
  //                 <select
  //                   id="experienceLevel"
  //                   value={experienceLevel}
  //                   onChange={(e) => setExperienceLevel(e.target.value)}
  //                   className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
  //                 >
  //                   <option value="">Select Level</option>
  //                   <option value="beginner">Beginner</option>
  //                   <option value="intermediate">Intermediate</option>
  //                   <option value="expert">Expert</option>
  //                 </select>
  //               </div>

  //               <div className="w-full">
  //                 <label
  //                   htmlFor="preferredLocation"
  //                   className="text-white font-medium mb-2 block"
  //                 >
  //                   Preferred Location
  //                 </label>
  //                 <select
  //                   id="preferredLocation"
  //                   value={preferredLocation}
  //                   onChange={(e) => setPreferredLocation(e.target.value)}
  //                   className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
  //                 >
  //                   <option value="">Select Location</option>
  //                   <option value="gym">Gym</option>
  //                   <option value="home">Home</option>
  //                 </select>
  //               </div>

  //               <div className="flex gap-6 mt-4">
  //                 <div className="w-1/2">
  //                   <label
  //                     htmlFor="daysPerWeek"
  //                     className="text-white font-medium mb-2 block"
  //                   >
  //                     Days per Week
  //                   </label>
  //                   <LoginInput
  //                     id="daysPerWeek"
  //                     placeHolder={"e.g., 3"}
  //                     icons
  //                     inputState={daysPerWeek}
  //                     inputStateFunc={setDaysPerWeek}
  //                     type="number"
  //                     isSignUp={isSignUp}
  //                   />
  //                 </div>
  //                 <div className="w-1/2">
  //                   <label
  //                     htmlFor="minutesPerDay"
  //                     className="text-white font-medium mb-2 block"
  //                   >
  //                     Minutes per Day
  //                   </label>
  //                   <LoginInput
  //                     id="minutesPerDay"
  //                     placeHolder={"e.g., 45"}
  //                     icons
  //                     inputState={minutesPerDay}
  //                     inputStateFunc={setMinutesPerDay}
  //                     type="number"
  //                     isSignUp={isSignUp}
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           {/* SUBMIT BUTTON */}
  //           <div className="flex-grow flex items-end justify-end">
  //             <button
  //               type="submit"
  //               className={`bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg mt-8 transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-transparent ${
  //                 isSubmitHovered ? "shadow-lg" : ""
  //               }`}
  //               onClick={handlesubmitClick}
  //               onMouseEnter={() => setIsSubmitHovered(true)}
  //               onMouseLeave={() => setIsSubmitHovered(false)}
  //             >
  //               SUBMIT
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
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
              : exercisePlanResult
                ? "Your Custom Workout"
                : "Please fill the information"}
          </p>
        </div>
      </div>

      {/* CONDITIONAL RENDERING: Check Loading -> Check Dashboard -> Show Form */}
      {isLoading ? (
        /* --- 1. PROCESSING / LOADING OVERLAY --- */
        <div className="relative z-10 flex-grow w-full flex justify-center items-center p-10 pb-20">
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-16 shadow-2xl animate-pulse">
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            <h3 className="text-2xl font-semibold text-white tracking-widest uppercase">
              Analyzing Profile
            </h3>
            <p className="text-orange-300 mt-2 text-lg">
              Building your perfect workout routine...
            </p>
          </div>
        </div>
      ) : exercisePlanResult ? (
        /* --- 2. BEAUTIFUL RESULTS DASHBOARD --- */
        <div className="relative z-10 flex-grow w-full flex justify-center items-start p-10 pb-20 animate-fade-in">
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 flex flex-col items-center shadow-2xl text-center">
            {/* Medical Warning Banner */}
            {medicalWarning && (
              <div className="w-full bg-red-500/20 border border-red-500 text-red-200 p-4 rounded-lg mb-8 text-left flex items-center shadow-inner">
                <span className="text-2xl mr-4">⚠️</span>
                <p>
                  <strong>Medical Notice:</strong> You indicated past medical
                  conditions or injuries. Please consult with a doctor before
                  beginning this or any new exercise program.
                </p>
              </div>
            )}

            <h2 className="text-4xl font-bold text-white mb-2">
              Ready to sweat, {userName}?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Here is your customized ACTIVE PLATE workout plan.
            </p>

            <div className="flex gap-8 w-full mb-10">
              <div className="bg-orange-500/20 border border-orange-500/50 rounded-2xl p-6 w-1/3 shadow-inner">
                <h4 className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  Location
                </h4>
                <p className="text-3xl font-bold text-white capitalize">
                  {preferredLocation}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-2/3 flex flex-col justify-center shadow-inner text-left pl-8">
                <h4 className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  Assigned Routine
                </h4>
                <p className="text-2xl font-bold text-white">
                  {exercisePlanResult.planName}
                </p>
                <p className="text-gray-400 mt-1 capitalize">
                  {experienceLevel} • {primaryGoal.replace("_", " ")}
                </p>
              </div>
            </div>

            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 text-left mb-10 shadow-inner">
              <h4 className="text-orange-400 font-semibold text-xl border-b border-white/10 pb-4 mb-6">
                Your Weekly Split
              </h4>
              <ul className="text-white text-lg space-y-4">
                {exercisePlanResult.weeklyRoutine &&
                  exercisePlanResult.weeklyRoutine
                    .split(". ")
                    .map((item, index) => {
                      if (item.trim() !== "") {
                        return (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-3 text-xl">
                              💪
                            </span>
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
        /* --- 3. MAIN FORM CONTAINER --- */
        <div className="relative z-10 flex-grow w-full flex justify-center items-start p-10 pb-20">
          <div className="w-full max-w-7xl bg-white/10 backdrop-blur-sm rounded-3xl p-10 flex gap-12 shadow-2xl border border-white/10">
            {/* COLUMN 1: Basic Info, Body Metrics, Health & Safety */}
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
                    {/* Gender Radio Buttons */}
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
                <div className="grid grid-cols-2 gap-6">
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
                </div>
              </div>

              {/* 3. Health & Safety Section */}
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">
                  Health & Safety
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="w-full">
                    <label
                      htmlFor="medicalConditions"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Medical Conditions & Injuries
                    </label>
                    <LoginInput
                      id="medicalConditions"
                      placeHolder={"List any past injuries or illnesses"}
                      icon
                      inputState={medicalConditions}
                      inputStateFunc={setMedicalConditions}
                      type="text"
                      isSignUp={isSignUp}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="emergencyContact"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Emergency Contact
                    </label>
                    <LoginInput
                      id="emergencyContact"
                      placeHolder={"Name and Phone Number"}
                      icon
                      inputState={emergencyContact}
                      inputStateFunc={setEmergencyContact}
                      type="text"
                      isSignUp={isSignUp}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Exercise Goals & Preferences */}
            <div className="w-1/2 flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-6 drop-shadow-sm">
                  Workout Preferences
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="w-full">
                    <label
                      htmlFor="primaryGoal"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Primary Fitness Goal
                    </label>
                    <select
                      id="primaryGoal"
                      value={primaryGoal}
                      onChange={(e) => setPrimaryGoal(e.target.value)}
                      className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                    >
                      <option value="">Select Goal</option>
                      <option value="lose_weight">Lose Weight</option>
                      <option value="build_muscle">Build Muscle</option>
                      <option value="improve_endurance">
                        Improve Endurance
                      </option>
                    </select>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="experienceLevel"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Experience Level
                    </label>
                    <select
                      id="experienceLevel"
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                      className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                    >
                      <option value="">Select Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="preferredLocation"
                      className="text-white font-medium mb-2 block drop-shadow-sm"
                    >
                      Preferred Location
                    </label>
                    <select
                      id="preferredLocation"
                      value={preferredLocation}
                      onChange={(e) => setPreferredLocation(e.target.value)}
                      className="w-full border border-gray-600 rounded-md p-3 bg-white/5 text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                    >
                      <option value="">Select Location</option>
                      <option value="gym">Gym</option>
                      <option value="home">Home</option>
                    </select>
                  </div>

                  <div className="flex gap-6 mt-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="daysPerWeek"
                        className="text-white font-medium mb-2 block drop-shadow-sm"
                      >
                        Days per Week
                      </label>
                      <LoginInput
                        id="daysPerWeek"
                        placeHolder={"e.g., 3"}
                        icons
                        inputState={daysPerWeek}
                        inputStateFunc={setDaysPerWeek}
                        type="number"
                        isSignUp={isSignUp}
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="minutesPerDay"
                        className="text-white font-medium mb-2 block drop-shadow-sm"
                      >
                        Minutes per Day
                      </label>
                      <LoginInput
                        id="minutesPerDay"
                        placeHolder={"e.g., 45"}
                        icons
                        inputState={minutesPerDay}
                        inputStateFunc={setMinutesPerDay}
                        type="number"
                        isSignUp={isSignUp}
                      />
                    </div>
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

export default ExerciseOnly;
