import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './IconPlan.module.scss';
import typograf from '@/utils/typograf';
import Icon from '../Icon/Icon';

function IconPlan({ className, icon = 'plan1', bottom, top, children  }) {
  return (

<div className={classNames(styles.IconPlan, className)}>

  <div className={styles.container}>
    <Icon className={styles.Icon} name={icon} />
  </div>
  
  <div className={classNames(styles.InfoPlan, { [styles.top]: top, [styles.bottom]: bottom } )}>
    {children}
  </div>

</div>
  )
}

IconPlan.propType = {
}

export default React.memo(IconPlan);
