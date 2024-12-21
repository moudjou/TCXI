import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: "/dashboard-square-01.svg", link: "/" },
    { name: "My Profile", icon: "/user-group.svg", link: "/profile" },
    {
      name: "My Performance",
      icon: "/chart-evaluation.svg",
      link: "/performance",
    },
    { name: "My tasks", icon: "/file-01.svg", link: "/tasks" },
    { name: "My holidays", icon: "/file-02.svg", link: "/holidays" },
    { name: "My Feedback", icon: "/information-circle.svg", link: "/feedback" },
  ];

  return (
    <nav className="flex flex-col h-screen w-60 justify-around p-4 ">
      <div className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
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
      <div className="flex flex-col">
          <img
            src="/Group 653.svg"
            alt="Thoughts Icon"
            className=" self-center h-20"
          />
        <div className="flex flex-col px-4 py-2 rounded-lg shadow-md items-center">
          <h3 className="text-sm font-semibold text-gray-800">Thoughts Time</h3>
          <p className="text-xs text-gray-500 mt-2">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <button className="mt-3 text-purple-600 text-sm font-medium">
            Write a message
          </button>
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
          <img src="/logout-03.svg" alt="Logout Icon" className="w-6 h-6" />
          <span>Logout</span>
        </NavLink>
      </div>
    </nav>
  );
}

