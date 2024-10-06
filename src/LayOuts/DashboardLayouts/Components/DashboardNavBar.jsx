import React, { useState } from "react";
import { CgNotifications } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";

// Sidebar items
const sidebarItems = [
  { key: 1, path: "/edit-profile", title: "Edit Profile" },
  { key: 2, path: "/logout", title: "Logout" }
];

const DashboardNavBar = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar bg-green-200 p-4 text-white ">
      <div className="flex place-content-end">
        <CgNotifications size={24} className="" color="black" />

        {/* Profile and dropdown container */}
        <div
          className="relative ml-2 text-black cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center space-x-2 cursor-pointer">
            {/* Profile Icon */}
            <CgProfile size={24} className="" color="black" title="Profile" />

            {/* User Name */}
            <div className="text-black">John Doe</div>

            {/* Dropdown Arrow */}
            <IoIosArrowUp
              className={`transform transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              color="black"
            />
          </div>

          {/* Dropdown Sidebar Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0  w-48 bg-white text-black rounded-md shadow-lg">
              <ul className="flex flex-col space-y-2">
                {sidebarItems?.map((item) => (
                  <li
                    key={item.key}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => console.log(`Navigating to ${item.path}`)} // Replace with actual navigation logic
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavBar;
