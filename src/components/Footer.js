import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div class="h-[30rem] bg-slate-700 w-full items-center justify-center flex flex-col space-y-16 ">
      <div class="flex items-center justify-center mx-auto space-x-16">
        <div>
          <div class="flex items-center justify-center mb-4">
            <img
              src="https://i.imgur.com/dLotCPd.png"
              alt="Logo"
              class="h-14"
            />
            <h1 class="text-white font-bold text-3xl -ml-6 -mb-6">Seefy</h1>
          </div>
          <div class="flex flex-col space-y-3">
            <label for="lang" class="text-white">
              Choose a Language:
            </label>
            <select
              name="lang"
              id="lang"
              class="w-80 rounded-lg h-10 p-1 outline-none cursor-pointer"
            >
              <optgroup>
                <option value="english">English 🇬🇧 </option>
                <option value="français">Français 🇫🇷 </option>
                <option value="spanish">Spanish 🇪🇸 </option>
              </optgroup>
            </select>
          </div>
        </div>

        <div class="space-y-4">
          <h1 class="text-white font-bold text-2xl">Company</h1>
          <p class="text-white text-sm cursor-pointer">About us</p>
          <p class="text-white text-sm cursor-pointer">Jobs</p>
          <p class="text-white text-sm cursor-pointer">News</p>
          <p class="text-white text-sm cursor-pointer">Contact</p>
        </div>

        <div class="space-y-4">
          <h1 class="text-white text-2xl font-bold">Users space</h1>
          <p class="text-white text-sm cursor-pointer">Help</p>
          <p class="text-white text-sm cursor-pointer">
            The basis of confidentiality
          </p>
          <p class="text-white text-sm cursor-pointer">Personal data rights</p>
          <p class="text-white text-sm cursor-pointer">The chart of privacy</p>
        </div>

        <div class="space-y-4">
          <h1 class="text-white font-bold text-2xl">Social networks</h1>
          <div class="flex space-x-3">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook class="h-4 w-4 text-white cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram class="h-4 w-4 text-white cursor-pointer" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter class="h-4 w-4 text-white cursor-pointer" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaYoutube class="h-4 w-4 text-white cursor-pointer" />
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaGooglePlusG class="h-4 w-4 text-white cursor-pointer" />
            </a>
          </div>
          <p class="text-white text-sm h-5"></p>
          <p class="text-white text-sm h-5"></p>
          <p class="text-white text-sm h-5"></p>
        </div>
      </div>
      <div class="h-1 bg-slate-500 opacity-60 w-[60rem] mx-auto justify-center"></div>
      <div class="flex space-x-8 items-center justify-center">
        <p class="text-white cursor-pointer text-xs">
          Conditions générales d'utilisations
        </p>
        <p class="text-white -mt-3 text-2xl font-bold">.</p>
        <p class="text-white cursor-pointer text-xs">
          Politique de confidentialité
        </p>
        <p class="text-white -mt-3 text-2xl font-bold">.</p>

        <p class="text-white cursor-pointer text-xs">Cookies</p>
        <p class="text-white -mt-3 text-2xl font-bold">.</p>

        <p class="text-white cursor-pointer text-xs">Mentions légales</p>
        <p class="text-white -mt-3 text-2xl font-bold">.</p>

        <p class="text-white cursor-pointer text-xs">Paramétrer les cookies</p>
      </div>
    </div>
  );
}

export default Footer;
