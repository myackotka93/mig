// 请确认安装了classnames
import classnames from 'classnames'
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@/components/Button/Button';
import ButtonCircle from '@/components/ButtonCircle/ButtonCircle';
import Icon from '@/components/Icon/Icon';
import Link from 'next/link';
import Divider from '@/components/Divider/Divider';
import styles from './Header.module.scss';

function Header() {

  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);

  function handleHamburgerOpen(){
    setIsHamburgerOpen(true)
  }

  function handleHamburgerClose(){
    setIsHamburgerOpen(false)
  }

  return (
    <>
      <div className={styles.Header}>
        <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}></a>
        </Link>
        <div className={styles.vert_line}></div>
        {/* <ButtonCircle className={styles.icon}>EN</ButtonCircle>
        <div className={styles.vert_line}></div> */}
        <Link href="/search">
          <ButtonCircle  className={styles.icon}>
            <Icon name="search" />
          </ButtonCircle>
        </Link>
        <div className={styles.vert_line}></div>
        <div className={styles.nav}>
          {/* <a href="#" className={styles.nav_link}>О нас</a> */}
          {/* <a href="#" className={styles.nav_link}>Проекты</a> */}
          {/* <a href="#" className={styles.nav_link}>Партнеры</a> */}
          {/* <Link href="/team">
            <a className={styles.nav_link}>Команда</a>
          </Link> */}
          <Link href="/press-center">
            <a className={styles.nav_link}>Пресс-центр</a>
          </Link>
          <Link href="/contacts">
            <a className={styles.nav_link}>Контакты</a>
          </Link>
        </div>
        <div className={styles.vert_line}></div>
        <Button className={styles.Button}>МИГ Карьера</Button>
        <button className={styles.hamburger} onClick={handleHamburgerOpen}>
          <Icon className={styles.hamburger_img} name="humburger" />
        </button>
        </div>

        <div className={classNames(styles.popup, isHamburgerOpen && styles.popup_opened)} onClick={handleHamburgerClose}>
          <div className={styles.popup__container} >
            <div className={styles.popup__wrapper} >
              {/* <Link href="/team" >
                <a className={styles.hamburger_link}>Команда</a>
              </Link> */}
              <Link href="/press-center">
                <a className={styles.hamburger_link}>Пресс-центр</a>
              </Link>
              <Link href="/contacts">
                <a className={styles.hamburger_link}>Контакты</a>
              </Link>
              <div className={styles.column_directions}>
                <h3 className={styles.hamburger_link}>Направления</h3>
                <Link href="/directions/gchp">
                  <a className={styles.link_directions}>Государственно-частные проекты</a>
                </Link>
                <Link href="/directions/mig">
                  <a className={styles.link_directions}>Клиники МИГ</a>
                </Link>
                <Link href="/directions/oncology">
                <span className={styles.link_directions}>Онкологический кластер</span>
                </Link>
                <Link href="/directions/center">
                  <a className={styles.link_directions}>Центры ядерной медицины и лучевой терапии</a>
                </Link>
                {/* <Link href="/directions/radio">
                  <a className={styles.link_directions}>Радиофармацевтическое производство</a>
                </Link>
                <Link href="/directions/laboratory">
                  <a className={styles.link_directions}>Лабораторная диагностика</a>
                </Link> */}
                <Link href="/directions/carier">
                  <a className={styles.link_directions}>Карьера</a>
                </Link>
            </div>
            <Divider />
              <div className={styles.contacts}>
                <div className={styles.phone}>
                  <p className={styles.heading}>Телефон</p>
                  <a className={styles.number} href="tel:+74957084232">+7 495 708-42-32</a>
                </div>

                <div className={styles.email}>
                  <p className={styles.heading}>E-mail</p>
                  <a className={styles.number} href="mailto:welcome@medinvest-group.ru">welcome@medinvest-group.ru</a>
                </div>

                <div className={styles.social}>
                  <p className={styles.heading}>Соц. сети</p>
                  <div className={styles.icons}>
                    <img className={styles.telegram} src="/images/telegram.svg" alt=""></img>
                    <img className={styles.vk} src="/images/vk.png" alt=""></img>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.popup__button} onClick={handleHamburgerClose}>
              <Icon name="humburger_close" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

Header.propType = {
}

export default React.memo(Header);
