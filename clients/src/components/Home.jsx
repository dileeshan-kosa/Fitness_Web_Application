// import React from "react";
// import "./css/home.css";
// import backgroundImage from "../assets/img/Backgro1.jpg";

// function Home() {
//   return (
//     <div className="homeMainContainer">
//       <img
//         src={backgroundImage}
//         alt=""
//         className="firstbackgroundImageOfHomePage"
//       />
//       <div className="imageText">
//         <div style={{color: "white", fontSize: "25px"}}>
//           <p >Welcome to ActivePlate.com, a website dedicated to helping you live a</p>
//           <p>healthier life in the hectic world of today. To help you make
//           long-lasting,</p>
//           <p>good changes in your life, we provide personalised
//           guidance and </p>
//           <p>health awareness. Join us for a happier, healthier life.</p>
//           </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import backgroundImage from "../assets/img/Backgro1.jpg";

function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Fitness Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 w-full max-w-7xl px-10 md:px-20 flex flex-col items-start mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Transform Your Body<br />
          <span className="text-orange-600">Elevate Your Life</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 border-l-4 border-orange-600 pl-6">
          Welcome to ActivePlate, dedicated to helping you live a healthier life in the hectic world of today. We provide personalized guidance and health awareness to help you make long-lasting, positive changes.
        </p>
      </div>
    </div>
  );
}
export default Home;