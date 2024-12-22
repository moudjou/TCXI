import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeedbackPopupOpen, setFeedbackPopupOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: "/dashboard-square-01.svg", link: "/" },
    { name: "My Profile", icon: "/user-group.svg", link: "/profile" },
    {
      name: "My Absentees",
      icon: "/chart-evaluation.svg",
      link: "/absentees",
    },
    { name: "My Tasks", icon: "/file-01.svg", link: "/tasks" },
    { name: "My Holidays", icon: "/file-02.svg", link: "/holidays" },
    {
      name: "My Feedback",
      icon: "/information-circle.svg",
      link: "#",
      action: () => setFeedbackPopupOpen(true), // Open popup on click
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
      <nav className="flex flex-col h-screen w-60 justify-around p-4 bg-[#F8FBFF] max-md:w-fit max-md:fixed">
        <div>
          <div className="flex justify-center">
            <img
              src="/logo violet 1.svg"
              alt="Logo"
              className="w-32 h-auto mb-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.link}
                key={index}
                onClick={item.action || null}
                className={`flex items-center p-2 rounded ${
                  location.pathname === item.link
                    ? "bg-[#534FEB] text-white rounded"
                    : "hover:bg-gray-200 rounded"
                }`}
              >
                <img
                  src={item.icon}
                  alt={`${item.name} Icon`}
                  className="w-6 h-6 max-md:self-center "
                />
                <span className="max-md:hidden max-lg:hidden">{item.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col">
            <img
              src="/Group 653.svg"
              alt="Thoughts Icon"
              className="self-center h-20 max-md:hidden max-lg:hidden"
            />
            <div className="flex flex-col px-4 py-2 rounded-lg shadow-md items-center ">
              <h3 className="text-sm font-semibold text-gray-800 max-md:hidden ">
                Thoughts Time
              </h3>
              <p className="text-xs text-gray-500 mt-2 max-md:hidden max-lg:hidden">
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </p>
              <button className="mt-3 text-purple-600 text-sm font-medium">
                Write a message
              </button>
            </div>
          </div>
        </div>
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

      {/* Feedback Popup */}
      {isFeedbackPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Submit Feedback</h2>
            <textarea
              className="w-full p-2 border rounded mb-4"
              rows="4"
              placeholder="Write your feedback here..."
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setFeedbackPopupOpen(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#534FEB] text-white rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

