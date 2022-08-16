import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import Divider from '@/components/Divider/Divider';
import styles from './index.module.scss';
import ButtonCircle from '@/components/ButtonCircle/ButtonCircle';
import Button from '@/components/Button/Button';
import NewsStill from '@/components/NewsStill/NewsStill';
import { NEWS_BUTTON, NEWS_STILL } from '@/data/press';
import React, { useState } from 'react'
import Icon from '@/components/Icon/Icon';
import typograf, { parser } from '@/utils/typograf';
import classNames from 'classnames';
import fetcher from '@/utils/fetcher';

export default function Home({ article, news }) {
  const [activeButtonNews, setActiveButtonNews] = useState('pet');

  function handleNewsToggle(type) {
    setActiveButtonNews(type);
  }

  return (
    <>
      <div className={styles.layout_haeding}>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.footer}>
              <div className={styles.department}>{article.category?.name}</div>
              <div className={styles.vert_line}></div>
              <div className={styles.date}>{new Date(article.date).toLocaleDateString()}</div>
            </div>

            <h1 className={classNames(styles.heading, 'h3')}>{typograf(article.name)}</h1>
            <p className={styles.post}>{typograf(article.info)}</p>
          </div>

          <img src={article.image_big} alt="" className={styles.img} />
        </div>
      </div>

      <Layout className={styles.layout_news}>
        <LayoutLeft className={styles.LayoutLeft}>
          <p className={styles.share}>Поделиться</p>
          <div className={styles.circle_group}>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="vk_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="telegram_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="ok_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="dzen_news" />
            </ButtonCircle>
          </div>
        </LayoutLeft>

        <LayoutRight className={styles.LayoutRight}>
          <div className={styles.text}>
            {parser(article.text)}
          </div>

          <Divider className={styles.divider_big} />

          <div className={styles.circle_group}>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="vk_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="telegram_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="ok_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="dzen_news" />
            </ButtonCircle>
          </div>

          <div className={styles.filter_buttons}>
            {article.tags?.map((button, index) => (
              <Button className={styles.button_news} empty key={index}>{button}</Button>
            ))}
          </div>
        </LayoutRight>
      </Layout>

      <Divider />

      <Layout className={styles.layout_still}>
        <LayoutLeft>
          <h6 className={styles.still_news}>Ещё новости</h6>
        </LayoutLeft>

        <LayoutRight>
          <div className={styles.container_news}>
            {news.map((press, index) => (
              <React.Fragment key={index}>
                <NewsStill {...press}></NewsStill>
                <Divider className={styles.divider} />
              </React.Fragment>
            ))}
          </div>
        </LayoutRight>
      </Layout>
    </>
  )
}

export async function getStaticPaths(ctx) {
  const res = await fetcher('api/news/all', ctx);

  return {
    paths: res.data.map(article => ({ params: { alias: article.slug } })),
    fallback: 'blocking'
  };
}


export async function getStaticProps(ctx) {
  const [footer, { data }, other] = await Promise.all([
    fetcher('api/option/footer', ctx),
    fetcher('api/news/' + ctx.params.alias, ctx),
    fetcher('api/news/category/press-center?limit=3', ctx)
  ]);

  if (data) {
    return { props: { article: data, news: other.data, footer: footer.attributes }, revalidate: 10 }
  }

  return {
    notFound: true
  }
}