import { useLocation, NavLink } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "My Profile", icon: "/user-group.svg", link: "/profile" },
    { name: "Check in tracking", icon: "/ei_check.svg", link: "/check-in" },
    { name: "Facial Recognition", icon: "/face_id.svg", link: "/facial-recognition" },
    { name: "Add an employee", icon: "/add.svg", link: "/add-employee" },
  ];

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
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded-md h-12 ${
              isActive ? "bg-[#534FEB] text-white" : "hover:bg-gray-200"
            }`
          }
        >
          <img src="/logout-03.svg" alt="Logout Icon" className="w-6 h-6" />
          <span>Logout</span>
        </NavLink>
      </div>
    </nav>
  );
}
