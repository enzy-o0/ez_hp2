import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import langEn from "./lang.en.json";
import langKo from "./lang.ko.json";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: langEn,
  ko: langKo,
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    whitelist: ["ko", "en"],
    fallbackLng: ["ko", "en"],
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "navigator"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
