import Banner from '@/blocks/Banner/Banner'
import Button from '@/components/Button/Button'
import Directions from '@/blocks/Directions/Directions'
import NewsEvents from '@/blocks/NewsEvents/NewsEvents'
import HeaderBanner from '@/components/HeaderBanner/HeaderBanner'
import Modal from '@/components/Modal/Modal'
import { NEWS, CLINICS } from '@/data/clinics'
import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import typograf, { parser } from '@/utils/typograf'
import classNames from 'classnames'
import React, { useState } from 'react'
import Image from 'next/image'
import QuoteItem from '@/blocks/QuoteItem/QuoteItem'
import Project from '@/components/Project/Project'
import styles from './index.module.scss';
import Icon from '@/components/Icon/Icon'
import ButtonCircle from '@/components/ButtonCircle/ButtonCircle'
import fetcher from '@/utils/fetcher'


function Index({ attributes, news }) {
  const [modalMain, setModalMain] = useState(false);

  function handleMainModal() {
    setModalMain(true);
  }

  function handleCloseMainModal() {
    setModalMain(false);
  }

  function handleModalProject(link) {
    window.open(link, '_blank')
  }

  return (
    <>
      <HeaderBanner img={attributes.background} />
      <Directions
        // onClick={handleMainModal}
        title={attributes.name}
        info={attributes.short_info}
        text={attributes.info}
      >
        <div className={styles.buttons_logo}>
          <Button empty className={styles.buttons_item}>
            <Icon name="k_31" className={styles.buttons_icon}></Icon>
          </Button>
          <Button empty className={styles.buttons_item}>
            <Icon name="lyadov" className={styles.buttons_icon}></Icon>
          </Button>
          <Button empty className={styles.buttons_item}>
            <Icon name="mig_clinics" className={styles.buttons_icon}></Icon>
          </Button>
        </div>
      </Directions>
      {attributes.clinic_active && (
        <Layout>
          <LayoutLeft>
            <div className="h5">Клиники многопрофильной медицины в составе ГК «МИГ»</div>
          </LayoutLeft>
          <LayoutRight>
            <div className={styles.projects}>
              {
                attributes.clinics.map((p, i) => (
                  <Project
                    className={styles.project}
                    onClick={() => handleModalProject(p.link)}
                    key={p.title}
                    color={p.color}
                    // {...p}
                    title={p.title}
                    subtitle={p.subtitle}
                    button={'Перейти на сайт'}
                  >
                    <p>{typograf(p.text)}</p>
                  </Project>
                ))
              }
            </div>
          </LayoutRight>
        </Layout>
      )}

      {attributes.quote_active && (
        <QuoteItem
          name={attributes.quote_author.name}
          post={attributes.quote_author.info}
          img={(process.env.NEXT_PUBLIC_BACKEND_API ?? '').slice(0, -1) + attributes.quote_author.small_image}
          link={'/team/' + attributes.quote_author.id}
          text={typograf(attributes.quote_text)}>
        </QuoteItem>
      )}

      {attributes.active_banner && (
        <>
          <div className="offset"></div>
          <Banner src={attributes.banner} />
        </>
      )}

      <div className="offset"></div>
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
    fetcher('api/page/clinic', ctx),
    fetcher('api/news/category/kliniki-mig?limit=3', ctx)
  ]);

  page.attributes.quote_author = JSON.parse(page.attributes.quote_author ?? '{}');

  return { props: { ...page, news: news.data, footer: footer.attributes }, revalidate: 10 }
}