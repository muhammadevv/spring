import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsEn from "../locale/translationsEn";
import translationsUz from "../locale/translationsUz";
import translationsRu from "../locale/translationsRu";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    uz: { translation: translationsUz },
    Ru: { translation: translationsRu },

  },
  lng: "uz",
  fallbacking: "en",
  fallbacking: "ru",
});

const Layout = () => {
  const changeLang = (value) => {
    i18n.changeLanguage(value);

  };

  return (
    <>
      <Header changeLang={changeLang} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
