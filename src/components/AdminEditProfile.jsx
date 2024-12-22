import { useState } from "react";
import Settings from "./Settings";
import PasswordChange from "./PasswordChange"; // Import the ChangePassword component

export default function EditProfile() {
  const [isEditable, setIsEditable] = useState(false);
  const [profileImage, setProfileImage] = useState("/Rectangle 40.png");

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col px-6 gap-y-4 mt-5">
      <h2 className="font-bold">My Profile</h2>
      <div className="flex justify-between">
        <div className="flex gap-x-4">
          <div className="relative group">
            <img
              src={profileImage}
              alt="Profile"
              className={`${isEditable ? "opacity-80" : ""
              } w-24 h-24 rounded-xl`}
            />
            {isEditable && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl cursor-pointer group-hover:opacity-100 transition-opacity">
                <label
                  htmlFor="file-input"
                  className="text-white font-semibold text-sm"
                >
                  Change Image
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center font-bold">
            <h3>LAMRI MERIEM</h3>
            <h3>IT Department Comanager</h3>
          </div>
        </div>
        {isEditable ? (
          <div className="flex gap-x-4 items-center">
            <button
              onClick={handleEditClick}
              className="text-[#534FEB] px-8 rounded-xl h-10"
            >
              CANCEL
            </button>
            <button className="bg-[#534FEB] text-white px-8 rounded-xl h-10">
              Save
            </button>
          </div>
        ) : (
          <button onClick={handleEditClick} className="text-[#534FEB]">
            Edit Profile
          </button>
        )}
      </div>

      {/* Render Settings component */}
      <Settings isEditable={isEditable} />

      {/* Render PasswordChange component only when isEditable is true */}
      {isEditable && <PasswordChange />}
    </div>
  );
}