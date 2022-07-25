import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './HeaderBanner.module.scss';

function HeaderBanner({ img = '/images/header-center.jpg' }) {
  return (
    <div className={styles.HeaderBanner}>
      <img src={img} alt="" />
    </div>
  )
}

HeaderBanner.propType = {
}

export default React.memo(HeaderBanner);
