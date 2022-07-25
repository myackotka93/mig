import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Divider.module.scss';

function Divider({ className, light }) {
  return (
    <div className={classNames(styles.Divider, className, { [styles.light]: light })}>

    </div>
  )
}

Divider.propType = {
}

export default React.memo(Divider);
