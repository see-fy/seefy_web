import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const coverdrop =
    "https://images.unsplash.com/photo-1551847533-7d438a3c15da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  let style = {
    backgroundImage: "url(" + coverdrop + ")",
  };

  const renderCard = (url, title, bio) => {
    return (
      <div class="flex space-x-4 mx-auto">
        <img src={url} alt="" class="h-20 w-20" />
        <div class="space-y-2 w-full">
          <h1 class="text-white font-bold text-xl">{title}</h1>
          <p class="text-white text-sm">{bio}</p>
        </div>
      </div>
    );
  };
  return (
    <div class="">
      <div
        class="flex items-center justify-center flex-col h-screen w-full bg-cover bg-no-repeat"
        style={style}
      >
        <div class="flex items-center justify-center mb-4">
          <img src="https://i.imgur.com/dLotCPd.png" alt="Logo" class="h-40" />
          <h1 class="text-white font-bold text-7xl -ml-8 -mb-20">Seefy</h1>
        </div>
        <h1 class="text-white font-semibold text-xl text-center my-4">
          Understand and Unite users around their problems && Automate and
          Facilitate Task researching...
        </h1>
        <button
          onClick={() => navigate("/login")}
          class="bg-slate-900 text-white cursor-pointer text-lg w-80 p-2 text-center rounded-2xl font-semibold mt-4"
        >
          Get Started
        </button>
        <h1 class="text-white font-semibold text-lg mt-10">or get the App</h1>
        <div class="flex space-x-4 -mt-6">
          <img
            src="https://happn.com/assets/googleplay.svg"
            alt=""
            class="w-44 h-36 rounded-2xl"
          />
          <img
            src="https://happn.com/assets/appstore.svg"
            alt=""
            class="w-44 h-36 rounded-2xl"
          />
        </div>
      </div>

      <div
        class=" flex flex-col items-center justify-center mx-auto h-[60rem]  w-full bg-no-repeat"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <img
          src={require("../assets/cover_3.png")}
          alt=""
          className="h-[45rem] w-full object-contain"
        />
      </div>
      <div class="lg:flex items-center justify-center mx-auto bg-slate-700 h-[60rem] w-full bg-no-repeat space-y-4">
        <img
          src={require("../assets/cover.png")}
          alt=""
          className="h-[30rem] w-full object-contain rounded-full shadow-lg"
        />
        <img
          src={require("../assets/cover_1.png")}
          alt=""
          className="h-[30em] w-full object-contain  rounded-full shadow-lg"
        />
      </div>
      <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto items-center justify-center p-20 bg-slate-600">
        {renderCard(
          "https://happn.com/assets/landing/values/values-illustration-promise.png",
          "You are in chargge !",
          "You can choose who can join your group by letting users go through a request process, hence a waiting list, for you to decide who can be part of your group or not ."
        )}
        {renderCard(
          "https://happn.com/assets/landing/values/values-illustration-privacy.png",
          "Everybody is welcome !",
          "Or you can make your group public and the first three people who come can join, depending on their needs of course you can choose to delete from your group later."
        )}{" "}
        {renderCard(
          "https://happn.com/assets/landing/values/values-illustration-opinion.png",
          "A limit for a better experience !",
          "Create a group of 4 people only, who will join your group according to your theme, a few people is better for people to keep track of what is going on and the help to be more effective."
        )}{" "}
        {renderCard(
          "https://happn.com/assets/landing/values/values-illustration-report.png",
          "An unlimitted number!",
          "Although the number of people are limitted, but not the number of groups. Why? In order for you to create as many groups as your needs or issues are."
        )}{" "}
        {renderCard(
          "https://happn.com/assets/landing/values/values-illustration-promise.png",
          "Not any user!",
          "Everybody's problem is different, that is why with Seefy you will only have in your group users who ggo through the same problem as you are."
        )}{" "}
        {renderCard(
          "https://happn.com/assets/landing/values/values-illustration-promise.png",
          "Not only that!",
          "You can jump on the Taskfy to find yourself usefull activities to do: paid or volunteering. First to make money but also keep yourself busy by avoiding the purgatory thoughts."
        )}
      </div>

      <div class="mx-auto flex flex-col w-full bg-slate-500 items-center justify-center py-10">
        <h1 class="text-white font-semibold text-lg mt-10">Download the App</h1>
        <p class="text-white text-sm">
          Available in the Playstore and the Appstore{" "}
        </p>
        <div class="flex space-x-4 -mt-6">
          <img
            src="https://happn.com/assets/googleplay.svg"
            alt=""
            class="w-44 h-36 rounded-2xl"
          />
          <img
            src="https://happn.com/assets/appstore.svg"
            alt=""
            class="w-44 h-36 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
