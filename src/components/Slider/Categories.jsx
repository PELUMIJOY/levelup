/* eslint-disable react/prop-types */
// import React from 'react'
// import {slides} from './Slider.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';  
import 'swiper/swiper-bundle.min.css';
import cat from "./Categories.module.css"




const Categories = ({slides, slides1}) => {
  return (
  <div className={cat.wrapper} id="service">
    <h2 className={cat.heading}>Our Training Tracks</h2>
    <div>
    <h3 className={cat.skills}>Vocational Skills</h3>

    <Swiper
   
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}

    breakpoints={{
      600: {
        // width: 600,
        slidesPerView: 1,
      },
      425: {
        // width: 425,
        slidesPerView: 1,
      },
      280: {
        // width: 375,
        slidesPerView: 1,
      },
      768: {
        width: 768,
        slidesPerView: 2,
      },
      1000:{
        slidesPerView:4
      },
    }}
  >
  
  {slides.map((slide)=>(

    <SwiperSlide key={slide.desc}>
      {/* <p>className={cat.img} src={slide.tittle} </p> */}
      <img className={cat.img} src={slide.image}alt="" />
      <p className={cat.desc}  key={slide.desc}> {slide.desc} </p>
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

  <h3 className={cat.skills}>Human Capacity Development Skills</h3>

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}


    breakpoints={{
      600: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 1,
      },
      280: {
        slidesPerView: 1,
      },
      768: {
        width: 768,
        slidesPerView: 2,
      },
      1200:{
        slidesPerView:4
      },
    }}
  >
  
  {slides1.map((slide)=>(

    <SwiperSlide key={slide.desc1}>
      <img className={cat.img} src={slide.image1}alt="" />
      <p className={cat.desc} key={slide.desc1}> {slide.desc1} </p>
    </SwiperSlide>
  ))}

  </Swiper>
</div>

  </div>
  )
}

export default Categories