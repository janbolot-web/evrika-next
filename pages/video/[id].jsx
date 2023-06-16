import Layout from '../../components/Layout'
import SLider from '../../components/Slider'
import SwiperCards from '../../components/SwiperCards'
import style from './video.module.scss'

const Video = () => {
  return (
    <Layout>
      <div className={style.video}>
        <div className="container">
          <div className={style.videoHeader}>
            Шар окуу мугалими
          </div>
          <h1 className={style.videoTitle}>
            {/* <span>Сабактын темасы:</span> <br /> */}
            Алгачкы окуучуларды окутуу боюнча...
          </h1>
          <div className={style.videoPlayer}>
            {/* <iframe src="https://www.veed.io/embed/" width="744" height="504" frameborder="0"  webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
            <iframe title="1 - Сабак | Киришүү сабагы" src={`https://veed.io/embed/890af34d-455b-4ec4-b088-cc9678fc25fb?watermark=0&color=&sharing=0&title=1?watermark=0&color=&sharing=0`} width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen="allowfullscreen"></iframe>
          </div>
{/*          
          <div className={style.videoDescr}>
            <span>Сабактын мазмуну:</span> <hr /> <br />
            Курсту класстагы начар окуган окуучуларга кандай кылып түзөбүз? Продленка менен шар окууну кантип айкалыштырабыз? Курсту канча күнгө ачабыз жана канча сомдон? Курс өтүлчү орунду даярдоо. Окуучуларды деңгээли боюнча курска кабыл алуу. Результат жөнүндө кыскача.
          </div> */}
          
          <h2 className={style.videoList}>Сабактардын тизмеси:</h2>
        </div>
        <SLider />
        <SLider />
      </div>
    </Layout>
  )
}

export default Video