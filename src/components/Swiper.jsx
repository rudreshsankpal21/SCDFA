import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="slide-container">
            <img src="../src/images/img1.jpg" alt="" className="slides" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src="src\images\img2.jpg" alt="" className="slides" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img
              src="src\images\img3.jpg"
              alt=""
              className="slides"
              id="img3"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src="src\images\img4.jpg" alt="" className="slides" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img
              src="src\images\img5.png"
              alt=""
              className="slides"
              id="img5"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
