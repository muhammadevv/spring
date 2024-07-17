import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import rasm25 from '../../assets/imgs/IMG_5686.jpg'
import rasm26 from '../../assets/imgs/IMG_5688.jpg'
import rasm123 from '../../assets/imgs/banner-bg.png'
import rasm124 from '../../assets/imgs/IMG_5684.jpg'
import { Autoplay } from 'swiper/modules';


import "swiper/css";

const Banner = () => {
  const { t } = useTranslation();

  const changeLangHandler = (e) => {
    changeLang(e.target.value);
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="banner-row">
          <Swiper
            spaceBetween={20}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="banner-swiper">
            <SwiperSlide className="banner-swiper_img">
              <img src={rasm124} alt="rasm" />
            </SwiperSlide>
            <SwiperSlide className="banner-swiper_img">
              <div className="banner-swiper_img_img">
                <img src={rasm25} alt="rasm" />
              </div>
              <div className="banner-swiper_img_img">
                <img src={rasm26} alt="rasm" />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className="banner-swiper_img"> */}
            {/* <div className="banner-swiper_bg"> */}
            {/* <img src={rasm123} alt="rasm" /> */}
            {/* </div> */}
            {/* <div className="banner-swiper_img_image"> */}
            {/* <img src={rasm24} alt="rasm" /> */}
            {/* </div> */}
            {/* </SwiperSlide> */}
          </Swiper>
        </div>
      </div >
    </div >
  );
};

export default Banner;
