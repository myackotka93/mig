import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Project.module.scss';
import Button from '../Button/Button';


function Project({ title, image, children, onClick }) {
  return (
    <div className={styles.Project}>
      <h5 className={styles.heading}>{title}</h5>
      {image && <img className={styles.img} src={image} alt="" />}
      {children}
      {onClick && <Button onClick={onClick} className={styles.Button}>Узнать больше</Button>}
    </div>
  )
}

Project.propType = {
}

export default React.memo(Project);
