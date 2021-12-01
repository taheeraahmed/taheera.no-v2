import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
import common_no from "./no/common.json";
import common_en from "./en/common.json";
import aboutme_no from "./no/aboutme.json";
import aboutme_en from "./en/aboutme.json";
import cv_no from "./no/cv.json";
import cv_en from "./en/cv.json";
import homepage_no from "./no/homepage.json";
import homepage_en from "./en/homepage.json";
import projects_no from "./no/projects.json";
import projects_en from "./en/projects.json";

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "no",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      no: {
        translation: {
          common: common_no,
          aboutme: aboutme_no,
          cv: cv_no,
          homepage: homepage_no,
          projects: projects_no,
        },
      },
      en: {
        translation: {
          common: common_en,
          aboutme: aboutme_en,
          cv: cv_en,
          homepage: homepage_en,
          projects: projects_en,
        },
      },
    },
  });

export default i18n;
