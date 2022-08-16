import Banner from '@/blocks/Banner/Banner'
import Directions from '@/blocks/Directions/Directions'
import NewsEvents from '@/blocks/NewsEvents/NewsEvents'
import HeaderBanner from '@/components/HeaderBanner/HeaderBanner'
import Modal from '@/components/Modal/Modal'
import { NEWS, ADVANT, ADDITION, BRANDS } from '@/data/oncology'
import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import typograf, { parser } from '@/utils/typograf'
import classNames from 'classnames'
import React, { useState } from 'react'
import Image from 'next/image'
import QuoteItem from '@/blocks/QuoteItem/QuoteItem'
import Button from '@/components/Button/Button'
import Advantages from '@/components/Advantages/Advantages'
import Partners from '@/blocks/main/Partners/Partners'
import CardService from '@/components/CardService/CardService'
import Stage from '@/components/Stage/Stage'
import fetcher from '@/utils/fetcher'
import ExportSlider from '@/components/Slider/Slider'
import styles from './index.module.scss';

function Index({ attributes, news }) {

  const [modalMain, setModalMain] = useState(false);
  const [activeButtonNews, setActiveButtonNews] = useState('ckdl');
  const [activeButtonAdvant, setActiveButtonAdvant] = useState(0);

  function handleNewsToggle(type) {
    setActiveButtonNews(type);
  }

  function handleMainModal() {
    setModalMain(true);
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
        title={attributes.name}
        info={attributes.short_info}
        text={attributes.info}
      />

      <Layout>
        <LayoutLeft>

        </LayoutLeft>
        <LayoutRight>
          <div className={classNames(styles.info_heading, 'h4')}>{attributes.second_name}</div>
          <div className="offset"></div>
          <p className={styles.info_text}>{attributes.second_info}</p>
          <div className={styles.info_wrapper}>
            {parser(attributes.text)}
          </div>
          {/* <Button onClick={handleMainModal}>Подробнее</Button> */}
        </LayoutRight>
      </Layout>

      {attributes.active_stages && (
        <Layout className={styles.service_layout}>
          <ExportSlider
            className={styles.services}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 32 },
              900: { slidesPerView: 1.5, spaceBetween: 32 },
              1200: { slidesPerView: 2.3, spaceBetween: 32 },
              1500: { slidesPerView: 2.5, spaceBetween: 32 },
            }}
          >
            {attributes.stages.map((stage, index, array) => (
              <ExportSlider.Slide key={index} className={styles.service_block_layout}>
                <div className={styles.service_block}>
                  <CardService last={!array[index + 1]} text={stage.text} />
                  <Stage
                    last={!array[index + 1]}
                    text={stage.name}
                    big={array[index + 1] && array[index + 1].name === stage.name}
                    hide={array[index - 1] && array[index - 1].name === stage.name}
                  />
                </div>
              </ExportSlider.Slide>
            ))}
          </ExportSlider>
        </Layout>
      )}

      {attributes.active_mig && (
        <Layout>
          <LayoutLeft>
            <div className={classNames(styles.data_heading, 'h4')}>МИГ Онкология в цифрах</div>
            <p className={styles.data_subtitle}>Особое внимание уделяется поддержке инфраструктуры онкокластера для обеспечения полного цикла диагностики и лечения.</p>
          </LayoutLeft>
          <LayoutRight>
            {/* <AdvantagesLayout items={ADVANT}></AdvantagesLayout> */}
            <div className={styles.advantages}>
              <div className={styles.advantages_left}>
                {attributes.advantages_mig.filter((e, index) => index % 2 === 0).map((e, index) => (
                  <Advantages key={index} {...e} type={e.text} img={e.slide_image}></Advantages>
                ))}
              </div>
              <div className={styles.advantages_right}>
                {attributes.advantages_mig.filter((e, index) => index % 2 === 1).map((e, index) => (
                  <Advantages key={index} {...e} type={e.text} img={e.slide_image}></Advantages>
                ))}
              </div>

              <div className={styles.advantages_mobile}>
                {attributes.advantages_mig.map((e, index) =>
                  <Advantages key={index} {...e} className={styles.advantages_item} img={e.slide_image}></Advantages>
                )}
              </div>
            </div>
          </LayoutRight>
        </Layout>
      )}

      {attributes.active_banner && (
        <>
          <div className="offset"></div>
          <Banner src={attributes.banner} />
        </>
      )}
      {attributes.active_brands && (
        <>
          <div className="offset"></div>
          <Partners
            blocks={attributes.brands}
            title="Бренды"
            text={attributes.text_brands}
          />
        </>
      )}
      <Layout>
        <div className={styles.additions}>
          {[
            { title: attributes.left_title_last, text: attributes.left_text_last, color: attributes.left_color_last, img: attributes.left_image_last },
            { title: attributes.center_title_last, text: attributes.center_text_last, color: attributes.center_color_last, img: attributes.center_image_last },
            { title: attributes.right_title_last, text: attributes.right_text_last, color: attributes.right_color_last, img: attributes.right_image_last },
          ].map((e, index) => (
            <Advantages
              className={styles.advantage}
              key={index}
              {...e}
            ></Advantages>
          ))}
        </div>
      </Layout>

      <NewsEvents news={news} />

      <Modal onClose={handleCloseMainModal} isOpen={modalMain}>
        {parser(attributes.info_popup)}
      </Modal>
    </>
  )
}

export default Index

export async function getStaticProps(ctx) {
  const [footer, page, news] = await Promise.all([
    fetcher('api/option/footer', ctx),
    fetcher('api/page/oncology', ctx),
    fetcher('api/news/category/onkologiya?limit=3', ctx)
  ]);

  return { props: { ...page, news: news.data, footer: footer.attributes }, revalidate: 10 }
}