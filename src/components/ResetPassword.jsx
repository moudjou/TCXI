import { useState } from "react";

const ResetPasswordPage = () => {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Basic validation
    const errors = {};
    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!form.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Password reset successfully", form);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
     <div
  className="flex-1 bg-custom-gradient text-white flex flex-col justify-center items-center"
>
  <div className="text-center max-w-md">
    {/* Logo */}
    <img src="../../public/logo.svg" alt="Finance Jump Logo" className="w-fit mx-auto mb-4" />


    {/* Tagline */}
    <p className="text-lg mb-6">
      Innovative Financial Solutions for Businesses and Individuals
    </p>

    {/* Button */}
    <button className="bg-white text-blue-600 py-2 px-6 rounded-full font-medium shadow-md hover:shadow-lg">
      Read More
    </button>
  </div>
</div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white">
        <div className="w-full max-w-md px-8">
          <h2 className="text-4xl font-bold mb-6 text-left drop-shadow-md">
            Reset Password
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                className="w-full border border-gray-300 bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {submitted && error.password && (
                <p className="text-red-500 text-xs mt-1">{error.password}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter new password"
                className="w-full border border-gray-300 bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {submitted && error.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {error.confirmPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#534feb] text-white py-2 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Reset Password
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-6 text-center">
            © 2024 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
