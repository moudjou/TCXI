import { useState } from "react";

const NotificationCard = () => {
  const [notifications, setNotifications] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      title: "Brainstorming",
      category: "Research",
      status: "Viewed",
      isSeen: true,
    }))
  );

  // Toggle Seen/Unseen status
  const toggleSeen = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id
        ? { ...notification, isSeen: !notification.isSeen }
        : notification
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">My Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-center space-x-10">
              <h3 className="text-lg font-bold text-gray-800">
                {notification.title}
              </h3>
              <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">
                {notification.category}
              </span>
            </div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => toggleSeen(notification.id)}
            >
              <img
                src={
                  notification.isSeen
                    ? "../../public/Group.svg" // Replace with the actual path for the "Seen" icon
                    : "assets/unseen_icon.svg" // Replace with the actual path for the "Unseen" icon
                }
                alt={notification.isSeen ? "Seen" : "Unseen"}
                className="w-5 h-5"
              />
              <span
                className={`text-sm font-semibold ${
                  notification.isSeen ? "text-[#1BA019]" : "text-red-500"
                }`}
              >
                {notification.isSeen ? "Viewed" : "Unviewed"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCard;
