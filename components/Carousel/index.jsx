import Image from 'next/image'
import React from 'react'
import style from './carousel.module.scss'

import slide1 from '../../public/course1.jpg'
import slide2 from '../../public/course2.jpg'
import slide3 from '../../public/course3.png'

const Carousel = () => {

  // function classToggle() {
  //   var el = document.querySelector('.icon-cards__content');
  //   el.classList.toggle('step-animation');
  // }

  // document.querySelector('#toggle-animation').addEventListener('click', classToggle);

  return (
    <div className={style.carousel}>
      <figure className={style.iconCards}>
        <div className={style.iconCardsContent}>
          <div className={style.iconCardsItem}>
            <Image src={slide1} sizes={'100%'} fill  loading="lazy" className={style.carouselImg}  alt={''} />
          </div>
          <div className={style.iconCardsItem}>
            <Image src={slide2} sizes={'100%'} fill  loading="lazy" className={style.carouselImg}  alt={''} />
          </div>
          <div className={style.iconCardsItem}>
            <Image src={slide3} sizes={'100%'} fill  loading="lazy" className={style.carouselImg}  alt={''} />
          </div>
        </div>
      </figure>
    </div>
  )
}

export default Carousel