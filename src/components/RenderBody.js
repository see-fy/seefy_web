import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { HiBadgeCheck, HiLocationMarker, HiVolumeUp } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiIdentification, HiTrendingUp } from "react-icons/hi";
import { HiLightBulb, HiShare, HiEye } from "react-icons/hi";
import { HiInformationCircle, HiXCircle, HiBriefcase } from "react-icons/hi";
import { HiCubeTransparent, HiFlag, HiPlusCircle } from "react-icons/hi";

function RenderBody({ url, title }) {
  let backdrop =
    "https://cdn.pixabay.com/photo/2021/09/09/20/47/candles-6611567__340.jpg";

  let style = {
    backgroundImage: "url(" + url + ")",
  };

  return (
    <div class="w-full mx-2">
      <div
        style={style}
        class="h-[40rem] w-full min-w-sm max-w-lg px-20  items-center justify-center flex  rounded-2xl mt-10 bg-no-repeat bg-cover"
      >
        <div class="h-[30rem]  p-4 rounded-2xl  bg-no-repeat bg-cover bg-white w-full min-w-fit max-w-sm">
          <div class="flex justify-between  space-x-4">
            <div class="">
              <p class="text-black text-3xl font-bold">{title}</p>
              <p class="text-black text-xs mt-2 mb-4 text-center">
                2016 /\ Laziness-Fatigue-Insomnia /\ 2 days ago
              </p>
              <div class="">
                <div class="mr-2">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    class="h-14 w-14 rounded-3xl"
                  />
                </div>
                <div>
                  <div className="flex space-x-1 items-center">
                    <p class="text-black font-bold text-sm">Mary Swarchz</p>
                    <HiBadgeCheck size={14} color="blue" className="-mb-1" />
                  </div>
                  <p class="text-black text-xs opacity-80">@elaine_swarchz</p>
                  <p class="text-black text-xs opacity-80">
                    Admin & Creator of the group
                  </p>
                </div>
              </div>
            </div>

            <div class=" items-center flex flex-col justify-center">
              <div class="flex space-x-3 items-center justify-center">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1502919280275-1bed9aca68ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  class="h-12 w-12 rounded-3xl -mr-6 "
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  class="h-12 w-12 rounded-3xl -mt-4 -ml-4"
                />
              </div>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                class="h-12 w-12 rounded-3xl -mt-4 -ml-4"
              />
              <img
                alt=""
                src="https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                class="h-12 w-12 rounded-3xl -mt-4 ml-8"
              />
            </div>
          </div>
          <div class="flex items-center">
            <p
              class="my-4 text-black text-xs w-96
            "
            >
              Here the user will display whatever he wants to say for more
              details. For exxemple what he is looking for could dive more in
              his symptoms. Or could just land a quote related to his problems.
              This will give more info for the seekers n his symptoms...
            </p>
          </div>

          <div class="flex space-x-1 items-center my-2">
            <p class="text-black font-bold text-sm">201</p>
            <HiUser size={15} color="black" />
            <p class="text-black text-xs ml-1">
              persons are in the waiting list of this group
            </p>
          </div>
          <div class="flex fitems-center justify-between my-6">
            <div>
              <div class="flex  items-center">
                <HiCubeTransparent size={12} color="black" />
                <p class="text-black text-xs ml-1">24, Female</p>
              </div>
              <div class="flex items-center my-2">
                <HiLightBulb size={12} color="black" />
                <p class="text-black text-xs ml-1">Christian</p>
              </div>
              <div class="flex items-center">
                <HiTrendingUp size={12} color="black" />
                <p class="text-black text-xs ml-1">Since 2 years</p>
              </div>
            </div>
            <div>
              <div>
                <p> </p>
              </div>
              <div class="flex  items-center my-2">
                <HiIdentification size={12} color="black" />
                <p class="text-black text-xs ml-1">Single</p>
              </div>
              <div class="flex items-center">
                <HiBriefcase size={12} color="black" />
                <p class="text-black text-xs ml-1">Teacher</p>
              </div>
            </div>
            <div>
              <HiVolumeUp size={12} color="black" class="items-end" />
              <div>
                <p class="my-2"> </p>
              </div>
              <div class="flex flex-row items-center">
                <HiLocationMarker size={12} color="black" />
                <p class="text-black text-xs ml-1">Wyoming, USA</p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-around  my-2">
            <div className="items-center justify-center flex flex-col cursor-pointer">
              <HiInformationCircle size={20} color="black" />
              <p className="text-xs font-semibold">Info</p>
            </div>
            <div className="items-center justify-center flex flex-col cursor-pointer">
              <HiFlag size={20} color="black" />
              <p className="text-xs font-semibold">Report</p>
            </div>
            <div className="items-center justify-center flex flex-col cursor-pointer">
              <HiShare size={20} color="black" />
              <p className="text-xs font-semibold">Share</p>
            </div>
            <div className="items-center justify-center flex flex-col cursor-pointer">
              <HiPlusCircle size={20} color="black" />
              <p className="text-xs font-semibold">Join</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderBody;
