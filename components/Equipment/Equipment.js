import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Equipment.module.scss';

const colors = {
  blue: {
    background: '#0E3FB5', color: '#fff', color_text: '#fff'
  },
  gray: {
    background: '#EEEFF0', color: '#0E3FB5', color_text: '#000'
  },
  white: {
    background: '#fff', color: '#0E3FB5', color_text: '#000'
  },
}

function Equipment({ background, color, title, image }) {
  return (
    <div className={styles.Equipment} style={{ background: colors[color]?.background, color: colors[color]?.color }}>
      <h5 className={styles.heading} style={{ color: colors[color]?.color }}>{title}</h5>
      <img className={styles.img} src={image} alt=""></img>
    </div>
  )
}

Equipment.propType = {
}

export default React.memo(Equipment);
