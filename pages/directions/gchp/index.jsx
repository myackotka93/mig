import Banner from '@/blocks/Banner/Banner'
import Directions from '@/blocks/Directions/Directions'
import Example from '@/blocks/Example/Example'
import NewsEvents from '@/blocks/NewsEvents/NewsEvents'
import Plan from '@/blocks/Plan/Plan'
import QuoteItem from '@/blocks/QuoteItem/QuoteItem'
import Button from '@/components/Button/Button'
import HeaderBanner from '@/components/HeaderBanner/HeaderBanner'
import Icon from '@/components/Icon/Icon'
import Modal from '@/components/Modal/Modal'
import Profile from '@/components/Profile/Profile'
import Project from '@/components/Project/Project'
import Quote from '@/components/Quote/Quote'
import { NEWS, PROJECTS } from '@/data/gchp'
import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import typograf, { parser } from '@/utils/typograf'
import classNames from 'classnames'
import React, { useState } from 'react'
import Divider from '@/components/Divider/Divider'
import styles from './index.module.scss';
import fetcher from '@/utils/fetcher'

function Index({ attributes, news }) {
  const [modalMain, setModalMain] = useState(false);
  const [projectModal, setProjectModal] = useState(null)

  function handleMainModal() {
    setModalMain(true);
  }

  function handleCloseMainModal() {
    setModalMain(false);
  }

  function handleModalProject(index) {
    setProjectModal(index)
  }


  return (
    <>
      <HeaderBanner img={attributes.background} />

      <Directions
        // onClick={handleMainModal}
        title={attributes.name}
        info={attributes.short_info}
        text={attributes.info}
      />

      <Layout>
        <LayoutLeft>
          <div className="h6">Цитата</div>
        </LayoutLeft>
        <LayoutRight className={styles.person} right>
          <Quote>
            <Icon name="marks" />
            <div>
              <div className={classNames('h7')}>
                {typograf(attributes.quote_text_main)}
              </div>
              <Profile name={attributes.author_main.name} info={attributes.author_main.info} className={styles.person_avatar}></Profile>
              {/* <Button>Узнать больше</Button> */}
            </div>
          </Quote>
        </LayoutRight>
      </Layout>

      <Divider className={styles.divider} />

      {attributes.active_projects && (
        <Layout>
          <LayoutLeft>
            <div className="h5">Действующие <br /> проекты ГЧП</div>
          </LayoutLeft>
          <LayoutRight className={styles.projects_right}>
            <div className={styles.projects}>
              {attributes.projects.map((p, i) => (
                <Project
                  className={styles.project}
                  onClick={() => handleModalProject(i)}
                  key={i}
                  {...p}
                  image={p.slide_image}
                />
              ))}
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
          active_page={attributes.quote_author.active_page}
          text={typograf(attributes.quote_text)}>
        </QuoteItem>
      )}

      {attributes.active_banner && (
        <>
          <div className="offset"></div>
          <Example banner={attributes.banner} popup={attributes.info_popup_banner} text={attributes.text_banner} />
        </>
      )}

      {attributes.active_plan && (
        <>
          <div className="offset"></div>
          <Plan plan={attributes.plan} text_plan={attributes.text_plan} />
        </>
      )}

      <NewsEvents news={news} />

      <Modal onClose={handleCloseMainModal} isOpen={modalMain}>
        {parser(attributes.info_popup)}
      </Modal>

      <Modal isOpen={projectModal === 0} onClose={() => handleModalProject(null)}>
        {parser(attributes.projects?.[0]?.info_popup)}
      </Modal>

      <Modal isOpen={projectModal === 1} onClose={() => handleModalProject(null)}>
        {parser(attributes.projects?.[1]?.info_popup)}
      </Modal>

      <Modal isOpen={projectModal === 2} onClose={() => handleModalProject(null)}>
        {parser(attributes.projects?.[2]?.info_popup)}
      </Modal>

      <Modal isOpen={projectModal === 3} onClose={() => handleModalProject(null)}>
        {parser(attributes.projects?.[3]?.info_popup)}
      </Modal>
    </>
  )
}

export default Index

export async function getStaticProps(ctx) {
  const [footer, page, news] = await Promise.all([
    fetcher('api/option/footer', ctx),
    fetcher('api/page/gchp', ctx),
    fetcher('api/news/category/gchp?limit=3', ctx)
  ]);

  page.attributes.quote_author = JSON.parse(page.attributes.quote_author ?? '{}');
  page.attributes.author_main = JSON.parse(page.attributes.author_main ?? '{}');

  return { props: { ...page, news: news.data, footer: footer.attributes }, revalidate: 10 }
}