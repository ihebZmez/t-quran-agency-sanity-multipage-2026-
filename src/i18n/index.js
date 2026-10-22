import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

import arTranslation from "./locales/ar/translation.json";
import frTranslation from "./locales/fr/translation.json";
import enTranslation from "./locales/en/translation.json";

const resources = {
  ar: { translation: arTranslation },
  fr: { translation: frTranslation },
  en: { translation: enTranslation },
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    fallbackLng: "ar",
    detection: {
      order: ["htmlTag"],
      caches: [],
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
