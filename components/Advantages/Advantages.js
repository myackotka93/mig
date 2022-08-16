import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Advantages.module.scss';
import HtmlParser from 'html-react-parser';
import typograf from '@/utils/typograf';

const colors = {
  blue: {
    background: '#0E3FB5', color: '#fff', color_text: '#fff'
  },
  gray: {
    background: '#EEEFF0', color: '#0E3FB5', color_text: '#000'
  },
  white: {
    background: '#fff', color: '#0E3FB5', color_text: '#000'
  },
}

function Advantages({ title = '2 300', text, color, marginBottom, img, fontSize, border, borderTop, paddingBottom, className }) {
  return (
    <div className={classNames(styles.Advantages, className)} style={{
      background: colors[color]?.background,
      color: colors[color]?.color,
      border,
      borderTop,
      paddingBottom
    }}>
      {img && <img className={styles.image} src={img} alt={title} />}
      <div className={styles.body}>
        <div className={classNames(styles.title, 'h1')} style={{ color: colors[color]?.color, marginBottom, fontSize }}>{HtmlParser(title)}</div>
        <div className={classNames(styles.type, 'h6')} style={{ color: colors[color]?.color_text }}>{typograf(text)}</div>
      </div>
    </div>
  )
}

Advantages.propType = {
}

export default React.memo(Advantages);
