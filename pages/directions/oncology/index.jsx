import Banner from '@/blocks/Banner/Banner'
import Directions from '@/blocks/Directions/Directions'
import NewsEvents from '@/blocks/NewsEvents/NewsEvents'
import HeaderBanner from '@/components/HeaderBanner/HeaderBanner'
import Modal from '@/components/Modal/Modal'
import { NEWS, ADVANT, ADDITION, BRANDS } from '@/data/oncology'
import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import typograf from '@/utils/typograf'
import classNames from 'classnames'
import React, { useState } from 'react'
import Image from 'next/image'
import QuoteItem from '@/blocks/QuoteItem/QuoteItem'
import Button from '@/components/Button/Button'
import Advantages from '@/components/Advantages/Advantages'
import Partners from '@/blocks/main/Partners/Partners'
import styles from './index.module.scss';

function Index() {

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
      <HeaderBanner img='/images/header-rphp.jpg' />
      <Directions
        title="Онкологический кластер"
        text="Особое внимание в ГК «МИГ» уделяется созданию и поддержке  инфраструктуры полного цикла онкологической помощи от диагностики до передовых методов лечения, реабилитации, динамического наблюдения и поддержки."
      />

      <Layout>
        <LayoutLeft>

        </LayoutLeft>
        <LayoutRight>
          <div className={classNames(styles.info_heading, 'h4')}>От диагностики до реабилитации</div>
          <div className="offset"></div>
          <p className={styles.info_text}>Возможность предоставить полный спектр медицинских услуг в сфере онкологии от диагностики до реабилитации выводит ГК «МедИнвестГрупп» в лидеры среди российских компаний, работающих в этой области.</p>
          <div className={classNames(styles.info_wrapper, 'h6')}>Онкокластер ГК «МИГ» включает в себя:</div>
          <ul className={styles.info_list}>
            <li>Лабораторную диагностику</li>
            <li>Лучевую и радионуклидную диагностику</li>
            <li>Химиотерапию</li>
            <li>Хирургию</li>
            <li>Паллиативную помощь</li>
            <li>Реабилитацию</li>
            <li>Поддерживающую и восстанавливающую терапию</li>
            <li>Клинические исследования и собственное производство радиофармпрепаратов</li>
          </ul>
          <Button>Подробнее</Button>
        </LayoutRight>
      </Layout>

      <Layout>
        <LayoutLeft>
          <div className={classNames(styles.data_heading, 'h4')}>МИГ Онкология в цифрах</div>
          <p className={styles.data_subtitle}>Особое внимание уделяется поддержке инфраструктуры онкокластера для обеспечения полного цикла диагностики и лечения.</p>
        </LayoutLeft>
        <LayoutRight>
          <div className={styles.advantages}>
            <div className={styles.advantages_left}>
              {ADVANT[activeButtonAdvant].left.map((e, index) => (
                <Advantages key={index} {...e}></Advantages>
              ))}
            </div>
            <div className={styles.advantages_right}>
              {ADVANT[activeButtonAdvant].right?.map((e, index) => (
                <Advantages key={index} {...e}></Advantages>
              ))}
            </div>
          </div>
        </LayoutRight>
      </Layout>


      <div className="offset"></div>
      <Banner src='/images/banner-oncology.png' />
      <div className="offset"></div>
      <Partners
        blocks={BRANDS}
        title="Бренды"
        text='Бренды онкологического кластера ГК«МИГ»'
      />
      <Layout>
        <div className={styles.additions}>
          {
            ADDITION.map((e, index) => (
              <Advantages key={index} {...e} ></Advantages>
            ))
          }
        </div>
      </Layout>
      <NewsEvents news={NEWS} />
    </>
  )
}

export default Index