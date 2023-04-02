import style from './swiper.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { EffectCards } from "swiper";


const SwiperCards = () => {

  return (

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={`${style.swiper} mySwiper`}
      >
        <SwiperSlide className={style.swiperSlide}>Slide 1</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>Slide 2</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>Slide 3</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>Slide 4</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>Slide 5</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>Slide 6</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>Slide 7</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>Slide 8</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>Slide 9</SwiperSlide>
      </Swiper>
  )
}

export default SwiperCards