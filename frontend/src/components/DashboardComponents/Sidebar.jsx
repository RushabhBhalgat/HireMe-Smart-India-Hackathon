import React, { useState } from "react";
import HMLogo from "../../images/HireMeLogo.png";
//ICONS//
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
//ICONS//

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const SIDEBAR_LINKS = [
    { id: 1, path: "/dashboard/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/technical-test", name: "Technical test", icon: TbUsers },
    { id: 3, path: "/roadmap", name: "Roadmap", icon: LuCalendar },
    {
      id: 4,
      path: "/cognitiveTest",
      name: "Cognitive Test",
      icon: LuMessageSquare,
    },
    {
      id: 5,
      path: "/personality-assessment",
      name: "Personality Assessment",
      icon: FaSuitcase,
    },
    { id: 6, path: "/interview", name: "Interview", icon: LuUser },
  ];
  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      {/*LOGO*/}
      {/*<div className="flex space-x-4"> 
        <img src="/govt_punjab.png" alt="logo" className="w-20 hidden md:flex" />
        <img src="/alllogos.png" alt="logo" className="w-25 hidden md:flex" />
      </div> */}

      <div className="mb-8">
        <img src={HMLogo} alt="logo" className="w-12 hidden md:flex" />
      </div>
      {/*LOGO*/}

      {/*Navigation links*/}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-text-indigo-500 ${
              activeLink === index
                ? "bg-customLightBlue text-customDarkBlue"
                : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/*Navigation links*/}

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <a href="http://localhost:5173/communitypage">
          <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
            {" "}
            <span></span> <span className="hidden md:flex">Community Page</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
