import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translations: {
          "Welcome to our website": "Welcome to our website",
        },
      },
      fr: {
        translations: {
          "Welcome to our website": "Bienvenue sur notre site web",
        },
      },
      es: {
        translations: {
          "Welcome to our website": "Bienvenido a nuestro sitio web",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
