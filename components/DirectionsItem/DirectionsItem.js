import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './DirectionsItem.module.scss';
import Button from '@/components/Button/Button';

function DirectionsItem({ img, title = 'Лучевая терапия', className, onClick }) {
  return (
    <div className={classNames(styles.DirectionsItem, className)}>
      {img && <img className={styles.image} src={img} alt={title} />}
      <h3 className={styles.heading}>{title}</h3>
      <Button onClick={onClick} className={styles.Button}>Узнать больше</Button>
    </div>
  )
}

DirectionsItem.propType = {
}

export default React.memo(DirectionsItem);
