import React from "react";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidber = () => {
  const { setIsActive } = useContext(ModalContext);
  const { t } = useTranslation();
  return (
    <div>
      <div className="sidber">
        <div>
          <Link to={"/"} onClick={() => setIsActive(false)}>
            {t("main")}
          </Link>
        </div>
        <div>
          <Link to={"/company"} onClick={() => setIsActive(false)}>
            {t("about")}
          </Link>
        </div>
        <div>
          <a href="#products" onClick={() => setIsActive(false)}>
            {t("brand")}
          </a>
        </div>
        <div>
          <Link to="/delivery" onClick={() => setIsActive(false)}>
            {t("delivery")}
          </Link>
        </div>
        <div>
          <Link to={"/contacts"} onClick={() => setIsActive(false)}>
            {t("contact")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidber;
