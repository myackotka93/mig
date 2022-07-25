import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './MassMedia.module.scss';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import typograf from '@/utils/typograf';
import IconNew from '@/components/IconNew/IconNew';

function MassMedia() {
  return (
    <div className={styles.MassMedia}>
      <Layout className={styles.Layout}>
        <LayoutLeft className={styles.LayoutLeft}>
          <h6 className={styles.title}>CМИ</h6>
        </LayoutLeft>

        <LayoutRight light className={styles.LayoutRight}>
          <div className={classNames('h5', styles.heading)}>
            Все запросы от СМИ  <br />
            {typograf(`принимаются:`)} <br />
            {/* <span className={styles.border}>pressa@medinvest-group.ru</span> */}
          </div>
          <div className={styles.icons}>
            <IconNew name="telegramMedia" />
            <IconNew name="mailMedia" />
          </div>

          <p className={styles.text}>{typograf(`Пресс-служба компании является единственным официальным источником предоставления комментариев от ГК "МедИнвестГрупп". ГК не несет ответственности за достоверность информации, полученной не через официальный ответ от пресс-службы.`)}</p>
        </LayoutRight>
      </Layout>
    </div>
  )
}

MassMedia.propType = {
}

export default React.memo(MassMedia);
