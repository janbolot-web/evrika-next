import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
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
                <div className={style.coursesBg}></div>

                <div className={style.coursesItemTitle}>
                  Шар окуу мугалими
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