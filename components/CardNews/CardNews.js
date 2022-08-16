import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CardNews.module.scss';
import typograf from '@/utils/typograf';
import Link from 'next/link';

function CardNews({ name, category, image_preview, date, slug }) {
  return (
    <div className={styles.CardNews}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>{category?.name}</div>
        <div className={styles.vert_line}></div>
        <div className={styles.date}>{new Date(date).toLocaleDateString()}</div>
      </div>

      <Link href={'/press-center/' + slug}>
        <a className={styles.name}>
          <span className={styles.news}>{typograf(name)}</span>
        </a>
      </Link>
      <div className={styles.img}>
        <Link href={'/press-center/' + slug}>
          <a>
            <img src={image_preview} alt="" />
          </a>
        </Link>
      </div>
    </div>
  )
}

CardNews.propType = {
}

export default React.memo(CardNews);
