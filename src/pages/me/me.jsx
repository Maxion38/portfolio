import styles from './me.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';


import "swiper/css";
import "swiper/css/pagination";


export default function Me({ setActiveTab }) {
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
        <Page3 setActiveTab={setActiveTab} />
      </SwiperSlide>
    </Swiper>
  );
}

