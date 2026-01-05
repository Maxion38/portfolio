import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import styles from './stage.module.css'
import Page1 from './page1';
import Page2 from './page2';


import "swiper/css";
import "swiper/css/pagination";


export default function Stage({ setActiveTab }) {
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
    </Swiper>
  );
}

