import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';
import typograf from '@/utils/typograf';
import Divider from '../Divider/Divider';
import styles from './Project.module.scss';


function Project({ title, image, children, subtitle, onClick, className, color, border, button = 'Узнать больше' }) {
  return (
    <div className={classNames(styles.Project, className, styles[color])} style={{ border }}>
      <h5 className={styles.heading}>{typograf(title)}</h5>
      {subtitle && <h7 className={'h7'}>{typograf(subtitle)}</h7>}
      <Divider className={styles.divider} light />
      {image && <img className={styles.img} src={image} alt="" />}
      <div className={styles.text}>
        {children}
      </div>
      {onClick && <Button onClick={onClick} className={styles.Button}>{button}</Button>}
    </div>
  )
}

Project.propType = {
}

export default React.memo(Project);
