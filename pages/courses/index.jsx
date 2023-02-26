import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

import style from './courses.module.scss'

const Courses = () => {
  return (
    <Layout>
      <div className={style.courses}>
        <div className="container">
          <h1 className={style.coursesTitle}>
            Биздин курстар
          </h1>
          <div className={style.coursesList}>
            <div className={style.coursesItem}>
              <Link href="#" className={style.coursesLink}>
                <div className={style.coursesBg}></div>

                <div className={style.coursesItemTitle}>
                  Шар окуу мугалими
                </div>


              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Courses