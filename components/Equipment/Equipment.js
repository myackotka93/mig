import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Equipment.module.scss';

function Equipment({ background, color, title, image }) {
  return (
    <div className={styles.Equipment} style={{ background, color }}>
      <h5 className={styles.heading} style={{ color }}>{title}</h5>
      <img className={styles.img} src={"/images/equipment/" + image} alt=""></img>
    </div>
  )
}

Equipment.propType = {
}

export default React.memo(Equipment);
