import { useTranslation } from "react-i18next";
import leftVideo from "../assets/imgs/IMG_7040.mp4"
import rightVideo from "../assets/imgs/IMG_6976.mp4"
import centerVideo from "../assets/imgs/IMG_7828.mp4"

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="main" id="main">
      <div className="container">
        <div>
          <p className="main_text_children">{t("maintext")}</p>
        </div>
        <div className="main_card">

          <div className="main_card-1">
            <div className="main_img_left_card_1">
              <div className="main_img_left">
                <video autoPlay playsInline loop muted={true} src={leftVideo} type="video/mp4" className="main_img_children_1">
                </video>
              </div>
            </div>

            <div className="main_img_left">
              <video autoPlay playsInline loop muted={true} src={centerVideo} type="video/mp4" className="main_img_children_1">
              </video>
            </div>

            <div className="main_img_left">
              <video autoPlay playsInline loop muted={true} src={rightVideo} type="video/MOV" className="main_img_children_1">
              </video>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
