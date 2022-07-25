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
import typograf from '@/utils/typograf'
import classNames from 'classnames'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button';
import Advantages from '@/components/Advantages/Advantages'
import Project from '@/components/Project/Project'
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
      <HeaderBanner img='/images/header-laba.png' />
      <Directions
        onClick={handleMainModal}
        title="Лабораторная диагностика"
        info="В основе эффективного лечения лежит точная диагностика"
        text="Для обеспечения собственных многопрофильных медицинских центров ГК «МИГ» построила современную потоковую лабораторию для проведения клинических исследований (ЦКДЛ), работающую по международным стандартам качества, и начала развивать сеть лабораторных офисов под брендом Novascreen."
      />

      {activeButtonNews === 'ckdl' && (
        <Layout>
          <LayoutLeft>

          </LayoutLeft>
          <LayoutRight className={styles.info} right>
            <div className={styles.info_container}>
              <div className={classNames(styles.info_wrapper, 'h4')}>{typograf(`В 2021 году в активах Группы появилась собственная централизованная клинико-диагностическая лаборатория (ЦКДЛ), 
                построенная командой специалистов «с нуля» и сеть удобных медицинских офисов для сбора биоматериала под брендом Novascreen.`)}</div>
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
      )}

{activeButtonNews === 'novascreen' && (
        <Layout>
          <LayoutLeft>

          </LayoutLeft>
          <LayoutRight className={styles.info} right>
            <div className={styles.info_container}>
              <div className={classNames(styles.info_wrapper, 'h4')}>{typograf(`Novascreen — динамично развивающаяся сеть лабораторных офисов, ориентированных на доступность 
                всех видов анализов для пациентов. Сотрудничает с ведущими экспертами по диагностике различных нозологий, биохакингу, генетическим анализам. Благодаря этому 
                диагностические программы от Novascreen всегда актуальны, достоверны, значимы для пациентов. Бренд активно работает с корпоративными клиентами и имеет сильную 
                поддержку франчайзеров.`)}</div>
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
      )}

      {activeButtonNews === 'ckdl' && (
        <Layout>
          <LayoutLeft>
            <div className={styles.progress_container}>
              <div className={classNames(styles.progress_heading, 'h5')}>Преимущества и достижения</div>
              <p className={styles.progress_wrapper}>{typograf(`Централизованная клинико-диагностическая лаборатория на Оршанской — один из крупнейших инвестиционных проектов, реализованныхв сфере здравоохраненияв последние годы.`)}</p>
              <Button>Узнать больше</Button>
            </div>
          </LayoutLeft>
          <LayoutRight className={styles.advantages_right_layout}>
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
      )}

      {activeButtonNews === 'novascreen' && (
        <Layout>
          <LayoutLeft>
            <div className={styles.progress_container}>
              <div className={classNames(styles.progress_heading, 'h5')}>Преимущества и достижения</div>
              <p className={styles.progress_wrapper}>{typograf(`Сеть инновационных медицинских центров, занимающихся персонализированной лабораторной диагностикой и реализующих концепцию мультиофиса с доступом к телемедицинским услугам, возможностью оперативных консультаций и помощи на дому.`)}</p>
              <Button>Перейти на сайт</Button>
            </div>
          </LayoutLeft>
          <LayoutRight>
          <div className={styles.projects}>
              {
                ACHIEVEMENTS.map((p, i) => (

                  <Project key={i} title={p.title} >
                    <p className={styles.project_text}>{typograf(p.text)}</p>
                  </Project>
                ))
              }
            </div>
          </LayoutRight>
        </Layout>
      )}

      {activeButtonNews === 'ckdl' && (
        <QuoteItem
          name='Кривова Ольга Петровна'
          post='Вице-президент ГК «МедИнвестГрупп»'
          img='/images/quote/quote2.png'
          link='/team/8'
          text='Централизированная клинико-диагностическая лаборатория на Оршанской — образецсовременного подхода 
            к управлению процессом исследований и взаимодействия между лабораторией и медицинскими учреждениями.'>
        </QuoteItem>
      )}

      {activeButtonNews === 'novascreen' && (
        <QuoteItem
          name='Нам Елена Елисеевна'
          post='Старший вице-президент ГК «МедИнвестГрупп»'
          img='/images/quote/quote3.png'
          link='/team/9'
          text='Научные достижения позволяют нам понимать про состояние нашего здоровья все больше и точнее. 
            Сегодня по био образцу мы можем узнать о себе то, что еще вчера было на грани научной фантастики. 
            Мы внедряем научные достижения и делаем их популярными. Наша задача — вырастить культуру ответственного отношения к себе.'>
        </QuoteItem>
      )}

      <div className="offset"></div>
      <Banner src='/images/banner-laba.jpg' />
      <div className="offset"></div>

      <NewsEvents news={NEWS} />

      <Modal onClose={handleCloseMainModal} isOpen={modalMain}>
        <div className="h4">Лабораторная диагностика</div>
        <div className="offset"></div>
        <p>ЦКДЛ обслуживает целый комплекс крупных медицинских учреждений города Москвы и Московской области, как частных, так и государственных, и постоянно наращивает свои объемы.</p>
        <div className="offset"></div>
        <p>Команда проектных менеджеров готова тиражировать опыт создания подобных лабораторий в других регионах России “под ключ” - от исследования текущего состояния лабораторной службы до наиболее эффективной модели ее развития и определения оптимальных параметров  для баланса плановых и экстренных исследований, формирования и обучения команды специалистов, сопровождение процессов цифровизации и создания эффективной логистической службы.</p>
        <div className="offset"></div>
        <p>Специалисты ЦКДЛ имеют опыт развития системы экстренных лабораторных исследований при больницах и стационарах в режиме 25/7. Срочные исследования - это второе крыло, без которого невозможно развивать современную лабораторную службу.</p>
        <div className="offset"></div>
        <p>
          Уже сегодня в управлении ЦКДЛ на Оршанской уже находится более десяти экспресс-лабораторий. Их количество и объемы исследований увеличиваются постоянно. Главное, что дает ЦКДЛ экспресс-диагностике - это единое методологическое сопровождение, контроль качества, доступ клиницистов к консультациям от лучших методистов лабораторной службы, единые высокие стандарты проведения исследований и их расшифровки.
        </p>
        <div className="offset"></div>
        <p>
          ГК МИГ является членом Ассоциации “Федерация лабораторной медицины” - крупнейшем экспертном сообществе страны. Специалисты МИГ активно участвуют в работе комитетов Ассоциации, инициируют проведение выездных заседаний, занимаются научными и методическими изысканиями.
        </p>
        <div className="offset"></div>
        <p>
          Офисы NovaScreen - сеть инновационных медицинских центров, занимающихся персонализированной клинической лабораторной диагностикой в шаговой доступности от дома, реализующие концепцию мультиофиса - с доступом к услугам телемедицины, возможностью оперативных консультаций, помощи на дому.
        </p>
        <div className="offset"></div>
        <p>
          Пациенто Центричность лежит в философии развития бренда Novascreen, а наличие собственной лабораторной базы, взаимодействие с лучшими экспертами страны по вопросам биохакинга, реабилитации, онкологии, педиатрии, неврологии и многих других позволяют формировать  и предлагать пациентам лучшие комплексы по мониторингу за состоянием организма.
        </p>
        <div className="offset"></div>
        <p>
          Особый подход к корпоративным клиентам позволяет постоянно расширять партнерскую сеть, оптимизировать условия сотрудничества. К услугам корпоративных клиентов - служба корпоративного сервиса и личный менеджер.
        </p>
        <div className="offset"></div>
        <p>
          Для франшизы - полный пакет услуг от предварительного расчета бизнес-модели, доп перманентного PR-сопровождения, юридического и финансового консалтинга.
        </p>
      </Modal>
    </>
  )
}

export default Index