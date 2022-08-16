import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './BigCard.module.scss';
import Quote from '@/components/Quote/Quote';
import Icon from '@/components/Icon/Icon';
import ButtonCircle from '../ButtonCircle/ButtonCircle';

function BigCard({ className, category, date, slug, logo, link = "", icon = "marks", image_big ,
  name, info }) {
  return (
    <div className={styles.BigCard}>
      {slug ? <a href={'/press-center/' + slug}  rel="noreferrer">
        <img className={styles.img} src={image_big} alt="" />
      </a> : <img className={styles.img} src={image_big} alt="" />}


      {category?.name && date && <div className={styles.wrapper}>
        <div className={styles.footer}>
          <div className={styles.department}>{category.name}</div>
          <div className={styles.vert_line}></div>
          <div className={styles.date}>{new Date(date).toLocaleDateString()}</div>
        </div>

        <ButtonCircle link={link} target="_blank" className={classNames(styles.next)}>
          <Icon name="right" />
        </ButtonCircle>
      </div>}

      <Quote className={classNames(styles.Quote, className)}>
        {logo ? <Icon name={icon} className={styles.logo} /> : <div className={styles.none}></div>}
        <div className={styles.description}>
          <div className={styles.text}>{name}</div>
          <p className={styles.post}>{info}</p>
        </div>
      </Quote>
    </div>
  )
}

BigCard.propType = {
}

export default React.memo(BigCard);
