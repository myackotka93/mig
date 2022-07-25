// 请确认安装了classnames
import classnames from 'classnames'
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.module.scss';
import Button from '@/components/Button/Button';
import ButtonCircle from '@/components/ButtonCircle/ButtonCircle';
import Icon from '@/components/Icon/Icon';
import Link from 'next/link';

function Header() {
  return (
    <div className={styles.Header}>
      <Link href="/">
        <a className={styles.logo}></a>
      </Link>
      <div className={styles.vert_line}></div>
      <ButtonCircle className={styles.icon}>EN</ButtonCircle>
      <div className={styles.vert_line}></div>
      <ButtonCircle className={styles.icon}>
        <Icon name="search" />
      </ButtonCircle>
      <div className={styles.vert_line}></div>
      <div className={styles.nav}>
        {/* <a href="#" className={styles.nav_link}>О нас</a> */}
        {/* <a href="#" className={styles.nav_link}>Проекты</a> */}
        {/* <a href="#" className={styles.nav_link}>Партнеры</a> */}
        <Link href="/team">
          <a className={styles.nav_link}>Команда</a>
        </Link>
        <Link href="/press-center">
          <a className={styles.nav_link}>Пресс-центр</a>
        </Link>
        <Link href="/contacts">
          <a className={styles.nav_link}>Контакты</a>
        </Link>
      </div>
      <div className={styles.vert_line}></div>
      <Button className={styles.Button}>МИГ Карьера</Button>
    </div>
  )
}

Header.propType = {
}

export default React.memo(Header);
