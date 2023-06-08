/* eslint-disable react/prop-types */
// import React from 'react'
// import {slides} from './Slider.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';  
import 'swiper/swiper-bundle.min.css';




const Categories = ({slides}) => {
  return (
  <>
    <h2>Our Training Tracks</h2>
    <div>
    <h3>Vocational Skills</h3>

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
       <img src={slide.tittle}alt="" />
      <img src={slide.image}alt="" />
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
    </div>
<div>

  <h3>Vocational Skills</h3>

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

    <SwiperSlide key={slide.desc1}>
      <img src={slide.image1}alt="" />
      <p key={slide.desc1}> {slide.desc1} </p>
    </SwiperSlide>
  ))}

  </Swiper>
</div>

  </>
  )
}

export default Categories