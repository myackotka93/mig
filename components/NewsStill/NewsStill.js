import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './NewsStill.module.scss';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import Icon from '../Icon/Icon';

function NewsStill({ name, info, category, date, image_preview, slug }) {
  return (
    <div className={styles.NewsStill}>
      <div className={styles.img}>
        <img src={image_preview} alt="" />
      </div>

      <div className={styles.info}>
        <div className={styles.info_top}>
          <h3 className={styles.heading}>{name}</h3>
          <div className={styles.post}>{info}</div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.footer}>
            <div className={styles.department}>{category.name}</div>
            <div className={styles.vert_line}></div>
            <div className={styles.date}>{new Date(date).toLocaleDateString()}</div>
          </div>

          <ButtonCircle link={"/press-center/" + slug} className={classNames(styles.next)}>
            <Icon name="right" />
          </ButtonCircle>
        </div>
      </div>
    </div>
  )
}

NewsStill.propType = {
}

export default React.memo(NewsStill);