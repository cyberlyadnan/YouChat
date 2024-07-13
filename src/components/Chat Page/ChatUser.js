import React from "react";
import user from "../../assets/images/userComment.png";
import {
  AiOutlineInfoCircle,
  AiOutlinePhone,
  AiOutlineVideoCamera,
} from "react-icons/ai";

const ChatUser = () => {
  return (
    <div className="flex items-center space-x-2 justify-between">
      <div className="flex space-x-2 items-center">
        <div>
          <img src={user} className="w-[40px]" alt="User" />
        </div>
        <div>
          <h2 className="font-semibold leading-tight">John Deo</h2>
          <p className="text-[12px] text-gray-600 leading-tight">
            lorem sepium codin isnpum lg
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="">
          <AiOutlinePhone className="w-[24px] h-[24px]" />
        </button>
        <button className="">
          <AiOutlineVideoCamera className="w-[24px] h-[24px]" />
        </button>
        <button className="">
          <AiOutlineInfoCircle className="w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  );
};

export default ChatUser;
