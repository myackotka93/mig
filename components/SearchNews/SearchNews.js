import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './SearchNews.module.scss';

function SearchNews({ heading='Президент ГК «МИГ» выступил конференции «Столица инновационной онкологии 2022»'}) {
  return (
    <div className={styles.SearchNews}>
      <div className={styles.top}>
        <div className={styles.department}>Онкология</div>
        <div className={styles.vert_line}></div>
        <div className={styles.date}>30.05.22</div>
      </div>
      <p className={styles.heading}>{heading}</p>
      <Button className={styles.button}>Подробнее</Button>
    </div>
  )
}

SearchNews.propType = {
}

export default React.memo(SearchNews);
