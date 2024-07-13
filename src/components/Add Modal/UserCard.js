import React from 'react'
import logo from "../../assets/images/userComment.png"


const UserCard = () => {
  return (
    <div className="flex items-center justify-between my-2 px-4 py-2 rounded-lg bg-gray-300 shadow-md cursor-pointer hover:bg-gray-300">
      <div className="flex items-center space-x-4">
        <img src={logo} className="w-10 h-10 rounded-full" alt="User" />
        <div>
          <h2 className="font-semibold text-sm leading-tight">John Deo</h2>
          <p className="text-[12px] text-gray-600 leading-tight">The last message</p>
        </div>
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add
      </button>
    </div>
  )
}

export default UserCard
