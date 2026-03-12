// import React from "react";
// import { mealPlan, Exercise, Combined, KosalaCom, PlusIcon, } from "../assets";
// //import {  } from "../assets";
// import "./css/serviceList.css";
// import { Link } from "react-router-dom";

// function ServicesList() {
//   return (
//     <div
//       style={{
//         width: "98.4%",
//         marginLeft: "-20px",
//         marginBottom: "25px",
//         display: "flex",
//         justifyContent: "space-between",
//         paddingLeft: "10.2%",
//         paddingRight: "10.2%",
//       }}
//     >
//       {/* <section className="service" id="service"> */}
//         <div
//           id="service"
//           style={{
//             width: "23%",
//             height: "24rem",
//           }}
//         >
//           <div
//             style={{
//               textAlign: "center",
//               color: "#E33C08",
//               fontSize: "22px",
//               fontWeight: "bold",
//               marginLeft: "-3px",
//             }}
//           >
//             <h1>Meal Planning Only</h1>
//           </div>
//           <div
//             style={{
//               marginTop: "2.5rem",
//               backgroundColor: "#000000",
//               height: "20rem",
//               border: "none",
//               borderRadius: "5%",
//               position: "relative",
//             }}
//             className="ServiceCardContainer"
//           >
//             <div>
//               <img src={mealPlan} alt="" className="ServiceCardImage" />
//               <div className="middle">
//                 <div className="plusIconInMiddle">
//                   <Link to="meal-plan">
//                     <img src={PlusIcon} alt="" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       {/* </section> */}

//       <div
//         style={{
//           width: "23%",
//           height: "24rem",
//         }}
//       >
//         <div
//           style={{
//             textAlign: "center",
//             color: "#E33C08",
//             fontSize: "22px",
//             fontWeight: "bold",
//             marginLeft: "-11px",
//           }}
//         >
//           <h1>Exercise Only</h1>
//         </div>
//         <div
//           style={{
//             marginTop: "2.5rem",
//             backgroundColor: "#000000",
//             height: "20rem",
//             border: "none",
//             borderRadius: "5%",
//             position: "relative",
//           }}
//           className="ServiceCardContainer"
//         >
//           <div>
//             <img src={Exercise} alt="" className="ServiceCardImage" />
//             <div className="middle">
//               <div className="plusIconInMiddle">
//                 <Link to="exercise-only">
//                   <img src={PlusIcon} alt="" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           width: "23%",
//           height: "24rem",
//         }}
//       >
//         <div
//           style={{
//             textAlign: "center",
//             color: "#E33C08",
//             fontSize: "22px",
//             fontWeight: "bold",
//           }}
//         >
//           <h1>The combined approach</h1>
//         </div>
//         <div
//           style={{
//             marginTop: "2.5rem",
//             backgroundColor: "#000000",
//             height: "20rem",
//             border: "none",
//             borderRadius: "5%",
//             position: "relative",
//           }}
//           className="ServiceCardContainer"
//         >
//           <div>
//             <img src={KosalaCom} alt="" className="ServiceCardImage" />
//             <div className="middle">
//               <div className="plusIconInMiddle">
//                 <Link to="combined-approach">
//                   <img src={PlusIcon} alt="" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServicesList;


import React from "react";
import { Link } from "react-router-dom";
import { mealPlan, Exercise, Combined, PlusIcon } from "../assets"; // Removed KosalaCom, assuming Combined is the correct image

function ServicesList() {
  const services = [
    { title: "Meal Planning Only", img: mealPlan, link: "meal-plan" },
    { title: "Exercise Only", img: Exercise, link: "exercise-only" },
    { title: "The Combined Approach", img: Combined, link: "combined-approach", highlight: true }
  ];

  return (
    <div className="w-full bg-black py-24 px-10 md:px-20" id="service">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white mb-4">Choose Your Path</h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center group">
            <h3 className={`text-2xl font-bold mb-6 ${service.highlight ? 'text-white' : 'text-orange-500'}`}>
              {service.title}
            </h3>
            
            {/* Image Card Container */}
            <div className={`relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transition duration-500 group-hover:-translate-y-4 ${service.highlight ? 'border-4 border-orange-600 ring-4 ring-orange-600/20' : 'border border-white/10'}`}>
              <img src={service.img} alt={service.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-50" />
              
              {/* Hover Overlay with Plus Button */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link to={`/${service.link}`} className="bg-orange-600 p-4 rounded-full transform scale-50 group-hover:scale-100 transition duration-500 shadow-lg shadow-orange-500/50 hover:bg-white">
                  <img src={PlusIcon} alt="Go" className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ServicesList;