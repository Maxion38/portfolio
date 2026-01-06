import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import Page0 from "./page0";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Modal from "../../components/Modal";

import "swiper/css";
import "swiper/css/pagination";

export default function Activity() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          <Page0 />
        </SwiperSlide>

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
          <Page4 onOpenModal={() => setIsModalOpen(true)} />
        </SwiperSlide>

        <SwiperSlide>
          <Page5 />
        </SwiperSlide>

        <SwiperSlide>
          <Page6 />
        </SwiperSlide>
      </Swiper>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Information sur l'attestation</h2>
        <p>
Je n'ai pas trouvé de preuve de présence étant donné que se sont les professeurs qui ont pris les présences mais cette conférence était obligatoire dans le cadre du cours de traitements de signaux (il y avait une question sur cette conférence dans l'examen).
        </p>
      </Modal>
    </>
  );
}