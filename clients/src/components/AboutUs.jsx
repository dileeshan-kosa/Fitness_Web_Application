// import React from "react";
// import { Capture1Co, Capture2 } from "../assets";

// function AboutUs() {
//   return (
//     <div
//       style={{
//         width: "78%",
//         marginLeft: "-20px",
//         marginBottom: "25px",
//         display: "flex",
//         justifyContent: "space-between",
//         paddingLeft: "10.2%",
//         paddingRight: "10.2%",
//       }}
//     >
//       <div
//         style={{
//           width: "34%",
//           height: "24rem",
//           backgroundColor: "#000000",
//           border: "none",
//           borderRadius: "5%",
//         }}
//       >
//         <div>
//           <img
//             src={Capture1Co}
//             alt=""
//             style={{
//               borderRadius: "16%",
//               width: "8rem",
//               height: "8rem",
//               marginLeft: "28%",
//               marginTop: "10%",
//             }}
//           />
//         </div>
//         <h1
//           style={{
//             color: "red",
//             fontSize: "180%",
//             color: "white",
//             fontWeight: "bold",
//             textAlign: "center",
//             marginTop: "8%"
//           }}
//         >
//           WORKOUT
//         </h1>
//         <h1 style={{
//             marginTop: "11%",
//             fontSize: "110%",
//             color: "white",
//             marginLeft: "5%"
//         }}>
//         A practice or exercise to test or
//         improve one's fitness for athletic
//         competition, ability, or performance.
//         </h1>
//       </div>

//       <div
//         style={{
//           width: "34%",
//           height: "24rem",
//           backgroundColor: "#000000",
//           border: "none",
//           borderRadius: "5%",
//         }}
//       >
//         <div>
//           <img
//             src={Capture2}
//             alt=""
//             style={{
//               borderRadius: "16%",
//               width: "8rem",
//               height: "8rem",
//               marginLeft: "28%",
//               marginTop: "10%",
//             }}
//           />
//         </div>
//         <h1
//           style={{
//             color: "red",
//             fontSize: "180%",
//             color: "white",
//             fontWeight: "bold",
//             textAlign: "center",
//             marginTop: "8%"
//           }}
//         >
//           NUTRITION
//         </h1>
//         <h1 style={{
//             marginTop: "11%",
//             fontSize: "110%",
//             color: "white",
//             marginLeft: "5%"
//         }}>
//         Nutrition is how food affects the
//         health of the body. Food is essential
//         - it provides vital for survival.
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;

import React from "react";
import { Capture1Co, Capture2 } from "../assets";

function AboutUs() {
  return (
    <div className="w-full bg-zinc-950 py-24 px-10 md:px-20 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Workout Card */}
        <div className="bg-black border border-white/5 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:border-orange-600/50 transition duration-300">
          <div className="w-32 h-32 rounded-2xl overflow-hidden mb-8 shadow-lg shadow-red-500/20">
            <img
              src={Capture1Co}
              alt="Workout"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-widest mb-6">
            WORKOUT
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A practice or exercise to test or improve one's fitness for athletic
            competition, ability, or daily performance.
          </p>
        </div>

        {/* Nutrition Card */}
        <div className="bg-black border border-white/5 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:border-orange-600/50 transition duration-300">
          <div className="w-32 h-32 rounded-2xl overflow-hidden mb-8 shadow-lg shadow-orange-500/20">
            <img
              src={Capture2}
              alt="Nutrition"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-widest mb-6">
            NUTRITION
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Nutrition is how food affects the health of the body. Food is
            essential — it provides the vital energy needed for survival and
            growth.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
