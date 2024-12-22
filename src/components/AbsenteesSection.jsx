

const MyAbsentees = () => {
  // Example data for absentees
  const absentees = [
    { employee: 'John Doe', date: '2024-12-01' },
    { employee: 'Jane Smith', date: '2024-12-03' },
    { employee: 'Alex Brown', date: '2024-12-05' },
    { employee: 'Chris Johnson', date: '2024-12-07' },
    { employee: 'Taylor Davis', date: '2024-12-09' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold mb-4">My absentees</h1>
      <div className="space-y-4">
        {absentees.map((absentee, index) => (
          <div
            key={index}
            className="flex justify-between items-center border rounded-lg p-4 shadow-sm max-md:ml-60 max-sm:ml-60"
          >
            <div className="flex-1 flex items-center">
              <p className="text-sm font-medium text-gray-700 mr-2">
                Employee:
              </p>
              <p className="text-gray-800">{absentee.employee}</p>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-sm font-medium text-gray-700 mr-2">
                Date of absence:
              </p>
              <p className="text-gray-800">{absentee.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAbsentees;
