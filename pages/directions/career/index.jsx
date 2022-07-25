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

function Index() {
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
      <HeaderBanner img='/images/header-career.png' />
      <Directions
        onClick={handleMainModal}
        title="Карьера"
        info="Обучение и карьера: две стороны одной медали"
        button="Перейти на сайт"
        text="ГК «МедИнвестГрупп» уделяет особое внимание развитию образовательного направления. Для молодых специалистов проводятся семинары, конференции, медицинские конкурсы. Группа предоставляет гранты на обучение в ординатуре, стажировки и практику в современных медицинских центрах страны. "
      />


      <Layout>
        <LayoutLeft>

        </LayoutLeft>
        <LayoutRight className={styles.info} right>
          <div className={styles.info_container}>
            <div className={classNames(styles.info_heading, 'h4')}>{typograf(`Работа в ГК «МИГ»`)}</div>
            <p className={styles.info_wrapper}>{typograf(`Группа компаний работает в широком сегменте здравоохранения и медицинской науки. Необходимость привлечения высококлассных специалистов самых различных направлений требует постоянной работы по подготовке и переподготовке врачей, руководителей медицинских учреждений, среднего медицинского персонала. Группа компаний «МедИнвестГрупп» присутствует во многих регионах страны. Специалистам, легким на подъем, это дает новые варианты трудоустройства.`)}</p>
          </div>
        </LayoutRight>
      </Layout>

      <Layout>
        <LayoutLeft>
          <p className={classNames(styles.progress_heading, 'h5')}>Карьера и образование в МИГ</p>
        </LayoutLeft>
        <LayoutRight className={styles.advantages_right_layout}>
          <div className={styles.advantages}>
            <div className={styles.advantages_left}>
              {CAREER[activeButtonAdvant].left.map((e, index) => (
                <Advantages key={index} {...e}></Advantages>
              ))}
            </div>
            <div className={styles.advantages_right}>
              {CAREER[activeButtonAdvant].right?.map((e, index) => (
                <Advantages key={index} {...e}></Advantages>
              ))}
            </div>
          </div>
        </LayoutRight>
      </Layout>

      <Divider />

      <Layout>
        <LayoutLeft>
          <div className={classNames(styles.progress_heading, 'h4')}>Кадровые проекты МИГ</div>
        </LayoutLeft>
        <LayoutRight>
          <div className={styles.projects}>
            {
              ACHIEVEMENTS.map((p, i) => (
                <Advantages
                  key={i}
                  title={p.title}
                  background='#0E3FB5'
                  marginBottom='198px'
                ></Advantages>
              ))
            }
          </div>
        </LayoutRight>
      </Layout>

      <div className="offset"></div>
      <Banner src='/images/banner-career.png' />
      <div className="offset"></div>

      <Layout>
        <LayoutLeft>
          <div className={styles.progress_container}>
            <div className={classNames(styles.progress_heading, 'h5')}>Преимущества и достижения</div>
            <p className={styles.progress_wrapper}>{typograf(`Студенты, ординаторы, молодые специалисты имеют возможность принять участие в образовательных проектах.`)}</p>
          </div>
        </LayoutLeft>
        <LayoutRight>
          <div className={styles.projects}>
            {
              ADVANT.map((p, i) => (
                <Project key={i} title={p.title} >
                  <p className={styles.project_text}>{typograf(p.text)}</p>
                </Project>
              ))
            }
          </div>
        </LayoutRight>
      </Layout>

      <Divider />

      <Layout>
        <LayoutLeft>
          <p className={classNames(styles.partners_heading, 'h4')}>Образовательные партнеры</p>
        </LayoutLeft>
        <LayoutRight>
          <div className={styles.cards}>
            {
              IMG.map((p, i) => (
                <EducationCard key={i} {...p}></EducationCard>
              ))
            }
          </div>
        </LayoutRight>
      </Layout>

      <NewsEvents news={NEWS} />
    </>
  )
}

export default Index