import Banner from '@/blocks/Banner/Banner'
import Directions from '@/blocks/Directions/Directions'
import NewsEvents from '@/blocks/NewsEvents/NewsEvents'
import Button from '@/components/Button/Button'
import EmptyButton from '@/components/buttons/EmptyButton/EmptyButton'
import DirectionsItem from '@/components/DirectionsItem/DirectionsItem'
import Divider from '@/components/Divider/Divider'
import Equipment from '@/components/Equipment/Equipment'
import HeaderBanner from '@/components/HeaderBanner/HeaderBanner'
import Icon from '@/components/Icon/Icon'
import Modal from '@/components/Modal/Modal'
import Profile from '@/components/Profile/Profile'
import Project from '@/components/Project/Project'
import Quote from '@/components/Quote/Quote'
import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import fetcher from '@/utils/fetcher'
import typograf, { parser } from '@/utils/typograf'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './index.module.scss';



function Index({ attributes, map, news }) {
  const [activeButtonMap, setActiveButtonMap] = useState('pet');
  const [modalMain, setModalMain] = useState(false);
  const [directionModal, setDirectionModal] = useState(null);
  const [activeButtonEquip, setActiveButtonEquip] = useState(0);

  function handleMainModal() {
    setModalMain(true);
  }

  function handleCloseMainModal() {
    setModalMain(false);
  }

  function handleMapToggle(type) {
    setActiveButtonMap(type);
  }

  function handleDirectionClose() {
    setDirectionModal(null)
  }

  function handleEquip(index) {
    setActiveButtonEquip(index);
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
        <div className={styles.directions_buttons}>
          <Button link="https://www.pet-net.ru/centers/" target="_blank">PET-NET.RU</Button>
          <Button link="https://oncoart.ru/" target="_blank">ONCOART.RU</Button>
        </div>
      </Directions>
      <Layout>
        <LayoutLeft>
          <div className="h4">Основные <br /> направления</div>
        </LayoutLeft>
        <LayoutRight className={styles.directions_right}>
          {attributes.active_diagnosytic && <DirectionsItem onClick={() => setDirectionModal('dig')} className={styles.direction_item} title={attributes.title_diagnosytic} img={attributes.photo_diagnosytic}></DirectionsItem>}
          {attributes.active_terapy && <DirectionsItem onClick={() => setDirectionModal('ter')} className={styles.direction_item} title={attributes.title_terapy} img={attributes.photo_terapy}></DirectionsItem>}
          {attributes.active_chemistry && <DirectionsItem onClick={() => setDirectionModal('him')} className={styles.direction_item} title={attributes.title_chemistry} img={attributes.photo_chemistry}></DirectionsItem>}
          {attributes.active_radio && <DirectionsItem className={styles.direction_item} link={attributes.link_radio} title={attributes.title_radio} img={attributes.photo_radio}></DirectionsItem>}
        </LayoutRight>
      </Layout>
      <Divider className={styles.divider} />
      {attributes.active_advantages && (
        <Layout className={styles.advantages}>
          <LayoutLeft>
            <div className="h4">Наши <br /> преимущества</div>
          </LayoutLeft>
          <LayoutRight className={styles.projects_right}>
            <div className={styles.projects}>
              {
                attributes.advantages.map((p, i) => (
                  <Project className={styles.project} key={i} title={p.title}  >
                    <p className={styles.projects_text}>{typograf(p.text)}</p>
                  </Project>
                ))
              }
            </div>
          </LayoutRight>
        </Layout>
      )}
      <Layout className={styles.map_container}>
        <LayoutLeft>
          <div className="h4">{typograf(map.name)}</div>
          {/* <div className={styles.filter_buttons}>
            {CENTER_MAPS.map((button, index) => (
              <Button empty key={index} active={activeButtonMap === button.type} onClick={() => handleMapToggle(button.type)}>{button.button}</Button>
            ))}
          </div> */}
        </LayoutLeft>
        <LayoutRight className={styles.map}>
          <div className={styles.map_img}>
            <Image quality={90} className="image-next" layout='fill' src={map.media} alt="" />
          </div>
          {/* TODO ANIMATE */}
        </LayoutRight>
      </Layout>
      {attributes.active_banner && (
        <>
          <div className="offset"></div>
          <Banner src={attributes.banner} />
        </>
      )}

      {attributes.active_equip && (
        <Layout>
          <LayoutLeft>
            <div className="h5">Виды <br /> оборудования</div>
            <div className={styles.filter_buttons}>
              {attributes.equipments.map((button, index) => (
                <Button
                  className={styles.filter_button}
                  empty key={index}
                  active={activeButtonEquip === index}
                  onClick={() => handleEquip(index)}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </LayoutLeft>
          <LayoutRight>
            <div className={styles.equipments}>
              <div className={styles.equipments_left}>
                {attributes.equipments[activeButtonEquip].equipments.filter((e, index) => index % 2 === 0).map((e, index) => (
                  <Equipment key={index} {...e} image={e.equipment}></Equipment>
                ))}
              </div>
              <div className={styles.equipments_right}>
                {attributes.equipments[activeButtonEquip].equipments.filter((e, index) => index % 2 === 1).map((e, index) => (
                  <Equipment key={index} {...e} image={e.equipment}></Equipment>
                ))}
              </div>

              <div className={styles.equipments_mobile}>
                {attributes.equipments[activeButtonEquip].equipments.map((e, index) =>
                  <Equipment key={index} {...e} className={styles.equipment_item} image={e.equipment}></Equipment>
                )}
              </div>
            </div>
          </LayoutRight>
        </Layout>
      )}
      {/* <div className='container'>
        <Divider />
      </div> */}
      <Divider className={styles.divider} />
      <NewsEvents news={news} />

      <Modal onClose={handleCloseMainModal} isOpen={modalMain}>
        {parser(attributes.info_popup)}
      </Modal>

      <Modal isOpen={directionModal === 'dig'} onClose={handleDirectionClose}>
        {parser(attributes.popup_diagnosytic)}
      </Modal>

      <Modal isOpen={directionModal === 'ter'} onClose={handleDirectionClose}>
        {parser(attributes.popup_terapy)}
      </Modal>

      <Modal isOpen={directionModal === 'him'} onClose={handleDirectionClose}>
        {parser(attributes.popup_chemistry)}
      </Modal>
    </>
  )
}

export default Index

export async function getStaticProps(ctx) {
  const [footer, maps, page, news] = await Promise.all([
    fetcher('api/option/footer', ctx),
    fetcher('api/map/center', ctx),
    fetcher('api/page/center', ctx),
    fetcher('api/news/category/yadernaya-medicina?limit=3', ctx)
  ]);

  return { props: { ...page, map: maps.data[0], news: news.data, footer: footer.attributes }, revalidate: 10 }
}