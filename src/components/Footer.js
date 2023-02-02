import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { i18n, t } = useTranslation();
  function handleLanguageChange(language) {
    i18n.changeLanguage(language);
  }

  return (
    <div class="h-full bg-slate-700 w-full items-center justify-center flex flex-col space-y-16 p-4">
      <div class="lg:flex items-center justify-center mx-auto space-x-16 space-y-4">
        <div>
          <div class="flex items-center justify-center mb-4">
            <img
              src="https://i.imgur.com/dLotCPd.png"
              alt="Logo"
              class="h-14"
            />
            <h1 class="text-white font-bold text-3xl -ml-6 -mb-6">
              {t("Seefy")}
            </h1>
          </div>
          <div class="flex flex-col space-y-3">
            <label for="lang" class="text-white">
              {t("Choose a Language:")}
            </label>
            <select
              name="lang"
              id="lang"
              class="w-80 rounded-lg h-10 p-1 outline-none cursor-pointer"
            >
              <optgroup>
                <option
                  value="english"
                  onClick={() => handleLanguageChange("en")}
                >
                  {t("English")}🇬🇧{" "}
                </option>
                <option
                  value="français"
                  onClick={() => handleLanguageChange("fr")}
                >
                  {t("Français")}🇫🇷{" "}
                </option>
                <option
                  value="spanish"
                  onClick={() => handleLanguageChange("es")}
                >
                  {t("Spanish")}🇪🇸{" "}
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        <div class="space-y-4">
          <h1 class="text-white font-bold text-2xl">{t("Company")}</h1>
          <p class="text-white text-sm cursor-pointer">{t("About us")}</p>
          <p class="text-white text-sm cursor-pointer">{t("Jobs")}</p>
          <p class="text-white text-sm cursor-pointer">{t("News")}</p>
          <p class="text-white text-sm cursor-pointer">{t("Contact")}</p>
        </div>

        <div class="space-y-4">
          <h1 class="text-white text-2xl font-bold">{t("Users space")} </h1>
          <p class="text-white text-sm cursor-pointer">{t("Help")}</p>
          <p class="text-white text-sm cursor-pointer">
            {t("The basis of confidentiality")}
          </p>
          <p class="text-white text-sm cursor-pointer">
            {t("Personal data rights")}
          </p>
          <p class="text-white text-sm cursor-pointer">
            {t("The chart of privacy")}
          </p>
        </div>

        <div class="space-y-4">
          <h1 class="text-white font-bold text-2xl">{t("Social networks")}</h1>
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
      <div class="h-1 bg-slate-500 opacity-60 w-full mx-auto justify-center items-center"></div>
      <div class="lg:flex lg:space-x-8 items-center justify-center">
        <p class="text-white cursor-pointer text-xs">
          {t("Conditions générales d'utilisations")}
        </p>
        <p class="text-white -mt-3 text-2xl font-bold">.</p>
        <p class="text-white cursor-pointer text-xs">
          {t("Politique de confidentialité")}
        </p>
        <p class="text-white -mt-3 text-2xl font-bold">.</p>

        <p class="text-white cursor-pointer text-xs">{t("Cookies")}</p>
        <p class="text-white -mt-3 text-2xl font-bold">.</p>

        <p class="text-white cursor-pointer text-xs">{t("Mentions légales")}</p>
        <p class="text-white -mt-3 text-2xl font-bold">.</p>

        <p class="text-white cursor-pointer text-xs">
          {t("Paramétrer les cookies")}
        </p>
      </div>
    </div>
  );
}

export default Footer;
