import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Profile.module.scss';

function Profile({ className, name = 'Нотов Сергей Александрович', info, avatar }) {
  return (
    <div className={classNames(styles.Profile, className)}>
      <img src="/images/profile.png" alt="" className={styles.img} />
      <div className={styles.wrapper}>
        {name && <h6 className={styles.heading}>{name}</h6>}
        <p className={styles.post}>Президент Группы компаний “МедИнвестГрупп”</p>
      </div>
    </div>
  )
}

Profile.propType = {
}

export default React.memo(Profile);
