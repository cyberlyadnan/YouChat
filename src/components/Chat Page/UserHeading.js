import React from 'react'
import { BsThreeDots } from 'react-icons/bs';  // Three Dots from Bootstrap Icons
import { FaEdit } from 'react-icons/fa';       // Edit from Font Awesome
import { MdVideoLibrary } from 'react-icons/md'; // Video from Material Design Icons
import user from "../../assets/images/userComment.png"

const UserHeading = () => {
  return (
    <div  className='flex py-2 px-1 align-middle items-center justify-between text-white'>
    <div className='flex items-center space-x-2'>
      <img src={user} className='w-[40px]' alt="User" />
      <p className='text-xm font-bold'>John Deo</p>
    </div>
    <div className='flex items-center space-x-1 cursor-pointer'>
    <BsThreeDots size={20} />
    <MdVideoLibrary size={20} />
    <FaEdit size={20} />
    </div>
    </div>
  )
}

export default UserHeading
