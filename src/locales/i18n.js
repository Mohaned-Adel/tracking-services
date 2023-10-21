import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import En from "./en.json";
import Ar from "./ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: En,
      },
      ar: {
        translations: Ar,
      },
    },
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
