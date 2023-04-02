import style from './slider.module.scss'
import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const SLider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    slidesToScroll: 2,
    cssEase: 'linear',
    centerPadding: "60px",
    slidesToShow: 1.2,
    speed: 500,
    arrows: false,
    dots: true,
  };
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <div className={style.slider}>
        <div className='container'>
          <h2 className={style.sliderTitle}>1 - Модуль</h2>
        </div>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1.5}
          spaceBetween={30}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={"https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={250} height={150} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"https://images.pexels.com/photos/5665442/pexels-photo-5665442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={250} height={150} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={250} height={150} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={250} height={150} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={250} height={150} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={250} height={150} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={250} height={150} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={250} height={150} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={"https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={250} height={150} />
          </SwiperSlide>
        </Swiper>
      </div></>
  )
}

export default SLider