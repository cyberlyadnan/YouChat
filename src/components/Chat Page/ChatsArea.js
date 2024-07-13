import React, { useEffect, useRef } from 'react';


const ChatsArea = () => {
  const scrollToRef  = useRef(null)
  
  const messages = [
    { id: 1, text: "Hey there!", sender: "user" },
    { id: 2, text: "Hi! How are you?", sender: "other" },
    { id: 3, text: "I'm good, thanks!", sender: "user" },
    { id: 4, text: "That's great!", sender: "other" },
    { id: 5, text: "Hey there!", sender: "user" },
    { id: 6, text: "Hi! How are you?", sender: "other" },
    { id: 7, text: "I'm good, thanks!", sender: "user" },
    { id: 8, text: "That's great!", sender: "other" },
    { id: 9, text: "Hey there!", sender: "user" },
    { id: 10, text: "Hi! How are you?", sender: "other" },
    { id: 11, text: "I'm good, thanks!", sender: "user" },
    { id: 12, text: "That's great!", sender: "other" },
  ];
  



  useEffect(() => {
    // Scroll to the bottom of the chat area when component mounts or when messages change
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ scrollbarWidth: 'none' }} >
      <div className="flex flex-col-reverse">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mt-2`}
          >
            <div
              className={`leading-tight rounded-lg py-1 px-2 max-w-[70%] ${message.sender === 'user' ? 'bg-blue-600 text-white self-end' : 'bg-gray-300 text-black self-start'}`}
            >
              {message.text}
              {/* <p className="text-[9px] text-slate-800 mt-1 ml-1">{getTimeAgo(message.id)}</p> */}
              <p className="text-[9px] text-slate-800 mt-1 ml-1">1 min ago</p>
            </div>
          </div>
        ))}
        
      </div>
      <div ref={scrollToRef}></div>
    </div>
  );
};

// Function to generate a dummy "time ago" string for demonstration
// const getTimeAgo = (id) => {
//   // Simulate different times for different messages
//   const minutesAgo = (messages.length - id) * 5; // Example: 5 minutes difference per message
//   return `${minutesAgo} min ago`;
// };

export default ChatsArea;
