import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './SearchTeam.module.scss';

function SearchTeam({ heading='Президент ГК «МИГ» выступил конференции «Столица инновационной онкологии 2022»',
                       text='Генеральный директор ГК «МедИнвестГрупп» Эксперт по инвестиционному управлению и корпоративным финансам'}) {
  return (
    <div className={styles.SearchTeam}>
      <p className={styles.heading}>{heading}</p>
      <p className={styles.text}>{text}</p>
      <Button className={styles.button}>Подробнее</Button>
    </div>
  )
}

SearchTeam.propType = {
}

export default React.memo(SearchTeam);
