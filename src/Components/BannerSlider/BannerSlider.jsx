import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { BannerSlideData } from "../../Data/BannerSlideData";
import contentImg from "../../bmi-image/banner-swiper/video-poster.png";

const BannerSlider = () => {
  return (
    <section className="banner-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        id="banner-swiper"
      >
        {BannerSlideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.img} alt="" className="slide-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="content">
        <div className="container">
          <div className="content-inner">
            <div className="content-left">
              <h1 className="content-left-title">
                BUSSINESS <br /> MANAGEMENT <br />
                INISTUTE
              </h1>
              <a href="/#" className="banner-btn">
                Ətraflı
              </a>
            </div>
            <div className="content-right">
              <div className="video">
                <div className="video-img">
                  <img src={contentImg} alt="" />
                </div>
                <div className="video-hover">
                  <a href={contentImg} className="play-button">
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerSlider;
