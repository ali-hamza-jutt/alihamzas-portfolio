import React from "react";
import { ClientsInfo } from "./ClientsInfo.js";
import "./Testimonial.css";
// Import Swiper React components
// Core modules imports are same as usual
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';


const Testimonial = () => {
  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {ClientsInfo.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img
                src={image}
                alt={title}
                className="testimonial__img"
              />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
