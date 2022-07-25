import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Advantages.module.scss';
import HtmlParser from 'html-react-parser';

function Advantages({ title = '2 300', type = 'ЦКДЛ на Оршанской', background, color, color_text, marginBottom, img, fontSize, border, borderTop, paddingBottom  }) {
  return (
    <div className={styles.Advantages} style={{ background, color, border, borderTop, paddingBottom }}>
      {img && <img className={styles.image} src={img} alt={title} />}
      <div className={classNames(styles.title, 'h1')} style={{ color, marginBottom, fontSize }}>{HtmlParser(title)}</div>
      <div className={classNames(styles.type, 'h6')} style={{ color: color_text ?? color }}>{type}</div>
    </div>
  )
}

Advantages.propType = {
}

export default React.memo(Advantages);
