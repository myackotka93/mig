import Banner from '@/blocks/Banner/Banner';
import Directions from '@/blocks/Directions/Directions';
import NewsEvents from '@/blocks/NewsEvents/NewsEvents';
import HeaderBanner from '@/components/HeaderBanner/HeaderBanner';
import Modal from '@/components/Modal/Modal';
import QuoteItem from '@/blocks/QuoteItem/QuoteItem';
import { NEWS, ADVANT, CAREER, ACHIEVEMENTS, IMG } from '@/data/career';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import typograf from '@/utils/typograf';
import classNames from 'classnames';
import React, { useState } from 'react'
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Advantages from '@/components/Advantages/Advantages';
import Project from '@/components/Project/Project';
import Divider from '@/components/Divider/Divider'
import EducationCard from '@/components/EducationCard/EducationCard';
import styles from './index.module.scss';
import fetcher from '@/utils/fetcher';
import Slider from '@/components/Slider/Slider';

function Index({ attributes = {}, news }) {
  const [activeButtonAdvant, setActiveButtonAdvant] = useState(0);

  function handleNewsToggle(type) {
    setActiveButtonNews(type);
  }

  function handleMainModal() {
    window.open(attributes.link, '_blank');
  }

  function handleCloseMainModal() {
    setModalMain(false);
  }

  function handleEquip(index) {
    setActiveButtonAdvant(index);
  }

  return (
    <>
      <HeaderBanner img={attributes.background} />
      <Directions
        onClick={handleMainModal}
        title={attributes.name}
        info={attributes.short_info}
        button="Перейти на сайт"
        text={attributes.info}
      />


      <Layout>
        <LayoutLeft></LayoutLeft>
        <LayoutRight className={styles.info} right>
          <div className={styles.info_container}>
            <div className={classNames(styles.info_heading, 'h4')}>{typograf(attributes.subtitle)}</div>
            <p className={styles.info_wrapper}>{typograf(attributes.text)}</p>
          </div>
        </LayoutRight>
      </Layout>

      {attributes.active_carier && (
        <Layout>
          <LayoutLeft>
            <p className={classNames(styles.progress_heading, 'h5')}>Карьера <br /> и образование <br />в МИГ</p>
          </LayoutLeft>
          <LayoutRight className={styles.advantages_right_layout}>
            <div className={styles.advantages}>
              <div className={styles.advantages_left}>
                {attributes.advantages_carier.filter((e, index) => index % 2 === 0).map((e, index) => (
                  <Advantages key={index} {...e} type={e.text} img={e.slide_image}></Advantages>
                ))}
              </div>

              <div className={styles.advantages_right}>
                {attributes.advantages_carier.filter((e, index) => index % 2 === 1).map((e, index) => (
                  <Advantages key={index} {...e} type={e.text} img={e.slide_image}></Advantages>
                ))}
              </div>
            </div>
          </LayoutRight>
        </Layout>
      )}


      {attributes.active_project_mig && (
        <>
          <Divider />
          <Layout>
            <LayoutLeft>
              <div className={classNames(styles.progress_heading, 'h4')}>Кадровые <br />проекты МИГ</div>
            </LayoutLeft>
            <LayoutRight>
              <div className={styles.projects}>
                <Advantages
                  className={styles.project}
                  title={attributes.left_card_title}
                  text={attributes.left_card_text}
                  color="blue"
                />

                <Advantages
                  className={styles.project}
                  title={attributes.right_card_title}
                  text={attributes.right_card_text}
                  color="blue"
                />
              </div>
            </LayoutRight>
          </Layout>
        </>
      )}

      <div className="offset"></div>
      {attributes.active_slides && <>
        <Slider
          effect="fade"
          className={styles.slider}
          navigation={{
            prevEl: '.' + styles.prev,
            nextEl: '.' + styles.next
          }}
        >
          {
            (attributes.slides ?? []).map((slide, index) => (
              <Slider.Slide key={slide.image}>
                <Banner src={slide.slide_image} />
                <Project
                  className={styles.slide_text}
                  title={slide.title}
                >
                  <p className={styles.project_text}>{typograf(slide.text)}</p>
                  <div className={styles.slide_text_footer}>
                    <Slider.Prev className={styles.prev} />
                    <span>
                      {index + 1} / {attributes.slides.length}
                    </span>
                    <Slider.Next className={styles.next} />
                  </div>
                </Project>
              </Slider.Slide>
            ))
          }
        </Slider>
        <div className="offset"></div>
      </>}

      {attributes.active_advantages && (
        <Layout>
          <LayoutLeft>
            <div className={styles.progress_container}>
              <div className={classNames(styles.progress_heading, 'h5')}>{typograf('Преимущества и достижения')}</div>
              <p className={styles.progress_wrapper}>{typograf(attributes.advantages_text)}</p>
            </div>
          </LayoutLeft>
          <LayoutRight>
            <div className={styles.projects}>
              {
                attributes.advantages.map((p, i) => (
                  <Project key={i} title={p.title} >
                    <p className={styles.project_text}>{typograf(p.text)}</p>
                  </Project>
                ))
              }
            </div>
          </LayoutRight>
        </Layout>
      )}


      {attributes.active_partners && <>
        <Divider />
        <Layout>
          <LayoutLeft>
            <p className={classNames(styles.partners_heading, 'h4')}>Образовательные партнеры</p>
          </LayoutLeft>
          <LayoutRight>
            <div className={styles.cards}>
              {
                attributes.partners.map((p, i) => (
                  <EducationCard key={i} img={p}></EducationCard>
                ))
              }
            </div>
          </LayoutRight>
        </Layout>
      </>}

      <NewsEvents news={news} />
    </>
  )
}

export default Index

export async function getStaticProps(ctx) {
  const [footer, page, news] = await Promise.all([
    fetcher('api/option/footer', ctx),
    fetcher('api/page/carier', ctx),
    fetcher('api/news/category/karera-v-mig?limit=3', ctx)
  ]);

  return { props: { ...page, news: news.data, footer: footer.attributes }, revalidate: 10 }
}