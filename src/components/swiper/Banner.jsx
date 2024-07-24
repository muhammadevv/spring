import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import rasm123 from '../../assets/imgs/8.jpg'
import rasm124 from '../../assets/imgs/IMG_5684.jpg'
import rasm126 from '../../assets/imgs/IMG_7721.jpg'
import rasm127 from '../../assets/imgs/IMG_7723.jpg'
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
              <img src={rasm123} alt="rasm" />
            </SwiperSlide>
            <SwiperSlide className="banner-swiper_img">
              <img src={rasm127} alt="rasm" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div >
    </div >
  );
};

export default Banner;
