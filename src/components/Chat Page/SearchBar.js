import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Search from Font Awesome
import { MdAdd } from "react-icons/md"; // Add from Material Design Icons
import { AiOutlineMinus } from "react-icons/ai"; // Minus from Ant Design Icons
import AddUser from "../Add Modal/AddUser";


const SearchBar = () => {
  const [isAdd, setisAdd] = useState(true);
  const toogleAddButton = () => {
    setisAdd(!isAdd);
  };


  return (
    <>
    <div className="flex justify-between py-2 border-t items-center space-x-1">
      <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full shadow-md">
        <FaSearch className="text-gray-500 mx-2" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none w-full text-gray-700"
        />
      </div>
      <div className="cursor-pointer text-black bg-gray-100 rounded-full">
        {isAdd ? (
          <MdAdd className=""  size={24} onClick={toogleAddButton} />
        ) : (
          <AiOutlineMinus size={24} onClick={toogleAddButton} />
        )}
      </div>
    </div>
    {!isAdd && <AddUser isAdd={isAdd} setisAdd={setisAdd} />}
  
    </>
  );
};

export default SearchBar;
