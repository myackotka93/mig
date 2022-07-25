import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './InfoPlan.module.scss';

function InfoPlan(className, top, bottom, value = '17,7', text = 'Выделено на постройку онкоцентра в г. Пермь') {
  return (
    <div className={classNames(styles.InfoPlan, className, { [styles.top]: top, [styles.bottom]: bottom } )}>
      <h2 className={styles.value}>{value}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

InfoPlan.propType = {
}

export default React.memo(InfoPlan);
