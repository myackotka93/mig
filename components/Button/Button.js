import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';
import Link from 'next/link';

let bool = true;


function Button({ children, empty, white, className, link, active, onClick = () => { }, ...props }) {

  if (link) {
    return (
      <Link href={link}>
        <a className={classNames(styles.Button, className, { [styles.empty]: empty, [styles.white]: white, [styles.active]: active })} {...props} >
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classNames(styles.Button, className, { [styles.empty]: empty, [styles.white]: white, [styles.active]: active })}>
      {children}
    </button>
  )
}

Button.propType = {
}

export default React.memo(Button);
