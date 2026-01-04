import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import styles from './activity.module.css'

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
        <section className={styles.page}>Page 1</section>
      </SwiperSlide>

      <SwiperSlide>
        <section className={styles.page}>Page 2</section>
      </SwiperSlide>

      <SwiperSlide>
        <section className={styles.page}>Page 3<div className={styles.test}></div></section>
      </SwiperSlide>
    </Swiper>
  );
}
