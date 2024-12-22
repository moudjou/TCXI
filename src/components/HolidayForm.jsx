import { useState } from "react";

const VacationForm = () => {
  const [formData, setFormData] = useState({
    department: "",
    phone: "",
    jobTitle: "",
    email: "",
    reason: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields (example validation)
    if (!formData.department || !formData.email) {
      alert("Please fill out all required fields.");
      return;
    }

    // Submit data (for example, log it or send to an API)
    console.log("Submitted Form Data:", formData);

    // Reset form after submission
    setFormData({
      department: "",
      phone: "",
      jobTitle: "",
      email: "",
      reason: "",
    });

    alert("Your holiday request has been submitted!");
  };

  return (
    <div className="bg-white p-8 rounded-lg  w-full h-full "> 
      <h1 className="text-2xl font-bold mb-6">My Holiday</h1>
          <form onSubmit={handleSubmit} >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div >
          <label htmlFor="department" className="block text-sm font-semibold text-gray-700">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            placeholder="Example"
            className="mt-1 block w-full rounded-md  p-2 bg-[#F8FBFF] border border-[#534FEB]" 
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+213"
            className="mt-1 block w-full rounded-md p-2 bg-[#F8FBFF] border border-[#534FEB]"
          />
        </div>

        <div>
          <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            placeholder="Example"
            className="mt-1 block w-full rounded-md p-2 bg-[#F8FBFF] border border-[#534FEB]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@email.com"
            className="mt-1 block w-full rounded-md p-2 bg-[#F8FBFF] border border-[#534FEB]"
          />
        </div>
      </div>

      <div className="mb-6 my-3">
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
          Reason
        </label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
          placeholder="Example"
          rows="3"
          className="mt-1 block w-full rounded-md p-2 bg-[#F8FBFF] border border-[#534FEB]"
        />
      </div>
              
</form>
      <div className="flex justify-end space-x-4 ">
        <button
          type="button"
          className="text-[#534FEB] hover:text-[#433ED6] text-sm font-semibold"
          onClick={() => 
            setFormData({
              department: "",
              phone: "",
              jobTitle: "",
              email: "",
              reason: "",
            })
          }
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#534FEB] text-white px-4 py-2 rounded-md hover:bg-[#433ED6] text-sm font-medium"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default VacationForm;
