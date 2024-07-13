import React, { useEffect } from 'react';
import ChatList from './ChatList';
import UserDetails from './UserDetails';
import Chat from './Chat';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';



const Main = () => {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // navigate("/")
        // ...
      } else {
        // navigate("/login")
        // User is signed out
        // ...
      }
    });
  }, []);


  return (
    <div className="flex flex-col md:flex-row h-screen md:h-[93vh] rounded-lg bg-black bg-opacity-90 border border-gray-800">
      <div className="w-full md:w-1/5  h-full">
        <ChatList />
      </div>
      <div className="w-full md:w-3/5  h-full">
        <Chat />
      </div>
      <div className="w-full md:w-1/5  h-full">
        <UserDetails />
      </div>
    </div>
  );
};

export default Main;
