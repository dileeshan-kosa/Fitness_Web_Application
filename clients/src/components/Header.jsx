// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { Logo_01, avatar } from "../assets";
// import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
// import { motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { buttonClick, slideTop } from "../animations";
// import { MdLogout } from "react-icons/md";
// import { getAuth } from "firebase/auth";
// import { app } from "../config/firebase.config";
// import { setUserNull } from "../context/actions/userActions";
// import { useEffect } from "react";
// import { HashLink } from "react-router-hash-link";

// const Header = () => {
//   const user = useSelector((state) => state.user);
//   const [isMenu, setIsMenu] = useState(false);
//   const [isService, setIsService] = useState(false);
//   const firebaseAuth = getAuth(app);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const signOut = () => {
//     firebaseAuth
//       .signOut()
//       .then(() => {
//         dispatch(setUserNull());
//         navigate("/login", { replace: true });
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <header
//       className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6"
//       style={{ backgroundColor: "#000000" }}
//     >
//       <NavLink to={"/"} className="flex items-center justify-center gap-4">
//         <img src={Logo_01} className="w-12" alt="" />
//         <p className="font-semibold text-xl text-headingColor">ACTIVE PLATE</p>
//       </NavLink>
//       <nav className="flex items-center justify-center gap-8 text-primary">
//         <ul className="hidden md:flex items-center justify-center gap-16">
//           <NavLink
//             className={({ isActive }) =>
//               isActive ? isActiveStyles : isNotActiveStyles
//             }
//             to={"/"}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             className={({ isActive }) =>
//               isActive ? isActiveStyles : isNotActiveStyles
//             }
//             to={"/menu"}
//           >
//             Menu
//           </NavLink>
//           <NavLink
//             className={({ isActive }) =>
//               isActive ? isActiveStyles : isNotActiveStyles
//             }
//             to={"/service"}
//             onMouseEnter={() => setIsService(true)}
//           >
//             Service
//             <div>
//               {isService && (
//                 <motion.div
//                 {...slideTop}
//                   onMouseLeave={() => setIsService(false)}
//                   className="px-8 py-6 bg-lightOverlay backdrop-blur-md rounded-md shadow-md absolute top-14 right-36 flex flex-col gap-4"
//                 >
//                   <Link to="meal-plan" className="hover:text-red-500 text-xl text-primary ">
//                     Meal Planning Only
//                   </Link>

//                   <Link to="exercise-only" className="hover:text-red-500 text-xl text-primary ">
//                     Exercise Only
//                   </Link>

//                   <Link to="serviceList" className="hover:text-red-500 text-xl text-primary ">
//                     The combined approach
//                   </Link>
//                   <hr />
//                 </motion.div>
//               )}
//             </div>
//           </NavLink>
//           <NavLink
//             className={({ isActive }) =>
//               isActive ? isActiveStyles : isNotActiveStyles
//             }
//             to={"/AboutUspart"}
//           >
//             About Us
//           </NavLink>
//         </ul>

//         {user ? (
//           <>
//             <div
//               className="relative cursor-pointer"
//               onMouseEnter={() => setIsMenu(true)}
//             >
//               <div className="w-12 h-12 rounded-full shadow-md cursor-pointer overflow-hidden flex items-center justify-center">
//                 <motion.img
//                   className="w-full h-full object-cover"
//                   src={user?.picture ? user?.picture : avatar}
//                   whileHover={{ scale: 1.15 }}
//                   referrerPolicy="no-referrer"
//                 />
//               </div>

//               {isMenu && (
//                 <motion.div
//                   {...slideTop}
//                   onMouseLeave={() => setIsMenu(false)}
//                   className="px-6 py-4 w-48 bg-lightOverlay backdrop-blur-md rounded-md absolute top-12 right-0 flex flex-col gap-4"
//                 >
//                   <Link
//                     className=" hover:text-red-500 text-xl text-primary"
//                     to={"/dashboard/home"}
//                   >
//                     Dashboard
//                   </Link>

//                   <Link
//                     className=" hover:text-red-500 text-xl text-primary"
//                     to={"/profile"}
//                   >
//                     My Profile
//                   </Link>
//                   <hr />
//                   <motion.div
//                     {...buttonClick}
//                     onClick={signOut}
//                     className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md
//                bg-headingColor hover:bg-red-600 gap-3"
//                   >
//                     <MdLogout className="text-2xl text-textColor group-hover::text-headingColor" />
//                     <p className="text-xl text-primary group-hover:text-headingColor">
//                       Sign Out
//                     </p>
//                   </motion.div>
//                 </motion.div>
//               )}
//             </div>
//           </>
//         ) : (
//           <>
//             <NavLink to={"/Login"}>
//               <motion.button
//                 {...buttonClick}
//                 className="px-4 py-2 rounded-md bg-headingColor border border-purple-200 cursor-pointer"
//               >
//                 Login
//               </motion.button>
//             </NavLink>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Logo_01, avatar } from "../assets";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick, slideTop } from "../animations";
import { MdLogout } from "react-icons/md";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setUserNull } from "../context/actions/userActions";

const Header = () => {
  const user = useSelector((state) => state.user);
  const [isMenu, setIsMenu] = useState(false);
  const [isService, setIsService] = useState(false);
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    firebaseAuth.signOut().then(() => {
        dispatch(setUserNull());
        navigate("/login", { replace: true });
      }).catch((err) => console.log(err));
  };

  return (
    <header className="fixed w-full z-50 top-0 flex items-center justify-between px-8 md:px-20 py-4 bg-black/90 backdrop-blur-md border-b border-white/10">
      
      {/* LOGO */}
      <NavLink to={"/"} className="flex items-center gap-3">
        <img src={Logo_01} className="w-10 h-10 object-contain" alt="Active Plate Logo" />
        <p className="font-bold text-2xl tracking-widest text-orange-600">ACTIVE PLATE</p>
      </NavLink>

      {/* NAVIGATION LINKS */}
      <nav className="hidden md:flex items-center gap-10">
        <NavLink to={"/"} className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-gray-300 hover:text-white transition"}>Home</NavLink>
        <NavLink to={"/menu"} className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-gray-300 hover:text-white transition"}>Menu</NavLink>
        
        {/* SERVICES DROPDOWN */}
        <div className="relative" onMouseEnter={() => setIsService(true)} onMouseLeave={() => setIsService(false)}>
          <NavLink to={"/service"} className={({ isActive }) => isActive ? "text-orange-500 font-bold cursor-pointer" : "text-gray-300 hover:text-white transition cursor-pointer"}>Services</NavLink>
          <AnimatePresence>
            {isService && (
              <motion.div {...slideTop} className="absolute top-8 -left-4 w-56 bg-black/95 border border-white/10 rounded-xl shadow-2xl py-4 flex flex-col gap-2 overflow-hidden">
                <Link to="/meal-plan" className="px-6 py-2 text-gray-300 hover:text-white hover:bg-orange-600/20 transition">Meal Planning</Link>
                <Link to="/exercise-only" className="px-6 py-2 text-gray-300 hover:text-white hover:bg-orange-600/20 transition">Exercise Only</Link>
                <Link to="/combined-approach" className="px-6 py-2 text-orange-400 font-semibold hover:bg-orange-600/20 transition">The Combined Approach</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <NavLink to={"/AboutUspart"} className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-gray-300 hover:text-white transition"}>About Us</NavLink>
      </nav>

      {/* USER PROFILE / LOGIN */}
      <div className="flex items-center">
        {user ? (
          <div className="relative" onMouseEnter={() => setIsMenu(true)} onMouseLeave={() => setIsMenu(false)}>
            <div className="w-12 h-12 rounded-full border-2 border-orange-500 overflow-hidden cursor-pointer">
              <motion.img whileHover={{ scale: 1.1 }} src={user?.picture ? user?.picture : avatar} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <AnimatePresence>
              {isMenu && (
                <motion.div {...slideTop} className="absolute top-14 right-0 w-48 bg-black/95 border border-white/10 rounded-xl shadow-2xl py-3 flex flex-col">
                  <Link to={"/dashboard/home"} className="px-5 py-2 text-gray-300 hover:text-white hover:bg-orange-600/20 transition">Dashboard</Link>
                  <Link to={"/profile"} className="px-5 py-2 text-gray-300 hover:text-white hover:bg-orange-600/20 transition">My Profile</Link>
                  <hr className="my-2 border-white/10" />
                  <button onClick={signOut} className="px-5 py-2 text-red-500 font-bold flex items-center gap-2 hover:bg-red-500/10 transition w-full text-left">
                    <MdLogout className="text-xl" /> Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <NavLink to={"/Login"}>
            <motion.button {...buttonClick} className="px-6 py-2 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold transition shadow-lg shadow-orange-500/30">
              Login
            </motion.button>
          </NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;