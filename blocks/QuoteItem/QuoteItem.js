import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Layout from '@/layouts/Layout/Layout';
import Quote from '@/components/Quote/Quote';
import Icon from '@/components/Icon/Icon';
import typograf from '@/utils/typograf';
import LayoutRight from '@/layouts/LayoutLeft/LayoutLeft';
import Button from '@/components/Button/Button';
import styles from './QuoteItem.module.scss';

function QuoteItem({ name = 'Судаков Алексей Алексеевич', post = 'Вице-президент ГК «МедИнвестГрупп»', img = '/images/quote/quote1.png', link = '/team/7',
  text = 'Сегодня российская система здравоохранения приобрела  необходимую зрелость в отношении к государственно-частному партнерству. Взаимодействие между государством и бизнесом приобретает все большую актуальность и становится одним из эффективных инструментов опережающего развития качественной и доступной медицинской помощи в стране.'}) {
  return (
    // <div className={styles.QuoteItem}>
    <Layout className={styles.Layout}>
      {/* <LayoutRight className={styles.LayoutRight}> */}
      <div className={styles.wrapper}>
        <Quote className={styles.quote}>
          <Icon name="marks_white" className={styles.icon}/>
          <div className={styles.discription}>
            <div className={classNames(styles.text, 'h5')}>
              {typograf(text)}
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.post}>{post}</p>
            <Button link={link} white className={styles.Button}>Узнать больше</Button>
          </div>
        </Quote>
      </div>
      <img className={styles.img} src={img} alt="" />
      {/* </LayoutRight> */}
    </Layout>
    // </div>
  )
}

QuoteItem.propType = {
}

export default React.memo(QuoteItem);
