import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Footer.module.scss';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.Footer}>
      <Layout className={styles.Layout}>
        <LayoutLeft className={styles.LayoutLeft}>
          <Link href="/">
            <a className={styles.logo}>
              <img className={styles.img} src="/images/logo_footer.svg" alt="" />
            </a>
          </Link>
        </LayoutLeft>

        <LayoutRight light className={styles.info}>
          <div className={styles.two_columns}>
            <div className={styles.column_heading}>
              {/* <a className={styles.link_heading}>О нас</a> */}
              <Link href="/team">
                <a className={styles.link_heading}>Команда</a>
              </Link>
              {/* <a className={styles.link_heading}>Проекты</a> */}
              <Link href="/press-center">
                <a className={styles.link_heading}>Пресс-центр</a>
              </Link>
              <a className={styles.link_heading}>Контакты</a>
            </div>

            <div className={styles.column_directions}>
              <h3 className={styles.directions_heading}>Направления</h3>
              <Link href="/directions/gchp">
                <a className={styles.link_directions}>Государственно-частные проекты</a>
              </Link>
              <span className={styles.link_directions}>Клиники МИГ</span>
              <span className={styles.link_directions}>Онкологический кластер</span>
              <Link href="/directions/center">
                <a className={styles.link_directions}>Центры ядерной медицины и лучевой терапии</a>
              </Link>
              <span className={styles.link_directions}>Радиофармацевтическое производство</span>
              <span className={styles.link_directions}>Лабораторная диагностика</span>
              <span className={styles.link_directions}>Карьера</span>
            </div>
          </div>

          <div className={styles.contacts}>
            <div className={styles.phone}>
              <p className={styles.heading}>Телефон</p>
              <p className={styles.nomber}>+7 495 708-42-32</p>
            </div>

            <div className={styles.email}>
              <p className={styles.heading}>E-mail</p>
              <p className={styles.nomber}>welcome@medinvest-group.ru</p>
            </div>

            <div className={styles.social}>
              <p className={styles.heading}>Соц. сети</p>
              <div className={styles.icons}>
                <img className={styles.telegram} src="/images/telegram.svg" alt=""></img>
                <img className={styles.vk} src="/images/vk.png" alt=""></img>
              </div>
            </div>
          </div>

          <div className={styles.discriptions}>
            <p className={styles.text}>Пресс-служба компании является единственным официальным источником предоставления комментариев
              от ГК "МедИнвестГрупп". ГК не несет ответственности за достоверность информации, полученной не через официальный ответ от
              пресс-службы.</p>
          </div>
        </LayoutRight>
      </Layout>
    </div>
  )
}

Footer.propType = {
}

export default React.memo(Footer);
