import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Plan.module.scss';
import IconPlan from '@/components/IconPlan/IconPlan';
import InfoPlan from '@/components/InfoPlan/InfoPlan';
import Divider from '@/components/Divider/Divider';

function Plan() {
  return (
    <div className={styles.Plan}>
      <h5 className={styles.heading}>План открытия онкологического центра в г. Пермь</h5>
      <div className={styles.list}>
        <Divider className={styles.divider_gchp}/>
        <IconPlan top icon="plan1">          
          <h2 className={styles.value}>17,7 <set className={styles.dop}>млрд.₽</set></h2>
          <p className={styles.text}>Выделено на постройку онкоцентра в г. Пермь </p>
        </IconPlan>
        <IconPlan bottom icon="plan2">
          <h2 className={styles.value}>570</h2>
          <p className={styles.text}>Койко-мест</p>
        </IconPlan> 
        <IconPlan top icon="plan3">       
          <h2 className={styles.value}>35 <set className={styles.dop}>лет</set></h2>
          <p className={styles.text}>Концессия</p>
        </IconPlan >
        <IconPlan bottom icon="plan4">
          <h2 className={styles.value}>120 <set className={styles.dop}>тыс кв.м</set></h2>
          <p className={styles.text}>Выделено под строительство</p>
        </IconPlan >
        <IconPlan top icon="plan5">       
          <h2 className={styles.value}>&gt;4<set className={styles.dop}>лет</set></h2>
          <p className={styles.text}>На возведение объекта </p>
        </IconPlan >
        <IconPlan bottom icon="plan6">
          <h2 className={styles.value}>69<set className={styles.dop}>тыс кв.м</set></h2>
          <p className={styles.text}>Площадь онкоцентра</p>
        </IconPlan >


        {/* <div className={styles.item}>
          <IconPlan className={styles.icon}/>
        </div>
        <sup>лет</sup>
        <div className={styles.item}>
          <IconPlan className={styles.icon}/>
        </div> */}
      </div>


    </div>
  )
}

Plan.propType = {
}

export default React.memo(Plan);
