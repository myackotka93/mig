import Banner from '@/blocks/Banner/Banner'
import NextPerson from '@/blocks/NextPerson/NextPerson'
import BigCard from '@/components/BigCard/BigCard'
import CardNews from '@/components/CardNews/CardNews'
import Divider from '@/components/Divider/Divider'
import Slider from '@/components/Slider/Slider'
import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import Button from '@/components/Button/Button'
import typograf from '@/utils/typograf'
import Head from 'next/head'
import styles from './index.module.scss';
import EmptyButton from '@/components/buttons/EmptyButton/EmptyButton'
import { useEffect, useMemo, useState } from 'react'
import { DIRECTIONS, ecosystem, MAIN_MAPS, NEWS, PARTNERS } from '@/data/main'
import PlateButton from '@/components/buttons/PlateButton/PlateButton'
import Partners from '@/blocks/main/Partners/Partners'
import Promo from '@/blocks/Promo/Promo'
import Modal from '@/components/Modal/Modal'
import Icon from '@/components/Icon/Icon'
import IconNew from '@/components/IconNew/IconNew'
import Example from '@/blocks/Example/Example'
import Link from 'next/link';
import Directions from '@/blocks/main/Directions/Directions'
import Ecosystem from '@/blocks/main/Ecosystem/Ecosystem'
import Image from 'next/image'
import fetcher from '@/utils/fetcher'

export default function Home({ maps = [], stories = [], partners = [], team = [] }) {
  const [activeButtonMap, setActiveButtonMap] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setActiveButtonMap(maps[0] ?? {});
  }, [maps])


  function handleMapToggle(type) {
    setActiveButtonMap(type);
  }

  function handleClose() {
    setModal(false);
  }

  function handleOpen() {
    setModal(true);
  }

  return (
    <main>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Promo stories={stories} />
      <Layout className={styles.news_big_global}>
        <LayoutLeft className={styles.news_big_left}>
          <div className="h3">О нас</div>
        </LayoutLeft>
        <LayoutRight className={styles.news_big_right}>
          <BigCard logo="marks" />
        </LayoutRight>
      </Layout>

      <Layout className={styles.info_layout}>
        <LayoutLeft className={styles.info_left}>
          <Link href="/">
            <a className={styles.logo}>
              <img className={styles.img} src="/images/logo_info.svg" alt="" />
            </a>
          </Link>
        </LayoutLeft>
        <LayoutRight className={styles.info_right}>
          <h2 className={styles.info_heading}>О Группе компаний “МИГ”</h2>
          <p className={styles.info_text}>{typograf(' МИГ занимает пятое место в рейтинге Аналитического центра Vademecum «ТОП 200 частных многопрофильных клиник России».')}</p>
          <p className={styles.info_caption}>{typograf('Государство, благодаря партнерству, получает существенные инвестиционные вливания, и вместе с проектами в государственную систему здравоохранения приходят новые компетенции.')}</p>
          {/* <Button>Подробнее</Button> */}
          <Button className={styles.Button} onClick={handleOpen}>Подробнее</Button>
        </LayoutRight>
      </Layout>

      <Directions></Directions>

      <div className="offset"></div>

      <Ecosystem></Ecosystem>
      <div className="offset"></div>
      <Layout className={styles.map_container}>
        <LayoutLeft className={styles.map_left}>
          <div className={styles.heading_map}>В фокусе — <br /> регионы</div>
          <div className={styles.filter_buttons}>
            {maps.map((button, index) => (
              <Button
                className={styles.button_map}
                empty
                key={button.id}
                active={activeButtonMap.id === button.id}
                onClick={() => handleMapToggle(button)}
              >
                {button.name}
              </Button>
            ))}
          </div>
        </LayoutLeft>
        <LayoutRight className={styles.map}>
          <div className={styles.map_img}>
            {activeButtonMap.media && <Image quality={90} className="image-next" layout='fill' src={activeButtonMap.media} alt="" />}
          </div>
          {/* TODO ANIMATE */}
        </LayoutRight>
      </Layout>
      <div className="offset"></div>
      <NextPerson team={team} title="Наша команда" />
      <Partners
        blocks={partners}
        title="Партнеры"
        text='Сила Группы и в наших партнерах: крупнейших в России производителей лекарственных препаратов, поставщиков лучшего медицинского оборудования, экспертовпо проектированию и строительству современных медицинских центров, лидеровв юридическом и финансовом консалтинге.'
      />

      <Divider className={styles.divider_big_last}></Divider>

      <Layout className={styles.news}>
        <LayoutLeft className={styles.news_left}>
          <div className="h3">Новости <br /> и события</div>
          <Button link="https://medinvest-group.ru/news/" target="_blank" className={styles.news_button}>Все новости</Button>
        </LayoutLeft>
        <LayoutRight className={styles.news_right}>
          <div className={styles.news_slider_cont}>
            <Slider
              className={styles.news_slider}
              spaceBetween={-1}
              pagination
              breakpoints={{
                320: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                900: { slidesPerView: 1.5 },
                1200: { slidesPerView: 2.3 },
                1500: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: '.' + styles.prev,
                nextEl: '.' + styles.next
              }}
            >
              {
                NEWS.map((n, i) => (
                  <Slider.Slide key={i}>
                    <CardNews {...n} />
                  </Slider.Slide>
                ))
              }
            </Slider>

            <Slider.Prev className={styles.prev} />
            <Slider.Next className={styles.next} />
          </div>

        </LayoutRight>
      </Layout>


      <Modal isOpen={modal} onClose={handleClose}>
        <img src="/images/mig-modal.jpg" className={styles.modal_header} alt="" />
        <div className="offset"></div>
        <div className="h3">О Группе компаний “МИГ”</div>
        <div className="offset"></div>
        <p>«МедИнвестГрупп» инвестирует в проекты ядерной медицины, производство радиофармпрепаратов, клинические исследования, многопрофильные клиники и клинико-диагностические центры в Москве и регионах России. </p>
        <p>Большое внимание компания уделяет созданию инфраструктуры полного цикла для диагностики и лечения онкологических заболеваний, а также реабилитации онкологических пациентов, внедрению передовых методик поддерживающей и восстановительной терапии.</p>
        <div className="big-offset"></div>
        <div className="h5">Федеральная семья</div>
        <div className="offset"></div>
        <p>
          В портфель компании входят федеральная семья центров ядерной медицины «ПЭТ-Технолоджи» с центрами производства радиофармпрепаратов,, три московские многопрофильные клиники «К+31», авторский проект академика Константина Лядова – «Клиники Лядова», медицинский центр Gamma Clinic в Обнинске, собственный лабораторный клинико-диагностический комплекс мощностью 20 млн. исследований в год в г. Москва с быстро растущей сетью лабораторных офисов под брендом NovaScreen. В 2021 году в Группе была создана специальная контрактно-исследовательская организация “МИГ. Исследования” с уникальным набором сервисов и технологических решений для вывода препаратов на рынок.
        </p>
        <div className="big-offset"></div>
        <div className="h5">Экосистема</div>
        <div className="offset"></div>
        <img src="/images/mig-scheme.png" alt="" />
        <div className="big-offset"></div>
        <div className="h5">
          МИГ занимает пятое место в рейтинге Аналитического центра Vademecum «ТОП 200 частных многопрофильных клиник России».
        </div>
        <div className="offset"></div>
        <p>
          В 2022 году Группа усилит свое направление многопрофильных клиник, открыв три региональных медицинских центра с сильной онкологической составляющей в Ростове-на-Дону, Калининграде и Новосибирске под брендом “МИГ.КЛИНИКА”.
        </p>
        <p>
          В ядерной медицине Группой создана целая отрасль ПЭТ\КТ диагностики, позволяющая проводить высокоточную диагностику методом ПЭТ\КТ в 25 регионах России более чем 150 тысячам пациентов в год, увеличив таким образом общий объем исследований по стране в пять раз.
        </p>
        <p>
          В пятиэтажном здании площадью 50 тыс. м2 будут располагаться: амбулаторно-поликлинический комплекс со всем перечнем специализаций и собственным чекап-центром, детская поликлиника, взрослый и детский стационары с диагностическим центром полного цикла, родильный дом
          на 22 койки и 4 родильных зала. Кроме того, на базе клиники будет работать центр клинических исследований лекарственных препаратов. Ежегодно медучреждение сможет принять более 200 тыс. пациентов.
        </p>
        <p>
          В ядерной медицине Группой создана целая отрасль ПЭТ\КТ диагностики, позволяющая проводить высокоточную диагностику методом ПЭТ\КТ в 25 регионах России более чем 150 тысячам пациентов в год, увеличив таким образом общий объем исследований по стране в пять раз.
        </p>
        <p>
          В 2020 году выручка ГК составила 12,3 млрд рублей – это на 49% больше, чем в предыдущем году.
        </p>
        <p>
          Сейчас ГК «МедИнвестГрупп» имеет успешный опыт реализации ГЧП проектов. В частности, проект создания онкорадиологических центров ядерной медицины в подмосковных Балашихе и Подольске получил международное признание - был отмечен весной этого года специальной премией ООН.
        </p>
        <p>
          В настоящее время в стадии разработки и реализации находится 10 ГЧП-проектов в разных регионах с общим объемом инвестиций около 110 млрд руб.
        </p>
        <p>
          Эксперты МИГ участвуют в разработке и реализации Концепции развития здравоохранения Российской Федерации до 2030 г., федеральных и региональных  программах, предусматривающих повышение эффективности расходов в сфере здравоохранения, развитию и сохранению кадров, и, видят одной из своих задач передачу лучших практик в регионы России.
        </p>
        <p>
          В медицинских центрах ГК МИГ трудится почти 5000 специалистов, для которых созданы условия для постоянного профессионального роста, повышения квалификации, развития soft-skills и реализации управленческих амбиций.
        </p>
        <p>
          Работа с кадрами в ГК «МИГ» начинается даже не с рабочего места, а со студенческой скамьи — программы бесплатной ординатуры, конкурсы для студентов, лектории и специализированные курсы — все это часть большой образовательной программы ГК «МИГ», реализуемой в регионах вместе с ведущими медицинскими учебными заведениями.
        </p>
      </Modal>
    </main >
  )
}


export async function getStaticProps(ctx) {
  // const team = await fetcher('api/team', ctx);
  // const maps = await fetcher('api/maps', ctx);

  const [partners, maps, stories, team] = await Promise.all([
    fetcher('api/partner', ctx),
    fetcher('api/map/main', ctx),
    fetcher('api/story', ctx),
    fetcher('api/team/all', ctx),

  ])

  console.log('get index')

  return {
    props: {
      partners: partners.data,
      maps: maps.data,
      stories: stories.data,
      team: team.data
    }
  }

  // return { props: { ...props} }
}