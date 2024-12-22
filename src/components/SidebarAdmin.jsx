import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "My Profile", icon: "/user-group.svg", link: "/profile" },
    { name: "Check in tracking", icon: "../../public/ei_check.svg", link: "/check-in" },
    { name: "Facial Recognition", icon: "../../public/face_id.svg", link: "/facial-recognition" },
    { name: "Add an employee", icon: "../../public/add.svg", link: "/add-employee" },
  ];

  return (
      <nav className="flex flex-col h-screen w-60 justify-around p-4">
       <img src="../../public/logo violet 1.svg" alt="Finance Jump Logo" className="w-32 h-fit mx-auto mt-5 p-0" />    
      <div className="flex flex-col gap-4 ">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.link}
            key={index} onClick={item.action || null}
            className={`flex items-center gap-3 p-2 rounded-md h-13 ${
              location.pathname === item.link
                ? "bg-[#534FEB] text-white rounded-md"
                : "hover:bg-gray-200 rounded"
            }`}
          >
            <img
              src={item.icon}
              alt={`${item.name} Icon`}
              className="w-6 h-6"
            />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div>
        <NavLink
          to="/logout"
          className={`flex items-center gap-3 p-2 rounded-md  ${
            location.pathname === "/logout"
              ? "bg-[#534FEB] text-white rounded-md"
              : "hover:bg-gray-200 rounded-md"
          }`}
        >
          <img src="/logout-03.svg" alt="Logout Icon" className="w-6 h-6" />
          <span>Logout</span>
        </NavLink>
      </div>
    </nav>
  );
}