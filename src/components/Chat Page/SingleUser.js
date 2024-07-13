import React from "react";
import logo from "../../assets/images/userComment.png";

const SingleUser = () => {
  return (
    <div className="flex space-x-2 items-center my-1 px-2 py-1 rounded-lg bg-gray-100 shadow-md cursor-pointer hover:bg-gray-300">
      <div>
        <img src={logo} className="w-10 h-10 rounded-full" alt="User" />
      </div>
      <div>
        <h2 className="font-semibold text-sm leading-tight">John Deo</h2>
        <p className="text-[12px] text-gray-600 leading-tight">The last message</p>
      </div>
    </div>
  );
};

export default SingleUser;
