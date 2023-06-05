/* eslint-disable react/prop-types */
// import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';  
import 'swiper/swiper-bundle.min.css';




const Categories = ({slides}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
  {slides.map((slide)=>(

    <SwiperSlide key={slide.desc}>
      {/* <img src=`$/{slide.image}`alt="" /> */}
      <p key={slide.desc}> {slide.desc} </p>
    </SwiperSlide>
  ))}
    {/* <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide> */}
  </Swiper>
  )
}

export default Categories