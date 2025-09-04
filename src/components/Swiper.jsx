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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGudDEgUF272W6YLuWSx0Cr55q6OSYXmj4w&s"
              alt=""
              className="slides"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src="src\images\SCDFA.png" alt="" className="slides" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src="src\images\SCDFA.png" alt="" className="slides" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src="src\images\SCDFA.png" alt="" className="slides" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container">
            <img src="src\images\SCDFA.png" alt="" className="slides" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
