import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Person.module.scss';
import Button from '@/components/Button/Button';
import typograf from '@/utils/typograf';
import HtmlParser from 'html-react-parser';

function Person({ name, id, small_image, info, biography }) {
  return (
    <div className={styles.Person}>
      <div className={styles.img}>
        <img src={small_image} alt="" className={styles.color} />
      </div>

      <div className={styles.wrapper}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.post}>{HtmlParser(typograf(info))}</div>
        <Button link={!!biography ? ("/team/" + id) : null} className={styles.Button}>Узнать больше</Button>
      </div>
    </div>
  )
}

Person.propType = {
}

export default React.memo(Person);
