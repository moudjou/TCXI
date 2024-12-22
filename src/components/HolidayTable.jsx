import React from "react";

export default function HolidayTable() {
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
            <th className="border border-gray-300 px-4 py-2" colSpan={3}>From</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={index}
            >
              <td className="border border-gray-300 px-4 py-2">{employee}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full">
                  view form
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className="bg-red-100 text-red-700 px-4 py-1 rounded-full mr-2">
                  Refuse
                </button>
                <button className="bg-green-100 text-green-700 px-4 py-1 rounded-full">
                  Confirm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
