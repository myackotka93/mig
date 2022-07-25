import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './BigCard.module.scss';
import Quote from '@/components/Quote/Quote';
import Icon from '@/components/Icon/Icon';
import ButtonCircle from '../ButtonCircle/ButtonCircle';

function BigCard({ className, category, date, logo, link = "", name = "marks", img = "/images/president.png",
  text = "«МедИнвестГрупп» помогает государству расширить возможности лечения различных видов онкологических заболеваний",
  post = "Президент «МедИнвестГрупп» Сергей Нотов" }) {
  return (
    <div className={styles.BigCard}>
      {link ? <a href={link} target="_blank" rel="noreferrer">
        <img className={styles.img} src={img} alt="" />
      </a> : <img className={styles.img} src={img} alt="" />}


      {category && date && <div className={styles.wrapper}>
        <div className={styles.footer}>
          <div className={styles.department}>{category}</div>
          <div className={styles.vert_line}></div>
          <div className={styles.date}>{date}</div>
        </div>

        <ButtonCircle link={link} target="_blank" className={classNames(styles.next)}>
          <Icon name="right" />
        </ButtonCircle>
      </div>}

      <Quote className={classNames(styles.Quote, className)}>
        {logo ? <Icon name={name} className={styles.logo} /> : <div className={styles.none}></div>}
        <div className={styles.description}>
          <div className={styles.text}>{text}</div>
          <p className={styles.post}>{post}</p>
        </div>
      </Quote>
    </div>
  )
}

BigCard.propType = {
}

export default React.memo(BigCard);
