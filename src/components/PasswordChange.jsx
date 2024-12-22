import { useState } from "react";

export default function PasswordChange() {
  const [form, setForm] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(form);
    setError(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted", form);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Change Password</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 items-start">
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Current Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {error.password && (
              <p className="text-red-500 text-xs mt-1">{error.password}</p>
            )}
          </div>

    
          

          {/* Confirm New Password */}
          <div className="row-span-2">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your new password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {error.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {error.confirmPassword}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex mt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

function validateForm(formData) {
  const errors = {};
  if (!formData.password) {
    errors.password = "Password is required";
  }
  if (!formData.newPassword) {
    errors.newPassword = "New password is required";
  } else if (formData.newPassword.length < 8) {
    errors.newPassword = "Password must be at least 8 characters";
  }
  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (formData.confirmPassword !== formData.newPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
}
