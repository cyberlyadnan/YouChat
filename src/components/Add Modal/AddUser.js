import React from "react";
import UserCard from "./UserCard";

const AddUser = ({ isAdd, setisAdd }) => {
  const toogleAdd = () => {
    setisAdd(!isAdd);
  };
  return (
    <>
      <div
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center w-full bg-black bg-opacity-50"
      >
        <div className="relative p-2 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-900">
          <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Users
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={toogleAdd}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex space-x-2 mb-4"
            >
              <input
                className="flex-1 text-gray-500 dark:text-gray-400 p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                type="text"
                placeholder="Search Users"
              />
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </form>
            <div className="overflow-y-auto max-h-64">
              <ul className="space-y-3 mb-4">
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
                <li>
                  <UserCard />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
