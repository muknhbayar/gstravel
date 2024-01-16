import React from "react";
import { BiBed, BiCar } from "react-icons/bi";
import { FaPlaneArrival } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const NavFilters = ({ url }) => {
  return (
    <div className="w-full p-4 bg-white dark:bg-card-dark dark:shadow-none max-w-[90%] mx-auto rounded-xl -mt-10 card-shadow">
      <div className="flex-col py-3 border-0 gap-y-8 md:gap-y-0 flex-center-center md:flex-center-between md:flex-row md:border-b dark:border-dark ">
        <div className="flex-align-center gap-x-5">
          <NavLink to="/" end className="flex-align-center gap-x-2">
            <BiBed />
            <p>Зочид буудал</p>
          </NavLink>
          <NavLink to="/flights" className="flex-align-center gap-x-2">
            <FaPlaneArrival />
            <p>Онгоцны нислэг</p>
          </NavLink>
          <NavLink to="/cars" className="flex-align-center gap-x-2">
            <BiCar />
            <p>Машин түрээс</p>
          </NavLink>
        </div>
        <div className="flex-align-center gap-x-2">
          <select className="bg-transparent border-0 outline-none text-slate-500 dark:text-slate-300 dark:bg-card-dark ">
            <option value="round-trip">Аяллын төрөл</option>
            <option value="round-trip">Бизнесс аялал</option>
            <option value="round-trip">Амралт зугаалга</option>
            <option value="round-trip">Аялал жуулчлал</option>
          </select>
          <select className="bg-transparent border-0 outline-none text-slate-500 dark:text-slate-300 dark:bg-card-dark">
            <option value="round-trip">1 зорчигч</option>
            <option value="round-trip">2 зорчигч</option>
            <option value="round-trip">3 зорчигч</option>
            <option value="round-trip">4 зорчигч</option>
            <option value="round-trip">5 зорчигч</option>
            <option value="round-trip">5-аас дээш зорчигч</option>
          </select>
        </div>
      </div>
      <div className="flex-col mt-4 gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row">
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Хаанаас</h1>
            <input
              type="text"
              className="w-full bg-transparent border-0 outline-none"
              placeholder="Where are you from?"
            />
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Хаашаа</h1>
            <input
              type="text"
              className="w-full bg-transparent border-0 outline-none"
              placeholder="Where are you going?"
            />
          </div>
        </div>
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Эхлэх хугацаа</h1>
            <input
              type="text"
              className="w-full bg-transparent border-0 outline-none"
              placeholder="Add date"
            />
          </div>
          <div className="flex-1 w-full p-2 border rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark dark:border-dark-light">
            <h1 className="font-bold">Дуусах хугацаа</h1>
            <input
              type="text"
              className="w-full bg-transparent border-0 outline-none"
              placeholder="Add date"
            />
          </div>
        </div>
        <Link
          to={url}
          className="w-full text-center !opacity-100 btn btn-primary md:w-fit"
        >
          Хайх
        </Link>
      </div>
    </div>
  );
};

export default NavFilters;
