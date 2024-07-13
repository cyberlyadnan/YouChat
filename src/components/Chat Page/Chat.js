import React from 'react'
import ChatUser from './ChatUser'
import ChatsArea from './ChatsArea'
import MessageInputBar from './MessageInputBar'
import backgrounImage from "../../assets/images/chatBackgroundDark.png"


const Chat = () => {
  return (
    <div className='flex flex-col h-[90vh] p-2 border-l-1 border-r-1 border-gray-600 space-y-1' >
        <div className="flex-none h-[10%] bg-gray-200 p-2 rounded-lg cursor-pointer">
      <ChatUser />
      </div>
      <div className="flex-grow h-[80%] p-2 rounded-lg " style={{ backgroundImage: `url('${backgrounImage}')` }}>
      <ChatsArea />
      </div>
      <div className="flex-none h-[9%] p-2 rounded-lg ">
      <MessageInputBar />
      </div>
    </div>
  )
}

export default Chat
