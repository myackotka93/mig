import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './EducationCard.module.scss';

function EducationCard({ img = '/images/education/education-1.svg' }) {
  return (
    <div className={styles.EducationCard}>
      <img className={styles.img} src={img} alt=""></img>
    </div>
  )
}

EducationCard.propType = {
}

export default React.memo(EducationCard);
