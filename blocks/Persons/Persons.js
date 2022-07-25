import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Persons.module.scss';
import Layout from '@/layouts/Layout/Layout';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import Quote from '@/components/Quote/Quote';
import Icon from '@/components/Icon/Icon';
import typograf from '@/utils/typograf';
import HtmlParser from 'html-react-parser';

function Persons({ name, info, quote }) {
  return (
    <div className={styles.Persons}>
      <LayoutLeft className={styles.left}>
        <div className={classNames(styles.name, 'h5')}>{name}</div>
        <p className={styles.post}>{HtmlParser(typograf(info))}</p>
      </LayoutLeft>
      <LayoutRight light className={styles.info}>
        <Quote>
          <Icon name="marks_white" />
          <div>
            <div className={classNames(styles.text, 'h6')}>
              {HtmlParser(typograf(quote))}
            </div>
          </div>
        </Quote>
      </LayoutRight>
    </div>
  )
}

Persons.propType = {
}

export default React.memo(Persons);
