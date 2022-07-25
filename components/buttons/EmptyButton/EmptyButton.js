import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './EmptyButton.module.scss';
import Link from 'next/link';

function EmptyButton({ className, children, active, link, ...props }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={classNames(styles.EmptyButton, className, { [styles.active]: active })} {...props}>
          {children}
        </a>
      </Link>
    )
  }
  return (
    <button className={classNames(styles.EmptyButton, className, { [styles.active]: active })} {...props}>
      {children}
    </button>
  )
}

EmptyButton.propType = {
}

export default React.memo(EmptyButton);
