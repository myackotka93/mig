import styles from './index.module.scss';
import Layout from '@/layouts/Layout/Layout'
import Divider from '@/components/Divider/Divider';
import classNames from 'classnames';

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
    </>
  )
}