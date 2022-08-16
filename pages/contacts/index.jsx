import styles from './index.module.scss';
import Layout from '@/layouts/Layout/Layout'
import Divider from '@/components/Divider/Divider';
import classNames from 'classnames';
import fetcher from '@/utils/fetcher';

export default function Home() {

  return (
    <>
      <Layout className={styles.layout_haeding}>
        <div className={styles.center_header}>
          <h1 className={classNames(styles.heading_main, 'h1')}>Контакты</h1>
          <p className={styles.text_main}>Вы всегда можете связаться с нами</p>
        </div>
      </Layout>
      <Divider className={styles.divider_big}></Divider>

      <Layout>
        <div className={styles.layout_container}>
          <div className={styles.layout_block}>
            <h2 className={styles.layout_heading}>Офис</h2>
            <h6 className={styles.layout_contact}>г. Москва, ул. Тестовская, 10</h6>
            <h6 className={styles.layout_contact}>+7 495 708-42-32</h6>
          </div>
          <div className={styles.layout_block}>
            <h2 className={styles.layout_heading}>E-mail</h2>
            <h6 className={styles.layout_text}>welcome@medinvest-group.ru</h6>
          </div>
          <div className={styles.layout_block}>
            <h2 className={styles.layout_heading}>Пресс-служба:</h2>
            <h6 className={styles.layout_text}>pressa@medinvest-group.ru</h6>
            <h6 className={styles.layout_text}>t.me/pressa_v_MIG</h6>
          </div>
        </div>
      </Layout>


      <Layout className={styles.map}>
        <iframe className={styles.map_iframe} src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac48a82d30a4abcf497dda204df91ce41003df4fa21fbeee10d593e03d0706a74&amp;source=constructor" width="100%" frameBorder="0"></iframe>
      </Layout>

      <div className="offset"></div>
    </>
  )
}

export async function getStaticProps(ctx) {
  const [footer] = await Promise.all([
    fetcher('api/option/footer', ctx),
  ]);

  return { props: { footer: footer.attributes }, revalidate: 10 }
}