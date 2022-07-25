import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import MassMedia from '@/blocks/MassMedia/MassMedia'
import Divider from '@/components/Divider/Divider';
import styles from './index.module.scss';
import { PRESS_BUTTON, NEWS_CARD, HASHTAG } from '@/data/press';
import Button from '@/components/Button/Button';
import React, { useState } from 'react'
import NewsStill from '@/components/NewsStill/NewsStill';
import BigCard from '@/components/BigCard/BigCard';

export default function Home() {
  const [activeButtonNews, setActiveButtonNews] = useState('pet');

  function handleNewsToggle(type) {
    setActiveButtonNews(type);
  }

  return (
    <>
      <Layout className={styles.layout_haeding}>
        <div className={styles.center_header}>
          <h1 className={styles.heading_main}>Новости и&nbsp;события</h1>
        </div>
      </Layout>
      <Divider className={styles.divider_big}></Divider>

      <Layout className={styles.layout_press}>
        <LayoutLeft className={styles.LayoutLeft}>
          <div className={styles.filter_buttons}>
            {PRESS_BUTTON?.map((button, index) => (
              <Button className={styles.button_press} empty key={index} active={activeButtonNews === button.type} onClick={() => handleNewsToggle(button.type)}>{button.button}</Button>
            ))}
          </div>

          {/* <div className={styles.filter_hashtag}>
            {HASHTAG.map((hash, index) => (
              <a key={index} className={styles.hashtag}>{hash.text}</a>
            ))}
          </div> */}
        </LayoutLeft>

        <LayoutRight className={styles.LayoutRight}>
          <BigCard
            category="РФП"
            date="30.05.22"
            img="/images/current-events.png"
            link="https://medinvest-group.ru/news/prezident-gk-mig-sergey-notov-vystupil-na-i-moskovskoy-onkologicheskoy-konferentsii-stolitsa-innovats.html"
            text="Президент ГК «МИГ» выступил на I Московской онкологической конференции"
            post="Ядерная медицина">
          </BigCard>
          <Divider />
          <div className={styles.container_news}>
            {NEWS_CARD.map((press, index) => (
              <React.Fragment key={index}>
                <NewsStill {...press}></NewsStill>
                <Divider className={styles.divider} />
              </React.Fragment>
            ))}
          </div>

          <Button empty className={styles.button_right}>Загрузить ещё</Button>
        </LayoutRight>
      </Layout>

      <MassMedia />
      <div className="offset"></div>
    </>
  )
}

