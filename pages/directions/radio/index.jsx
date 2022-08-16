import Banner from '@/blocks/Banner/Banner'
import Directions from '@/blocks/Directions/Directions'
import NewsEvents from '@/blocks/NewsEvents/NewsEvents'
import HeaderBanner from '@/components/HeaderBanner/HeaderBanner'
import Modal from '@/components/Modal/Modal'
import { NEWS } from '@/data/rphp'
import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import typograf, { parser } from '@/utils/typograf'
import classNames from 'classnames'
import React, { useState } from 'react'
import styles from './index.module.scss';
import Image from 'next/image'
import fetcher from '@/utils/fetcher'

function Index({ attributes, news }) {
  const [modalMain, setModalMain] = useState(false);

  function handleMainModal() {
    setModalMain(true);
  }

  function handleCloseMainModal() {
    setModalMain(false);
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
        <LayoutLeft>
          <div className="h6">Лекарственные направления</div>
        </LayoutLeft>
        <LayoutRight className={styles.info} right>
          <div className={classNames(styles.info_wrapper, 'h4')}>{typograf(attributes.second_name)}</div>
          <div className={styles.info_list}>
            {parser(attributes.text)}
          </div>
          <p>{typograf(attributes.second_info)}</p>
        </LayoutRight>
      </Layout>
      {attributes.active_map && (
        <Layout className={styles.layout_map}>
          <LayoutLeft>
            <div className="h3">Регионы <br /> поставок <br />РФП</div>
          </LayoutLeft>
          <LayoutRight className={styles.map}>
            <div className={styles.map_img}>
              <Image className="image-next" quality={100} layout='fill' src={attributes.map} alt="" />
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
    fetcher('api/page/radio', ctx),
    fetcher('api/news/category/rfp?limit=3', ctx)
  ]);

  return { props: { ...page, news: news.data, footer: footer.attributes }, revalidate: 10 }
}