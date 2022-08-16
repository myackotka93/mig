import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CardService.module.scss';
import { parser } from '@/utils/typograf';

function CardService({ text, last }) {
  return (
    <div className={styles.CardService}>
      {parser(text)}
      {!last && (
        <svg className={styles.img} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.652344" y="12.2539" width="16.0465" height="16.0465" transform="rotate(-45 0.652344 12.2539)" fill="#0E3FB5" />
        </svg>
      )}
    </div>
  )
}

CardService.propType = {
}

export default React.memo(CardService);
