import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {EN} from "./en";
import {VI} from "./vi";


const resources = {EN, VI};

i18n
  .use(initReactI18next) // passes i18n dotuwn to react-i18next
  .init({
    resources,
    lng: "EN", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: ["EN", "VI"]
  });

export default i18n;