import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image() {
  return (
    <div className={styles.Image}>
      <img className={styles.img}src="/images/image_block.png" alt=""></img>
    </div>
  )
}

Image.propType = {
}

export default React.memo(Image);
