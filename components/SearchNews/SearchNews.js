import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './SearchNews.module.scss';

function SearchNews({ title, searchable, url }) {
  return (
    <div className={styles.SearchNews}>
      <div className={styles.top}>
        <div className={styles.department}>{searchable.category.name}</div>
        <div className={styles.vert_line}></div>
        <div className={styles.date}>{new Date(searchable.date).toLocaleDateString()}</div>
      </div>
      <p className={styles.heading}>{title}</p>
      <Button link={url} className={styles.button}>Подробнее</Button>
    </div>
  )
}

SearchNews.propType = {
}

export default React.memo(SearchNews);
