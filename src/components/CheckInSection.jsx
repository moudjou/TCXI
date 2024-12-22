const Check = [
  { employee: 'Bilal Moussous', date: '21-12-2024', hour: '08:30', department: 'IT', status: 'checked' },
  { employee: 'Bilal Moussous', date: '21-12-2024', hour: '08:30', department: 'IT', status: 'checked' },
  { employee: 'Bilal Moussous', date: '21-12-2024', hour: '08:30', department: 'IT', status: 'uncheked' },
];

export default function CheckList() {
  return (
    <div className="p-6 space-y-4">
      {Check.map((e, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 border border-gray-200"
        >
          {/* Employee Info */}
          <div className="flex flex-col space-y-1">
            <span className="text-lg font-semibold text-gray-800">{e.employee}</span>
            <span className="text-sm text-gray-500">{e.date}</span>
          </div>

          {/* Time */}
          <span className="text-sm font-medium text-gray-600">{e.hour}</span>

          {/* Department */}
          <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">
            {e.department}
          </span>

          {/* Status */}
          <div className="flex items-center space-x-2">
            <img src="/Group.svg" alt="Checked Icon" className="w-5 h-5" />
            <span className="text-sm font-semibold text-green-600">{e.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
