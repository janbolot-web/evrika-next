import Head from "next/head";
import Image from "next/image";
import { BsChevronCompactDown } from "react-icons/bs";


import style from "../styles/Home.module.scss";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>AlippePro - онлайн платформа</title>
      </Head>
      <div className={style.home}>
        <div className="container">

          <h1 className={style.homeLogo}>

            <span>Alippe pro</span>
            Билим берүү <br /> аянтчасы 
          </h1>
          <div className={style.homeBlock}>
            <Image width={230} height={230} src="/../public/mainImg2.png" alt="" className={style.homeImg} />
            <p className={style.homeDescr}>
              <span>150+</span> <br />
              мугалим катышкан
            </p>
            <h2 className={style.homeTitle}>
              Учурдун талабына жооп берген билим берүү аянтчасы
            </h2>
          </div>
          
          <div className={style.homeDown}>
            <i>
              <BsChevronCompactDown size={32} />
            </i>
            <i>
              <BsChevronCompactDown size={32} />
            </i>
            <i>
              <BsChevronCompactDown size={32} />
            </i>
          </div>
        </div>
      </div>
    </Layout>
  );
}
