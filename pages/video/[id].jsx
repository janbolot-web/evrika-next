import Layout from '../../components/Layout'
import style from './video.module.scss'

const Video = () => {
  return (
    <Layout>
      <div className={style.video}>
      <div className="container">
        <div className={style.videoHeader}>
          Шар окуу мугалими
        </div>
        <div className={style.videoPlayer}>

        </div>
        <h1 className={style.videoTitle}>
          {/* <span>Сабактын темасы:</span> <br /> */}
        Алгачкы окуучуларды окутуу боюнча...
        </h1>
        <p className={style.videoDescr}>
          <span>Сабактын мазмуну:</span> <br />
          Баланын түшүнүгүн кантип жакшыртабыз. Курсту жыйынтыктаар алдында окуучунун колуна кандай колдонмо бере алабыз.
        </p>
      </div>
    </div>
    </Layout>
  )
}

export default Video