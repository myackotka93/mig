import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconPlan from '@/components/IconPlan/IconPlan';
import InfoPlan from '@/components/InfoPlan/InfoPlan';
import Divider from '@/components/Divider/Divider';
import styles from './Plan.module.scss';
import typograf from '@/utils/typograf';

function Plan({ plan, text_plan }) {
  
  return (
    <div className={styles.Plan}>
      <h5 className={styles.heading}>{typograf(text_plan)}</h5>
      <div className={styles.list}>
        <Divider className={styles.divider_gchp} />
        {plan.map((p, i) => (
          <IconPlan key={i} top={i % 2 === 0} bottom={i % 2 === 1} icon={p.svg}>
            <h2 className={styles.value}>{p.title} <set className={styles.dop}>{p.prefix}</set></h2>
            <p className={styles.text}>{typograf(p.text)}</p>
          </IconPlan>
        ))}
      </div>


    </div>
  )
}

Plan.propType = {
}

export default React.memo(Plan);
