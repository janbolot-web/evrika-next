import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../../components/Button'
import Layout from '../../components/Layout'

import style from './courses.module.scss'

const Courses = () => {
  const navigate = useRouter()
  const toNavigate = () => {
    setTimeout(() => {
      navigate.push('/course/1');
    }, 800);
  }

  return (
    <Layout>
      <div className={style.courses}>
        <div className="container">
          <h1 className={style.coursesTitle}>
            Биздин курстар
          </h1>
          <div className={style.coursesList}>
            <div className={style.coursesItem}>
              <div onClick={toNavigate} className={style.coursesLink}>
                <div className={style.coursesBg}><p>Көрүү</p></div>

                <h2 className={style.coursesItemTitle}>
                  Шар окуу мугалими
                </h2>
                <div className={style.coursesContent}>
                  <div className={style.coursesLeft}>
                    <p className={style.coursesDuration}>
                      4 модуль <br /> 10 видео сабак
                    </p>
                    {/* <button className={style.coursesBtn}>
                      Көрүү
                    </button> */}
                  </div>

                  <Image width={100} height={100} src="/../public/mainImg2.png" alt="" className={style.coursesImg} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Courses