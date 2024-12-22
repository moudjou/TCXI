import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

  const menuItems = [
    { name: "My Profile", icon: "/user-group.svg", link: "/admin-profile" },
    { name: "Check in tracking", icon: "/ei_check.svg", link: "/check-in" },
    { name: "Facial Recognition", icon: "/face_id.svg", link: "/face-id" },
    { name: "Add an employee", icon: "/add.svg", link: "/add-employee" },
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
    <nav className="flex flex-col h-screen w-60 justify-around p-4">
      <img
        src="/logo violet 1.svg"
        alt="Finance Jump Logo"
        className="w-32 h-fit mx-auto mt-5 p-0"
      />
      <div className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md h-12 ${
                isActive ? "bg-[#534FEB] text-white" : "hover:bg-gray-200"
              }`
            }
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
        <button
          onClick={handleLogoutClick}
          className="flex items-center gap-3 p-2 rounded-md h-12 hover:bg-gray-200"
        >
          <img src="/logout-03.svg" alt="Logout Icon" className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </div>

      {/* Logout Confirmation Modal */}
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
  );
}
