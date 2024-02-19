import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import about_en from "./translations/en/about.json";
import about_es from "./translations/es/about.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      about: about_en,
    },
    es: {
      about: about_es,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);
