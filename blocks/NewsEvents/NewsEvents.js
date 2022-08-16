import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './NewsEvents.module.scss';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import NewsStill from '@/components/NewsStill/NewsStill';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import Divider from '@/components/Divider/Divider';

function NewsEvents({ news = [] }) {
  return (
    <Layout className={styles.NewsEvents}>
      <LayoutLeft>
        <div className="h4">
          Новости <br />
          и события
        </div>
      </LayoutLeft>
      <LayoutRight right className={styles.right}>
        {
          news?.map((n, index) => (
            <React.Fragment key={n.id}>
              <NewsStill {...n}></NewsStill>
              <Divider></Divider>
            </React.Fragment>
          ))
        }
      </LayoutRight>
    </Layout>
  )
}

NewsEvents.propType = {
}

export default React.memo(NewsEvents);
