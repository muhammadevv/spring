import { BsFillTelephoneMinusFill } from "react-icons/bs";
import { MdOutlineSms } from "react-icons/md";
import string from "../../assets/imgs/spring-removebg-preview(1).png";

import { HiOutlineMapPin } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegramPlane, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_children">
          <div className="footer_networks">
            <div>
              <img
                className="footer_logo"
                draggable={false}
                src={string}
                alt="rasm"
              />
            </div>
            <div className="footer_icons">
              <div className="footer_telegrom">
                <FaTelegramPlane />
              </div>
              <div className="footer_instogrom">
                <Link to={"https://www.instagram.com/spring_ichimlik_suvlari/tagged/"}>
                  <FaInstagram />
                </Link>
              </div>
              <div className="footer_facebook">
                <FaFacebookF />
              </div>
            </div>
          </div>
          <div className="footer_children_1">
            <div className="footer_1">
              <div className="footer_1_icon">
                <HiOutlineMapPin className="footer_1_icons" size={45} />
              </div>
              <div className="footer_1_children">
                <div>
                  <p className="footer_1_children_text">{t("Tous")}</p>
                </div>
                <div>
                  <p className="footer_1_children_text_1">{t("address")}</p>
                </div>
              </div>
            </div>
            <div className="footer_2">
              <div className="footer_2_icon">
                <BsFillTelephoneMinusFill size={25} />
              </div>
              <div className="footer_2_children">
                <div>
                  <p className="footer_2_text">{t("call")}</p>
                </div>
                <div>
                  <div className="footer_2_text_2">
                    <p>+998999608877</p>
                    <p>+998976025585</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
