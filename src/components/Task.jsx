
const tasks = [
  {
    title: "IOS Dev Team Meeting",
    time: "10:00 - 12:00",
    color: "bg-green-200",
  },
  {
    title: "SEO Analytics",
    time: "01:00 - 03:00",
    color: "bg-purple-200",
  },
  {
    title: "Logo",
    time: "01:00 - 03:00",
    color: "bg-purple-300",
  },
  {
    title: "Digital Marketing",
    time: "04:00 - 05:00",
    color: "bg-red-300",
  },
  {
    title: "Web Development",
    time: "06:00 - 08:00",
    color: "bg-orange-200",
  },
];

export default function Task() {
  return (
    <div className="flex flex-col p-4 border rounded shadow-lg bg-white w-full">
      <h2 className="text-xl font-bold">Daily Task</h2>
      <p className="text-sm text-gray-500">
        Percentage of product a user demands
      </p>
      <div className="mt-4 relative border-l-2 border-gray-300 pl-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`flex flex-col px-4 py-3 rounded-md shadow-sm ${task.color} mb-4`}
            style={{
              position: "relative",
            }}
          >
            <h3 className="font-semibold text-sm">{task.title}</h3>
            <p className="text-xs text-gray-600">{task.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}