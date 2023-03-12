import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

import mainImg from '../../public/sko.png'
import style from './course.module.scss'


const Course = () => {
  return (
    <Layout>
      <div className={style.course}>
        <div className="container">
          <div className={style.courseHeaderImage}>
            <Image src={mainImg} sizes={'100%'} loading="lazy" className={style.courseImg} alt={''} />
          </div>
          <div className={style.courseHeader}>
            <h1 className={style.courseTitle}>Шар окуу мугалими</h1>
            <p className={style.courseDuration}>4 модуль / 10 видео сабак
            </p>
          </div>
          <div className={style.courseBlock}>
            <div className={style.courseVideo}>
              <iframe src="https://player.vdocipher.com/v2/?otp=20160313versASE323qqQCclDEYAGkBsgLVn8Qvk8Ngz6833zzu270q8hqSX7xPk&playbackInfo=eyJ2aWRlb0lkIjoiNWE0ZmU2YWZhYzBkNGJjOWFmY2YwNWQ5ZDY2MWRjNzcifQ==" allowFullScreen="true" allow="encrypted-media"></iframe>
            </div>

            <button className={style.courseBtn}>
              Сатып алуу </button>
          </div>
          <div className={style.courseDescr}>
            <p>Учурдагы билим берүү системасы азыркы балдардын табиятына жооп бере албай калганына күндөн күнгө күбө болуудабыз. <br /><br />
              &nbsp;&nbsp; Азыркы Z жана альфа муунунун талаптары, кызыгуусу таптакыр башка. Бул көйгөйлүү маселеге чечим катары "шар окуу" курсу негизделип чыкты. Азыркы балдардын табиятын (психология, физиология ж.б.) эске алуу менен түзүлгөн, окуучулардын шар окуп кетүүсүнө кыска убакытта эффективдүү жыйынтык берген методиканы сунуштайбыз.
            </p>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Course