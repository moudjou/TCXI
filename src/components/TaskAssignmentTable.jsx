import React from "react";

export default function TaskAssignmentTable() {
  const tasks = [
    "Customer support",
    "Prepare financial transactions",
    "Training and Development",
    "Manage social media",
    "Analyze customer data",
    "Automate routine process",
    "Prepare business growth plans",
    "Analyze market trends",
    "Monitor customer satisfaction",
    "Evaluate credit risk",
  ];

  const assignedTo = "Firstname Lastname";

  return (
    <div className="p-4">
      <table className="table-auto w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Tasks</th>
            <th className="border border-gray-300 px-4 py-2">Assigned To</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-300 px-4 py-2">{task}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span className="bg-purple-100 px-4 py-1 rounded-full">
                  {assignedTo}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
