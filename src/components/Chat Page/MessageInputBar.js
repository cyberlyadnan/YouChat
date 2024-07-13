import React, { useState } from "react";
import { BsCameraVideo } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { RiImageAddFill } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";
import EmojiPicker from "emoji-picker-react";

const MessageInputBar = () => {
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiObject) => {
    setText((prevText) => prevText + emojiObject.emoji);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prevState) => !prevState);
  };

  return (
    <div className="relative flex items-center px-1">
      {/* Icons for actions */}
      <div className="flex space-x-2">
        <RiImageAddFill className="text-blue-600 cursor-pointer" size={24} />
        <BsCameraVideo className="text-green-600 cursor-pointer" size={24} />
        <BiMicrophone className="text-red-600 cursor-pointer" size={24} />
      </div>

      {/* Input field */}
      <div className="flex flex-1 mx-2 space-x-1">
        <form className="flex flex-1 space-x-1">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Type a message"
            className="w-full py-1 px-3 rounded-full border-2 focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bt" id="bt">
            <span className="msg" id="msg"></span>
            Send
          </button>
        </form>
      </div>

      {/* Emoji picker */}
      <div className="relative">
        <GrEmoji
          className="text-white font-bold cursor-pointer"
          size={24}
          onClick={toggleEmojiPicker}
        />
        {showEmojiPicker && (
          <div className="absolute bottom-full mb-2 right-0">
            <EmojiPicker theme="dark" lazyLoadEmojis={true} width={350} onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageInputBar;
