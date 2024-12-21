export default function Settings({ isEditable }) {
  return (
    <div className="flex flex-col">
      <form
        action=""
        className={`grid grid-cols-2 gap-4 py-3 ${isEditable ? 'text-black' :'text-[#A1A3AB]'}`}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="border-2 rounded outline-none px-2"
            disabled={!isEditable}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border-2 rounded outline-none px-2"
            disabled={!isEditable}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="adress" className="mb-1 font-medium">
            Personal Address
          </label>
          <input
            type="text"
            name="adress"
            className="border-2 rounded outline-none px-2"
            disabled={!isEditable}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 font-medium">
            Phone Number
          </label>
          <input
            type="number"
            name="phone"
            className="border-2 rounded outline-none px-2"
            disabled={!isEditable}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="department" className="mb-1 font-medium">
            Department
          </label>
          <input
            type="text"
            name="department"
            className="border-2 rounded outline-none px-2"
            disabled={!isEditable}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="mb-1 font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            name="date"
            className="border-2 rounded outline-none px-2"
            disabled={!isEditable}
          />
        </div>
      </form>
    </div>
  );
}

