import { useState } from "react";// import React from "react";
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
   const [isModalOpen, setIsModalOpen] = useState(false);
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
  
  const handleLogoutClick = () => {
    setIsModalOpen(true); // Open modal on logout button click
  };

  const handleLogoutConfirm = () => {
    // Handle the logout action (e.g., clear session, redirect to login page)
    window.location.href = "/login"; // Example redirect
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };
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
                  <div>
        <button
          onClick={handleLogoutClick}
          className="flex items-center gap-3 p-2 rounded-md h-12 hover:bg-gray-200"
        >
          <img src="/logout-03.svg" alt="Logout Icon" className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </div>
            
          </NavLink>
        </div>
         {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h3 className="text-xl font-semibold mb-4">Are you sure you want to log out?</h3>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleModalClose}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}
