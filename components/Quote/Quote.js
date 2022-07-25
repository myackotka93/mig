import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Quote.module.scss';
import Icon from '@/components/Icon/Icon';

function Quote({children, className}) {
  return (
    <div className={classNames(styles.Quote, className)}>
      {children}
    </div>
  )
}

Quote.propType = {
}

export default React.memo(Quote);
