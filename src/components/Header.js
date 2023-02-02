import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Header({ isLogged }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const transistionHeader = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transistionHeader);
    return () => window.removeEventListener("scroll", transistionHeader);
  }, []);
  return (
    <div
      className={`flex flex-row items-center justify-between ${
        show ? "bg-black" : `bg-slate-900`
      } z-50  h-20 w-full px-2 sm:px-10 pt-14 pb-16 top-0 ease-in transition-all duration-500 fixed`}
    >
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="https://i.imgur.com/dLotCPd.png"
          alt="Logo"
          className="h-14 md:h-20"
        />
        <h1 className="text-white font-bold text-2xl md:text-4xl -ml-3 -mb-4 md:-ml-6 md:-mb-8">
          Seefy
        </h1>
      </div>
      <div className="flex space-x-3 sm:space-x-6 mt-4">
        <button
          className="text-white outline-none text-center font-semibold  p-1 text-xs"
          onClick={() => navigate("/messages")}
        >
          {t("Messages")}
        </button>
        <button
          className="text-white outline-none text-center font-semibold  p-1 text-xs"
          onClick={() => navigate("/issuefy")}
        >
          {t("New Issue")}
        </button>
        <button
          className="space-x-2 items-center text-white font-semibold text-xs"
          onClick={() => navigate("/search")}
        >
          {t("Search")}
        </button>
        <button className="space-x-2 items-center text-white font-semibold hidden sm:inline text-xs">
          {t("About Us")}
        </button>
        <button
          className=" space-x-2 items-center text-white font-semibold hidden sm:inline text-xs"
          onClick={() => navigate("/contact")}
        >
          {t("Contact Us")}
        </button>
        {isLogged === "true" ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="h-16 w-16 rounded-3xl -mr-2 cursor-pointer"
            onClick={() => navigate("/profile")}
          />
        ) : (
          <div className="flex space-x-4 items-center justify-center">
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-black cursor-pointer ml-2  w-36 p-2 text-center rounded-2xl font-semibold hidden md:inline text-xs"
            >
              {t("Get Started")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
