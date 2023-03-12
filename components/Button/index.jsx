import React from 'react'
import style from './Button.module.scss'
import { BsArrowRight } from 'react-icons/bs'


const Button = () => {
  return (
    <div className={style.button}>
      <p>
        Көрүү
      </p>
      <BsArrowRight />
    </div>
  )
}

export default Button