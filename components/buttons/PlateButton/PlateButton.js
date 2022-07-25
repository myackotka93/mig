import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './PlateButton.module.scss';

function PlateButton({ className, children, active, ...props }) {
  return (
    <button className={classNames(styles.PlateButton, className, { [styles.active]: active })} {...props}>
      <span>
        {children}
      </span>
    </button>
  )
}

PlateButton.propType = {
}

export default React.memo(PlateButton);
