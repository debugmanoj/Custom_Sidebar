import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const DashboardSideBar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation(); // Get the current location from React Router

  const Menus = [
    { title: "Dashboard", src: "Overview", path: "/overview", key: 0 },
    { title: "E&B", src: "Transactions", path: "/Transactions", key: 1 },
    { title: "Data Groups", src: "Card", gap: true, key: 2 },
    { title: "Tools", src: "Calendar", key: 3 },
    { title: "Settings", src: "Debt", key: 4 },
    { title: "Legal information", src: "Legal", key: 5 },
    { title: "Notifications", src: "Notifications", gap: true, key: 6 },
    { title: "Setting", src: "Settings", key: 7 },
  ];

  // Derive the selected key based on the current location
  const selectedKey = Menus.find(menu => menu.path === location.pathname)?.key;

  return (
    <div className="flex font-light">
      <div
        className={`${
          open ? "w-60" : "w-20"
        } bg-green-200 h-screen p-5 pt-8 relative duration-300 rounded-md`}
      >
        <img
          src="./assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            NEXUS
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu) => (
            <li key={Menu.key}>
              <NavLink
                className={`flex rounded-md p-2 cursor-pointer hover:bg-slate-800 hover:text-white hover:font-bold hover:tracking-wide text-stone-950 text-md items-center gap-x-4 ${
                  selectedKey === Menu.key
                    ? "bg-stone-800 text-white font-bold"
                    : ""
                } ${Menu.gap ? "mt-9" : "mt-2"}`}
                to={Menu.path}
              >
                <img src={`./assets/${Menu.src}.svg`} alt={Menu.title} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSideBar;
