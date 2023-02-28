import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

import style from './course.module.scss'

const Course = () => {
  return (
    <Layout>
      <div className={style.course}>
        <div className="container">
         <h1>Hello</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Course