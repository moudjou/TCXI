import React from "react";

export default function EmployeeTable() {
  const employees = [
    "Lamri Meriem",
    "Sassane Meriem",
    "Rahmoune Bouchra",
    "Haoua Mohammed",
    "Benzahra Romaisa",
    "Renai Sarah",
    "Meghoufel Khadidja",
    "Abdelli Chiraz",
    "Tabeti Ali",
    "Benheddbadj Oussama",
  ];

  return (
    <div className="p-4">
      <table className="table-auto w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Employee</th>
            <th className="border border-gray-300 px-4 py-2">
              Real Entry Time
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Real Entry Time
            </th>
            <th className="border border-gray-300 px-4 py-2">Real Exit Time</th>
            <th className="border border-gray-300 px-4 py-2">Real Exit Time</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-300 px-4 py-2">{employee}</td>
              <td className="border border-gray-300 px-4 py-2">Text</td>
              <td className="border border-gray-300 px-4 py-2">Text</td>
              <td className="border border-gray-300 px-4 py-2">Text</td>
              <td className="border border-gray-300 px-4 py-2">Text</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
