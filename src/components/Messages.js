import React from "react";
import SharingFeature from "./Sharing";

let cover =
  "https://telegram.org/file/464001098/2/aw1iikW0b4I.78035/2083cd76dcb5f4fda4";
const style = {
  backgroundImage: "url(" + cover + ")",
};

const MessageList = () => {
  return (
    <div className="h-screen flex p-10 space-x-4">
      <div className="h-full w-64 bg-gray-200">
        <div className="px-4 py-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User profile"
              className="w-12 h-12 rounded-full mx-auto mb-4"
            />
            <h1 className="text-gray-700 text-lg font-semibold mb-2">
              John Doe
            </h1>
            <div className="text-gray-600 text-xs">Online</div>
          </div>
        </div>
        <div className="px-4 py-2 bg-white rounded-lg shadow-lg mt-4">
          <h1 className="text-gray-700 text-lg font-semibold mb-2">
            Discussions
          </h1>
          <div className="text-gray-600 text-xs font-semibold py-2 px-4 rounded-lg bg-gray-300 mb-2">
            Group 1
          </div>
          <div className="text-gray-600 text-xs font-semibold py-2 px-4 rounded-lg bg-gray-300 mb-2">
            Group 2
          </div>
          <div className="text-gray-600 text-xs font-semibold py-2 px-4 rounded-lg bg-gray-300 mb-2">
            Group 3
          </div>
        </div>
      </div>
      <div className="h-full p-14" style={style}>
        <div className="h-full overflow-y-auto w-[80rem] ">
          <div className="space-x-2 py-2 flex  w-full ">
            <div className="text-gray-700 text-sm font-semibold mb-2">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User profile"
                className="w-10 h-10 rounded-2xl mb-4 "
              />
            </div>
            <div className="text-gray-600 text-xs max-w-sm bg-slate-500 p-3 rounded rounded-br-3xl">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              
                facilis? Corrupti, nostrum.
              </p>
            </div>
          </div>
          <div className="py-2 space-x-2 flex  mt-4 w-full">
            <div className="text-gray-700 text-sm font-semibold mb-2">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User profile"
                className="w-10 h-10 rounded-2xl mb-4"
              />
            </div>
            <div className="text-gray-600 text-xs max-w-sm bg-slate-500 p-3 rounded rounded-br-3xl">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto molestias ab voluptatem iure qui? Nemo, perferendis.
                tempora voluptas dolore consequuntur necessitatibus, eius minima
                facilis? Corrupti, nostrum.
              </p>
            </div>
          </div>
          <div className="py-2 space-x-2 flex  mt-4 w-full">
            <div className="text-gray-700 text-sm font-semibold mb-2">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User profile"
                className="w-10 h-10 rounded-2xl mb-4"
              />
            </div>
            <div className="text-gray-600 text-xs max-w-sm bg-slate-500 p-3 rounded rounded-br-3xl">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architec
                facilis? Corrupti, nostrum.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-5">
          <form className="flex justify-between items-center px-4 py-2 bg-white rounded-lg shadow-lg">
            <SharingFeature />
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 leading-tight text-gray-700 rounded-lg focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
