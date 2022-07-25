import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Banner.module.scss';

function Banner({src = "/images/banner.png"}) {
  return (
    <div className={styles.Banner}>
      <img className={styles.img} src={src} alt="" />
    </div>
  )
}

Banner.propType = {
}

export default React.memo(Banner);
