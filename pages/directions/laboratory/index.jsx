import Banner from '@/blocks/Banner/Banner'
import Directions from '@/blocks/Directions/Directions'
import NewsEvents from '@/blocks/NewsEvents/NewsEvents'
import HeaderBanner from '@/components/HeaderBanner/HeaderBanner'
import Modal from '@/components/Modal/Modal'
import QuoteItem from '@/blocks/QuoteItem/QuoteItem'
import { NEWS, BUTTONS, ADVANT, ACHIEVEMENTS } from '@/data/laba'
import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import typograf, { parser } from '@/utils/typograf'
import classNames from 'classnames'
import React, { useState } from 'react'
import Button from '@/components/Button/Button';
import Advantages from '@/components/Advantages/Advantages'
import Project from '@/components/Project/Project'
import Divider from '@/components/Divider/Divider'
import styles from './index.module.scss';
import fetcher from '@/utils/fetcher'

function Index({ attributes, news }) {
  const [modalMain, setModalMain] = useState(false);
  const [modalCkdl, setModalCkdl] = useState(false);
  const [activeButtonNews, setActiveButtonNews] = useState('ckdl');

  function handleNewsToggle(type) {
    setActiveButtonNews(type);
  }

  function handleMainModal() {
    setModalMain(true);
  }

  function handleCloseMainModal() {
    setModalMain(false);
  }

  function handleUpModalCkdl() {
    setModalCkdl(true);
  }

  function handleDownModalCkdl() {
    setModalCkdl(false);
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
        text={attributes.info}
      />

      <Layout>
        <LayoutLeft className={styles.info_left}></LayoutLeft>
        <LayoutRight className={styles.info} right>
          <div className={styles.info_container}>
            <div className={classNames(styles.info_wrapper, 'h4')}>
              {typograf(
                activeButtonNews === 'ckdl' ? attributes.ckdl_text : attributes.novascreen_text
              )}
            </div>
            <div className={styles.filter_buttons}>
              {BUTTONS?.map((button, index) => (
                <Button
                  className={styles.button_laba}
                  empty
                  key={index}
                  active={activeButtonNews === button.type}
                  onClick={() => handleNewsToggle(button.type)}
                >
                  {button.button}
                </Button>
              ))}
            </div>
          </div>
        </LayoutRight>
      </Layout>

      {activeButtonNews === 'ckdl' && attributes.ckdl_active && (
        <Layout>
          <LayoutLeft>
            <div className={styles.progress_container}>
              <div className={classNames(styles.progress_heading, 'h5')}>Преимущества и&nbsp;достижения</div>
              <p className={styles.progress_wrapper}>{typograf(attributes.ckdl_short_text)}</p>
              <Button onClick={handleUpModalCkdl}>Узнать больше</Button>
            </div>
          </LayoutLeft>
          <LayoutRight className={styles.advantages_right_layout}>
            <div className={styles.advantages}>
              <div className={styles.advantages_left}>
                {attributes.ckdl_advantages.filter((e, index) => index % 2 === 0).map((e, index) => (
                  <Advantages key={index} {...e} type={e.text} img={e.slide_image}></Advantages>
                ))}
              </div>
              <div className={styles.advantages_right}>
                {attributes.ckdl_advantages.filter((e, index) => index % 2 === 1).map((e, index) => (
                  <Advantages key={index} {...e} type={e.text} img={e.slide_image}></Advantages>
                ))}
              </div>

              <div className={styles.advantages_mobile}>
                {attributes.ckdl_advantages.map((e, index) =>
                  <Advantages key={index} {...e} className={styles.advantages_item} img={e.slide_image}></Advantages>
                )}
              </div>
            </div>
          </LayoutRight>
        </Layout>
      )}

      {activeButtonNews === 'novascreen' && attributes.novascreen_active && (
        <Layout>
          <LayoutLeft>
            <div className={styles.progress_container}>
              <div className={classNames(styles.progress_heading, 'h5')}>Преимущества и&nbsp;достижения</div>
              <p className={styles.progress_wrapper}>{typograf(attributes.novascreen_short_text)}</p>
              <Button target="_blank" link={attributes.novascreen_link}>Перейти на сайт</Button>
            </div>
          </LayoutLeft>
          <LayoutRight>
            <div className={styles.projects}>
              {attributes.novascreen_advantages.map((p, i) => (
                <Project key={i} title={p.title} >
                  <p className={styles.project_text}>{typograf(p.text)}</p>
                </Project>
              ))}
            </div>
          </LayoutRight>
        </Layout>
      )}

      {activeButtonNews === 'ckdl' && attributes.ckdl_quote_active && (
        <QuoteItem
          name={attributes.ckdl_author.name}
          post={attributes.ckdl_author.info}
          img={(process.env.NEXT_PUBLIC_BACKEND_API ?? '').slice(0, -1) + attributes.ckdl_author.small_image}
          link={'/team/' + attributes.ckdl_author.id}
          text={typograf(attributes.ckdl_quote_text)}>
        </QuoteItem>
      )}

      {activeButtonNews === 'novascreen' && attributes.novascreen_quote_active && (
        <QuoteItem
          name={attributes.novascreen_author.name}
          post={attributes.novascreen_author.info}
          img={(process.env.NEXT_PUBLIC_BACKEND_API ?? '').slice(0, -1) + attributes.novascreen_author.small_image}
          link={'/team/' + attributes.novascreen_author.id}
          text={typograf(attributes.novascreen_quote_text)}>
        </QuoteItem>
      )}

      {activeButtonNews === 'ckdl' && attributes.ckdl_active_banner && (
        <>
          <div className="offset"></div>
          <Banner src={attributes.ckdl_banner} />
        </>
      )}

      {activeButtonNews === 'novascreen' && attributes.novascreen_active_banner && (
        <>
          <div className="offset"></div>
          <Banner src={attributes.novascreen_banner} />
        </>
      )}

      <div className="offset"></div>

      <Divider className={styles.divider} />
      <NewsEvents news={news} />

      <Modal onClose={handleCloseMainModal} isOpen={modalMain}>
        {parser(attributes.info_popup)}
      </Modal>

      <Modal onClose={handleDownModalCkdl} isOpen={modalCkdl}>
        {parser(attributes.ckdl_popup)}
      </Modal>
    </>
  )
}

export default Index

export async function getStaticProps(ctx) {

  const [footer, page, news] = await Promise.all([
    fetcher('api/option/footer', ctx),
    fetcher('api/page/laboratory', ctx),
    fetcher('api/news/category/kliniki-mig?limit=3', ctx)
  ]);

  page.attributes.novascreen_author = JSON.parse(page.attributes.novascreen_author ?? '{}');
  page.attributes.ckdl_author = JSON.parse(page.attributes.ckdl_author ?? '{}');
  // page.attributes.slides = JSON.parse(page.attributes.slides ?? '[]');

  return { props: { ...page, news: news.data, footer: footer.attributes }, revalidate: 10 }
}