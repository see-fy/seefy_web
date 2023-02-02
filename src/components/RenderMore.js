import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  HiHome,
  HiBriefcase,
  HiBell,
  HiClipboardList,
  HiTicket,
  HiBookOpen,
} from "react-icons/hi";

function RenderBody({ data, header, link }) {
  return (
    <div class="mt-8">
      <div class="mb-2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          class="h-28 w-28 rounded-full"
        />
      </div>
      <div class="my-2 space-y-1">
        <p class="text-black font-bold text-sm">{header}</p>
        <p class="text-black text-xs opacity-80">@elaine_swarchz</p>
        <p class="text-black text-xs opacity-80">
          Admin & Creator of the group
        </p>
      </div>
      <p class="text-black text-xs w-44 lg:w-80 my-4">
        The biography of the user is being displayed here for some reason we
        don't know why but it is the thing we like to do n we don't know why but
        it is the thing we like to do n we don't know why but it is the thing we
        like to do....{link}
      </p>
      <div class="flex justify-between items-center  space-x-4 w-80 mt-6">
        <div class="flex items-center space-x-2 text-black justify-center">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook class="h-4 w-4 text-black cursor-pointer" />
          </a>
          <p class="text-black text-xs">Facebook</p>
        </div>
        <div class="flex space-x-2 items-center text-black justify-center">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram class="h-4 w-4 text-black cursor-pointer" />
          </a>
          <p class="text-black text-xs">Instagram</p>
        </div>
        <div class="flex space-x-2 items-center text-black justify-center">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter class="h-4 w-4 text-black cursor-pointer" />
          </a>
          <p class="text-black text-xs">Twitter</p>
        </div>
      </div>
      <h1 class="text-black text-xs lg:text-sm font-bold mt-10 mb-4">
        More Mental Related Groups...
      </h1>
      {data.map(({ profile, fullName, title, url }) => {
        return (
          <div
            key={Math.random() * 1000 + "xyzeoj#pa"}
            class="flex justify-between my-4 items-center mx-2"
          >
            <div>
              <div class="flex mb-2">
                <img src={profile} alt="" class="h-10 w-10 rounded-full mr-1" />
                <div class="">
                  <h1 class="text-black font-bold text-xs lg:text-sm">
                    {fullName}
                  </h1>
                  <h1 class="text-black text-xs">@username</h1>
                </div>
              </div>
              <h1 class="text-black font-bold text-xs lg:text-lg">{title}</h1>
            </div>
            <div class="hidden md:inline">
              <img class="h-16 w-14 rounded" alt="" src={url} />
            </div>
          </div>
        );
      })}
      <div class="flex justify-between items-center mt-6 mx-1">
        <div class="flex flex-col items-center justify-center">
          <HiHome size={20} color="black" />
          <p class="text-black text-xs ml-1">Home</p>
        </div>{" "}
        <div class="flex flex-col items-center">
          <HiBell size={20} color="black" />
          <p class="text-black text-xs ml-1">Notifications</p>
        </div>{" "}
        <div class="flex flex-col items-center">
          <HiBriefcase size={20} color="black" />
          <p class="text-black text-xs ml-1">Careers</p>
        </div>{" "}
        <div class="flex flex-col items-center">
          <HiTicket size={20} color="black" />
          <p class="text-black text-xs ml-1">Help</p>
        </div>{" "}
        <div class="flex flex-col items-center">
          <HiBookOpen size={20} color="black" />
          <p class="text-black text-xs ml-1">Policy</p>
        </div>
        <div class="flex flex-col items-center">
          <HiClipboardList size={20} color="black" />
          <p class="text-black text-xs ml-1">Terms</p>
        </div>
      </div>
    </div>
  );
}

export default RenderBody;
