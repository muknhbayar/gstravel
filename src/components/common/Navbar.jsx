/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  closeDropdown,
  closeNotifications,
  turnOnDarkMode,
  turnOnLightMode,
  uiStore,
} from "../../features/uiSlice";

import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const rootDoc = document.querySelector(":root");
  const { mode } = useSelector(uiStore);
  const dispatch = useDispatch();

  const setDarkMode = () => {
    dispatch(turnOnDarkMode());
    rootDoc.classList.add("dark");
  };

  const setLightMode = () => {
    dispatch(turnOnLightMode());
    rootDoc.classList.remove("dark");
  };

  // Store mode value to localStorage;
  useEffect(() => {
    rootDoc.classList.add(`${mode}`);
    localStorage.setItem("TripGuide-theme-mode", JSON.stringify(mode));
  }, [mode]);

  // Handle dropdown and notifications close
  const handleClose = (e) => {
    if (!e.target.classList.contains("dropdown-btn")) {
      dispatch(closeDropdown());
    }
    if (!e.target.classList.contains("notification-btn")) {
      dispatch(closeNotifications());
    }
  };

  return (
    <div
      className="fixed z-40 w-full px-3 py-2 bg-white/100 navbar lg:px-6 dark:bg-card-dark/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="flex-center-between">
        <div className="gap-1 flex-align-center md:gap-3">
          <Link to="/" className="flex-shrink-0 !opacity-100 hidden md:block">
            <img
              src={mode === "light" ? "/logo-light.png" : "/logo-dark.png"}
              alt="logo"
              className="w-[8rem]"
            />
          </Link>
          <Link to="/" className="flex-shrink-0 !opacity-100 md:hidden">
            <img
              src={
                mode === "light"
                  ? "/mobile-logo-light.png"
                  : "/mobile-logo-dark.png"
              }
              alt="logo"
              className="w-8"
            />
          </Link>
        </div>

        <div className="flex-align-center gap-x-3 md:gap-x-1">

        <div className="flex-align-center gap-x-5">
          <NavLink to="/" end className="flex-align-center gap-x-2">           
            <p>Нүүр хуудас</p>
          </NavLink>
          <NavLink to="/about" className="flex-align-center gap-x-2">           
            <p>Бидний тухай</p>
          </NavLink>
          <NavLink to="/tours" className="flex-align-center gap-x-2">          
            <p>Аяллууд</p>
          </NavLink>
          <NavLink to="/handbook" className="flex-align-center gap-x-2">           
            <p>Лавлах</p>
          </NavLink>
          <NavLink to="/contact" className="flex-align-center gap-x-2">          
            <p>Холбоо барих</p>
          </NavLink>
        </div>
          <div className="flex-align-center gap-x-3 sm:cursor-pointer">
            <span className="uppercase">Утас: +976-88044231 </span>
            {/* <img src="/images/usa.png" alt="" className="w-5 rounded-full" /> */}
          </div>
          {/*---------------------- Notifications toggle------------------------------------------------ */}
          {/* <div
            className="icon-box !opacity-100 relative notification-btn"
            onClick={() => dispatch(toggleNotifications())}
          >
            <div className="relative">
              <BiBell className="notification-btn text-muted" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full notification-btn"></div>
            </div>
            <Notifications />
          </div> */}
          {/* ---------------------------------Theme toggle------------------------------ */}
          <div className="gap-3 px-2 py-1 rounded-lg select-none flex-align-center bg-slate-100 dark:bg-main-dark w-fit">
            <div
              className={`sm:cursor-pointer ${
                mode === "light" &&
                "bg-slate-300 dark:bg-dark-light rounded-lg px-3 py-1 "
              }`}
              onClick={setLightMode}
            >
              <FiSun />
            </div>
            <div
              className={`sm:cursor-pointer ${
                mode === "dark" &&
                "bg-slate-300 dark:bg-dark-light rounded-lg px-3 py-1 "
              }`}
              onClick={setDarkMode}
            >
              <FiMoon />
            </div>
          </div>
          {/*------------------------------- Profile Dropdown toggle-------------------------------------------- */}
          {/* <div className="relative flex-shrink-0 space-x-1 flex-align-center md:pl-4">
            <div
              className="absolute top-0 left-0 w-full h-full dropdown-btn sm:cursor-pointer"
              onClick={() => dispatch(toggleDropdown())}
            ></div>
            <motion.img
              src="/images/avatar.png"
              alt=""
              className="w-8 h-8 rounded-full dropdown-btn"
              whileTap={{ scale: 0.5 }}
            />

            <BiCaretDown className="dropdown-btn" />
            <Dropdown />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
