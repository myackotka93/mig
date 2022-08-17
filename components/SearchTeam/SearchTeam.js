import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './SearchTeam.module.scss';
import HTMLReactParser from 'html-react-parser';

function SearchTeam({ title, searchable }) {
  return (
    <div className={styles.SearchTeam}>
      <p className={styles.heading}>{title}</p>
      <p className={styles.text}>{HTMLReactParser(searchable.info)}</p>
      {/* <Button className={styles.button}>Подробнее</Button> */}
    </div>
  )
}

SearchTeam.propType = {
}

export default React.memo(SearchTeam);
