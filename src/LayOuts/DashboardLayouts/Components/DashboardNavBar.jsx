import React, { useState } from "react";
import { CgNotifications } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

const DashboardNavBar = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className="navbar  bg-slate-50 p-4 text-white rounded-md">
      <div className="flex place-content-end">
        <CgNotifications size={24} className=""
        color="black"
         />
        <div
          className="relative ml-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CgProfile
            size={24}
            className=""
            color="black"
            title="Profile"
            tabIndex={0}
          />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <ul>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">
                  Edit Profile
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavBar;
