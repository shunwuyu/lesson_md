import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      login: "Login",
      "Invalid login or password, please type again":
        "Invalid login or password, please type again",
      "error, review the fields": "error, review the fields"
    }
  },
  es: {
    translation: {
      login: "Introduzca credenciales",
      "Invalid login or password, please type again":
        "Usuario o clave no validos, porfavor intentelo de nuevo",
      "error, review the fields": "Error, revise los campos por favor"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;