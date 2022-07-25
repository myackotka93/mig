import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Partner.module.scss';
import typograf from '@/utils/typograf';
import EmptyButton from '../buttons/EmptyButton/EmptyButton';
import Button from '../Button/Button';

function Partner({ logo, className, link, name, text }) {
  return (
    <div className={classNames(styles.Partner, className)}>
      {logo ? <img className={styles.logo} src={logo} alt="" /> : <div></div>}
      <div className={styles.body}>
        <div className="h5">{name}</div>
        <p>{typograf(text)}</p>
        {link && <Button link={link} className={styles.Button}>Узнать больше</Button>}
      </div>
    </div>
  )
}

Partner.propType = {
}

export default React.memo(Partner);
