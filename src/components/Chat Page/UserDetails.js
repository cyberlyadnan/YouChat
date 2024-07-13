import React from "react";
import { FaImage } from "react-icons/fa";
import userAvatar from "../../assets/images/userComment.png"; // Use the correct path for your avatar image
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { toast } from "react-toastify";

const UserDetails = () => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Logged Out Successfully")
      })
      .catch((error) => {
        toast.error(error.message)
        // An error happened.
      });
  };
  return (
    <div
      className="px-4 py-4 flex flex-col space-y-2 h-full text-white overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      {/* User Info */}
      <div className="flex flex-col items-center border-b border-gray-700 pb-4">
        <img
          src={userAvatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mb-2"
        />
        <h2 className="text-xl font-bold">Jane Doe</h2>
        <p className="text-sm text-gray-400">Lorem Ipsum dolor sit amet.</p>
      </div>

      {/* Chat Settings */}
      <div className="flex flex-col border-b border-gray-700 py-1">
        <h2 className="font-bold">Chat Settings</h2>
        {/* Add chat settings options here */}
      </div>

      {/* Privacy & Help */}
      <div className="flex flex-col border-b border-gray-700 py-1">
        <h2 className="font-bold">Privacy & help</h2>
        {/* Add privacy and help options here */}
      </div>

      {/* Shared Photos */}
      <div className="flex flex-col border-b border-gray-700 py-1">
        <h2 className="font-bold">Shared photos</h2>
        <div className="space-y-1 mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img
                src={userAvatar}
                alt={`Shared ${index}`}
                className="w-8 h-8 rounded-lg"
              />
              <div>
                <h2 className="text-sm text-gray-300">photo_2024_2.png</h2>
                <FaImage className="text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-auto flex space-x-2">
        <button className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Block User
        </button>
        <button onClick={handleLogout} className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
