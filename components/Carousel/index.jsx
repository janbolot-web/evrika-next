import Image from 'next/image'
import React from 'react'
import style from './carousel.module.scss'

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
          <div className={style.iconCardsItem}><span className={style.h1}>
          </span></div>
          <div className={style.iconCardsItem}><span className={style.h1}></span></div>
          <div className={style.iconCardsItem}><span className={style.h1}></span></div>
        </div>
      </figure>
    </div>
  )
}

export default Carousel