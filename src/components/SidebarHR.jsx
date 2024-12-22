// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function SidebarHR() {

//   const menuItems = [
//     { name: "Dashboard", icon: "/dashboard-square-01.svg", link: "/hr" },
//     {
//       name: "Personal Information",
//       icon: "/user-group.svg",
//       link: "/profileHR",
//     },
//     {
//       name: "Entry & Exit Times",
//       icon: "/file-01.svg",
//       link: "/entry",
//     },
//     { name: "Assigned Tasks", icon: "/file-01.svg", link: "/assigned" },
//     {
//       name: "Holiday Request",
//       icon: "/information-circle.svg",
//       link: "/holiday",
//     },
//     {
//       name: "Employee Account",
//       icon: "/Vector (1).svg",
//       link: "/account",
//     },
//     {
//       name: "Tasks Assignment",
//       icon: "/clarity_tasks-line.svg",
//       link: "/taskAssi",
//     },
//   ];
//   return (
//     <>
//       <nav className="flex flex-col h-screen w-60 justify-around p-4">
//         <div className="flex flex-col gap-2">
//           {menuItems.map((item, index) => (
//             <NavLink
//               to={item.link}
//               key={index}
//               onClick={item.action || null} // Handle feedback popup action
//               className={`flex items-center gap-3 p-2 rounded ${
//                 location.pathname === item.link
//                   ? "bg-[#534FEB] text-white rounded"
//                   : "hover:bg-gray-200 rounded"
//               }`}
//             >
//               <img
//                 src={item.icon}
//                 alt={`${item.name} Icon`}
//                 className="w-6 h-6"
//               />
//               <span>{item.name}</span>
//             </NavLink>
//           ))}
//         </div>

//         <div>
//           <NavLink
//             className={`flex items-center gap-3 p-2 rounded ${
//               location.pathname === "/logout"
//                 ? "bg-[#534FEB] text-white rounded"
//                 : "hover:bg-gray-200 rounded"
//             }`}
//           >
//             <img src="/logout-03.svg" alt="Logout Icon" className="w-6 h-6" />
//             <span>Logout</span>
//           </NavLink>
//         </div>
//       </nav>
//     </>
//   );
// }
import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarHR() {
  const menuItems = [
    { name: "Dashboard", icon: "/dashboard-square-01.svg", link: "/hr" },
    {
      name: "Personal Information",
      icon: "/user-group.svg",
      link: "/profileHR",
    },
    {
      name: "Entry & Exit Times",
      icon: "/file-01.svg",
      link: "/entry",
    },
    {
      name: "Holiday Request",
      icon: "/information-circle.svg",
      link: "/holiday",
    },
    {
      name: "Employee Account",
      icon: "/Vector (1).svg",
      link: "/account",
    },
    {
      name: "Tasks Assignment",
      icon: "/clarity_tasks-line.svg",
      link: "/assigned",
    },
  ];
  return (
    <>
      <nav className="flex flex-col h-screen w-60 justify-between p-4 bg-[#F8FBFF]">
        <div>
          {/* Logo Section */}
          <div className="flex justify-center mb-1">
            <img src="/logo violet 1.svg" alt="Logo" className="w-32 h-auto" />
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.link}
                key={index}
                onClick={item.action || null} // Handle feedback popup action
                className={`flex items-center gap-3 p-2 rounded ${
                  location.pathname === item.link
                    ? "bg-[#534FEB] text-white rounded"
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
        </div>

        {/* Logout Section */}
        <div>
          <NavLink
            className={`flex items-center gap-3 p-2 rounded ${
              location.pathname === "/logout"
                ? "bg-[#534FEB] text-white rounded"
                : "hover:bg-gray-200 rounded"
            }`}
          >
            <img src="/logout-03.svg" alt="Logout Icon" className="w-6 h-6" />
            <span>Logout</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
