import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Stage.module.scss';
import typograf from '@/utils/typograf';

function Stage({ text, big, hide, last }) {
  return (
    <div className={classNames(styles.Stage, { [styles.hide]: hide, [styles.big]: big })}>
      {!last && (
        <svg className={styles.img} width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.761967" width="13.8912" height="13.8912" transform="matrix(0.761967 -0.647616 0.761967 0.647616 0.83567 10.9817)" fill="#EEEFF0" stroke="#888E9C" />
        </svg>
      )}
      <div className={styles.bg}></div>
      <p className={styles.text}>{typograf(text)}</p>
    </div>
  )
}

Stage.propType = {
}

export default React.memo(Stage);
