import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
// import styles from './activity.module.css'
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";

import "swiper/css";
import "swiper/css/pagination";

export default function Activity({ setActiveTab }) {
  return (
    <Swiper
      modules={[Pagination, Mousewheel]}
      direction="horizontal"
      slidesPerView={1}
      simulateTouch={false}
      mousewheel={{ enabled: true }}
      pagination={{ clickable: true }}
      style={{ height: "100%" }}
    >
      <SwiperSlide>
        <Page1 />
      </SwiperSlide>

      <SwiperSlide>
        <Page2 />
      </SwiperSlide>

      <SwiperSlide>
        <Page3 />
      </SwiperSlide>

      <SwiperSlide>
        <Page4 />
      </SwiperSlide>
    </Swiper>
  );
}
