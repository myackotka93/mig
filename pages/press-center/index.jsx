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
import fetcher from '@/utils/fetcher';
import axios from 'axios';

export default function Home({ news, categories }) {
  const [activeButtonNews, setActiveButtonNews] = useState(0);
  const [newsData, setNewsData] = useState(news.data);
  const [newsLinks, setNewsLinks] = useState(news.links);

  function handleNewsToggle(type) {
    setActiveButtonNews(type);
    loadNews(news.meta.path + '?category=' + type);
  }

  function loadMore() {
    if (!newsLinks.next) {
      return;
    }

    loadNews(newsLinks.next + '&category=' + activeButtonNews, true);
  }

  function loadNews(url, isAdd) {
    axios.get(url)
      .then(({ data }) => {
        if (isAdd) {
          setNewsData(news => [...news, ...data.data])
        } else {
          setNewsData(data.data)
        }
        setNewsLinks(data.links);
      })
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
            <Button
              className={styles.button_press}
              empty
              active={activeButtonNews === 0}
              onClick={() => handleNewsToggle(0)}
            >
              Все
            </Button>
            {categories?.map((button, index) => (
              <Button
                className={styles.button_press}
                empty
                key={button.id}
                active={activeButtonNews === button.id}
                onClick={() => handleNewsToggle(button.id)}
              >
                {button.name}
              </Button>
            ))}
          </div>

          {/* <div className={styles.filter_hashtag}>
            {HASHTAG.map((hash, index) => (
              <a key={index} className={styles.hashtag}>{hash.text}</a>
            ))}
          </div> */}
        </LayoutLeft>

        <LayoutRight className={styles.LayoutRight}>
          <BigCard {...newsData[0]} />
          <Divider />
          <div className={styles.container_news}>
            {newsData.slice(1).map((press, index) => (
              <React.Fragment key={press.id}>
                <NewsStill {...press}></NewsStill>
                <Divider className={styles.divider} />
              </React.Fragment>
            ))}
          </div>

          {newsLinks.next && <Button empty className={styles.button_right} onClick={loadMore}>Загрузить ещё</Button>}
        </LayoutRight>
      </Layout>

      <MassMedia />
      <div className="offset"></div>
    </>
  )
}

export async function getStaticProps(ctx) {
  // const team = await fetcher('api/team', ctx);
  // const maps = await fetcher('api/maps', ctx);

  console.time('news');
  const [footer, news, categories] = await Promise.all([
    fetcher('api/option/footer', ctx),
    fetcher('api/news', ctx),
    fetcher('api/category', ctx),
  ]);

  console.timeEnd('news');

  console.log(news)

  return {
    props: {
      news,
      categories: categories.data,
      footer: footer.attributes
    },
    revalidate: 10
  }

  // return { props: { ...props} }
}
