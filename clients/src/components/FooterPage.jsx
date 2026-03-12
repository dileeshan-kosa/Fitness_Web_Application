// import React from "react";
// import { Email, Fb, Insta } from "../assets"; //photos deka ganna

// function FooterPage() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         fontSize: "14px",
//         justifyContent: "space-between",
//         padding: "40px",
//         marginBottom: "25px",
//         width: "100%",
//       }}
//     >
//       <div
//         style={{
//           alignItems: "left",
//           width: "22%",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "26px",
//             color: "#E33C08",
//             fontWeight: "bold",
//           }}
//         >
//           ACTIVE PLATE
//         </h1>
//         <p
//           style={{
//             color: "white",
//             fontSize: "15px",
//             marginTop: "6%",
//           }}
//         >
//           Fitness is a terrific hobby to have because it emphasises living a
//           healthy, clean lifestyle.
//         </p>
//         <h1
//           style={{
//             fontSize: "25px",
//             color: "white",
//             fontWeight: "bold",
//             marginTop: "14%",
//           }}
//         >
//           Social Links
//         </h1>
//         <div style={{ display: "flex"}}>
//           <img src={Fb} alt="" style={{width: "3rem", height: "3rem",}} />
//           <img src={Insta} style={{width: "3.4rem", height: "3rem"}} />
//         </div>
//       </div>
//       <div
//         style={{
//           marginLeft: "-55px",
//           width: "22%",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "26px",
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           Quick Links
//         </h1>
//         <div
//           style={{
//             fontSize: "15px",
//             color: "white",
//             marginTop: "3%",
//             fontWeight: "5%",
//           }}
//         >
//           <h1 style={{ padding: "9px" }}>*Home</h1>
//           <h1 style={{ padding: "9px" }}>*Menu</h1>
//           <h1 style={{ padding: "9px" }}>*Service</h1>
//           <h1 style={{ padding: "9px" }}>*About Us</h1>
//         </div>
//       </div>
//       <div
//         style={{
//           marginLeft: "-55px",
//           width: "22%",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "26px",
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           Services
//         </h1>
//         <div
//           style={{
//             fontSize: "15px",
//             color: "white",
//             marginTop: "3%",
//             fontWeight: "5%",
//           }}
//         >
//           <h1 style={{ padding: "9px" }}>*Exercise Only</h1>
//           <h1 style={{ padding: "9px" }}>*Meal Planning Only</h1>
//           <h1 style={{ padding: "9px" }}>*The combined Approach</h1>
//         </div>
//       </div>
//       <div
//         style={{
//           marginLeft: "-55px",
//           width: "22%",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "26px",
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           Working Hours
//         </h1>
//         <h1
//           style={{
//             color: "white",
//             fontSize: "18px",
//             fontWeight: "bold",
//             marginTop: "12px",
//           }}
//         >
//           Monday–Saturday:
//         </h1>
//         <h1 style={{ color: "white", fontSize: "15px" }}>5.30AM–9.30PM</h1>
//         <h1
//           style={{
//             color: "white",
//             fontSize: "18px",
//             fontWeight: "bold",
//             marginTop: "18px",
//           }}
//         >
//           Sunday:
//         </h1>
//         <h1 style={{ color: "white", fontSize: "15px" }}>Closed</h1>
//         <h1
//           style={{
//             fontSize: "26px",
//             color: "#E33C08",
//             fontWeight: "bold",
//             marginTop: "15px",
//           }}
//         >
//           Send Email
//         </h1>
//         <div style={{display: "flex"}}>
//           <img style={{width: "2rem", height: "2rem", marginTop: "0.2%" }} src={Email} alt="" />
//           <h1 style={{color: "white", fontSize: "15px", marginTop: "2%" }}>Activeplate@gmail.com</h1>
//         </div>
//       </div>
//     </div>

//   );
// }

// export default FooterPage;

import React from "react";
import { Link } from "react-router-dom";
import { Email, Fb, Insta } from "../assets";

function FooterPage() {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8 px-10 md:px-20 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
        {/* Brand Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-black text-orange-600 tracking-widest">
            ACTIVE PLATE
          </h1>
          <p className="leading-relaxed mt-2">
            Fitness is a terrific hobby to have because it emphasizes living a
            healthy, clean lifestyle.
          </p>
          <div className="flex gap-4 mt-6">
            <img
              src={Fb}
              alt="Facebook"
              className="w-10 h-10 hover:opacity-75 cursor-pointer transition"
            />
            <img
              src={Insta}
              alt="Instagram"
              className="w-10 h-10 hover:opacity-75 cursor-pointer transition"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white mb-2">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-orange-500 transition">
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUspart"
                className="hover:text-orange-500 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white mb-2">Services</h2>
          <ul className="space-y-3">
            <li>
              <Link
                to="/exercise-only"
                className="hover:text-orange-500 transition"
              >
                Exercise Only
              </Link>
            </li>
            <li>
              <Link
                to="/meal-plan"
                className="hover:text-orange-500 transition"
              >
                Meal Planning Only
              </Link>
            </li>
            <li>
              <Link
                to="/combined-approach"
                className="hover:text-orange-500 transition"
              >
                The Combined Approach
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white mb-2">Contact Us</h2>
          <div className="flex items-center gap-3 mb-4">
            <img src={Email} alt="Email" className="w-0 h-6" />
            <span className="hover:text-white cursor-pointer transition text-headingColor">
              Activeplate@gmail.com
            </span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2 mt-2">
            Working Hours
          </h2>
          <p>
            <strong className="text-white">Mon–Sat:</strong> 5:30 AM – 9:30 PM
          </p>
          <p>
            <strong className="text-white">Sunday:</strong> Closed
          </p>
        </div>
      </div>

      <div className="text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Active Plate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default FooterPage;
