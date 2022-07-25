import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CardNews.module.scss';
import typograf from '@/utils/typograf';
import Link from 'next/link';

function CardNews({ title, text, image, date, link }) {
  return (
    <div className={styles.CardNews}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>{title}</div>
        <div className={styles.vert_line}></div>
        <div className={styles.date}>{date}</div>
      </div>

      <Link href={link}>
        <a target="_blank">
          <p className={styles.news}>{typograf(text)}</p>
        </a>
      </Link>
      <div className={styles.img}>
        <Link href={link}>
          <a target="_blank">
            <img src={image} alt="" />
          </a>
        </Link>
      </div>
    </div>
  )
}

CardNews.propType = {
}

export default React.memo(CardNews);
