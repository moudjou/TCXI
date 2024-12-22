import { useNavigate } from "react-router-dom";

export default function Table() {
    const navigate = useNavigate()
  return (
    <table className="table-auto w-full border-collapse border border-gray-300 ">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2 text-left font-medium" colSpan={2}>Employee</th>
        </tr>
      </thead>
      <tbody>
        {[
          "Lamri Meriem",
          "Sassane Meriem",
          "Rahmoune Bouchra",
          "Haoua Mohammed",
          "Benzahra Romaisa",
          "Renai Sarah",
        ].map((employee, index) => (
          <tr key={index} className="">
            <td className="border px-4 py-2">{employee}</td>
            <td className="border px-4 py-2">
              <div className="flex space-x-2 justify-center">
                <button className="bg-[#D4D3FD7A] px-6 py-2 rounded-xl w-60" onClick={()=>navigate('/profileHR')}>
                  View Profile
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

