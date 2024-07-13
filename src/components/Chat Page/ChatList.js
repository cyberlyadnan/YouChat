import React from "react";
import UserHeading from "./UserHeading";
import SearchBar from "./SearchBar";
import Users from "./Users";

const ChatList = () => {
  return (
    <div className="flex flex-col h-full p-2">
      <UserHeading />
      <SearchBar />
      <div className="flex-1 overflow-y-auto border-t">
        <Users />
      </div>
    </div>
  );
};

export default ChatList;
