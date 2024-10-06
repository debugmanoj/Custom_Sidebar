import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const DashboardSideBar = ({ mobile }) => {
  const [open, setOpen] = useState(true);
  const [hoveredMenu, setHoveredMenu] = useState(null); // Track which menu is hovered
  const location = useLocation();

  const Menus = [
    {
      title: "Dashboard",
      src: "Overview",
      key: 0,
      subMenu: [
        { title: "Overview", src: "Overview", path: "/overview" },
        { title: "Transactions", src: "Overview", path: "/Transactions" },
      ],
    },
    {
      title: "E&B",
      src: "Transactions",
      key: 1,
      subMenu: [{ title: "sample", src: "Overview", path: "/sample" }],
    },
    {
      title: "Data Groups",
      src: "Card",
      gap: true,
      key: 2,
      subMenu: ["Sub A", "Sub B"],
    },
    { title: "Tools", src: "Calendar", key: 3, subMenu: ["Sub A", "Sub B"] },
    { title: "Settings", src: "Debt", key: 4, subMenu: ["Sub A", "Sub B"] },
    { title: "Legal information", src: "Legal", key: 5 },
    { title: "Notifications", src: "Notifications", gap: true, key: 6 },
    { title: "Setting", src: "Settings", key: 7 },
  ];

  const selectedKey = Menus.find(
    (menu) => menu.path === location.pathname
  )?.key;

  return (
    <div
      className={`flex ${mobile ? "w-full flex-row h-auto" : null} font-light`}
    >
      <div
        className={`bg-green-200 h-screen p-5 pt-8 relative duration-300 ease-in-out ${
          open ? (mobile ? "w-screen" : "w-60") : "w-20"
          
        }
        mobile ? "fixed bottom-0 left-0 w-full flex-row justify-evenly" : null
         transition-all rounded-md ${mobile ? "flex-row justify-evenly" : null}`} // Sidebar width animation
      >
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center cursor-pointer"
        >
          <HiMiniBars3BottomLeft
            className={`transform transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            } ${mobile && "hidden"}`}
            color="black"
            size={18}
          />
        </div>

        <ul
          className={`pt-6 ${mobile ? "flex items-end  flex-row justify-between w-full" : ""}`}
        >
          {Menus.map((Menu) => (
            <li
              key={Menu.key}
              onMouseEnter={() => setHoveredMenu(Menu.key)} // Show submenu on hover
              onMouseLeave={() => setHoveredMenu(null)} // Hide submenu on mouse leave
              className={`relative ${mobile ? "flex-1 text-center" : ""}`}
            >
              <div
                className={`flex ${
                  mobile ? "flex-col items-center" : "flex-col"
                } rounded-md p-2 cursor-pointer hover:bg-slate-800 hover:text-white 
                  hover:font-bold hover:tracking-wide text-stone-950 text-md items-center 
                  gap-x-4 ${
                    selectedKey === Menu.key
                      ? "bg-stone-800 text-white font-bold"
                      : ""
                  } ${Menu.gap ? "mt-9" : "mt-2"}`}
              >
                <img
                  src={`./assets/${Menu.src}.svg`}
                  alt={Menu.title}
                  className={`${mobile ? "mb-1" : ""}`} // Add margin for mobile
                />
                <span
                  className={`${!open && "hidden"} ${
                    mobile && "hidden"
                  } origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </div>

              {/* Submenu */}
              {Menu.subMenu && hoveredMenu === Menu.key && (
                <ul
                  className={`absolute cursor-pointer 
                  left-full ${
                    mobile ? "bottom-11 left-5 right-7 " : "top-0 "
                  } text-center bg-white shadow-lg rounded-md p-1 w-48`}
                >
                  {Menu.subMenu.map((sub, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-300 hover:text-white hover:font-bold rounded-md"
                    >
                      <NavLink
                        className="flex rounded-md p-1 cursor-pointer gap-x-2"
                        to={sub.path}
                      >
                        <img src={`./assets/${sub.src}.svg`} alt={sub.title} />
                        <span
                          className={`${
                            !open && "visible"
                          } origin-left duration-200`}
                        >
                          {sub.title}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSideBar;
