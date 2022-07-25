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
import { ADVANTAGES, CENTER_MAPS, EQUIP, NEWS } from '@/data/center'
import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import typograf from '@/utils/typograf'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './index.module.scss';


function Index() {
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
      <HeaderBanner />
      <Directions
        onClick={handleMainModal}
        text="В состав Группы входит федеральная сеть высокотехнологичных Центров ядерной медицины «ПЭТ-Технолоджи», сила которой —передовое оборудование премиум-класса, собственный референс-центр и уникальная система контроля качества расшифровки результатов с участием ведущих специалистов федерального уровня. "
      />
      <Layout>
        <LayoutLeft>
          <div className="h4">Основные <br /> направления</div>
        </LayoutLeft>
        <LayoutRight>
          <DirectionsItem onClick={() => setDirectionModal('dig')} className={styles.direction_item} title='Диагностика' img="/images/direction.jpg"></DirectionsItem>
          <DirectionsItem onClick={() => setDirectionModal('ter')} className={styles.direction_item} title='Лучевая и химиотерапия'></DirectionsItem>
          <DirectionsItem onClick={() => setDirectionModal('him')} className={styles.direction_item} title='Химиотерапия' img="/images/direction.jpg"></DirectionsItem>
          <DirectionsItem className={styles.direction_item} title='Радиофармпроизводство '></DirectionsItem>
        </LayoutRight>
      </Layout>
      <Layout className={styles.advantages}>
        <LayoutLeft>
          <div className="h4">Наши <br /> преимущества</div>
        </LayoutLeft>
        <LayoutRight>
          <div className={styles.projects}>
            {
              ADVANTAGES.map((p, i) => (

                <Project key={i} title={p.title}  >
                  <p>{typograf(p.text)}</p>
                </Project>
              ))
            }
          </div>
          {/* <ul>
            <li>Работа в системе ОМС</li>
            <li>Оборудование премиум-класса</li>
            <li>Собственное радиофармацевтическое производство</li>
            <li>Контроль качества диагностики — собственный референс-центр</li>
            <li>Сильная команда профессионалов</li>
            <li>Индивидуальный маршрут диагностики и лечения для каждого пациента</li>
          </ul> */}
        </LayoutRight>
      </Layout>
      <div className="offset"></div>
      <Layout className={styles.map_container}>
        <LayoutLeft>
          <div className="h3">В фокусе — <br /> регионы</div>
          <div className={styles.filter_buttons}>
            {CENTER_MAPS.map((button, index) => (
              <Button empty key={index} active={activeButtonMap === button.type} onClick={() => handleMapToggle(button.type)}>{button.button}</Button>
            ))}
          </div>
        </LayoutLeft>
        <LayoutRight className={styles.map}>
          <div className={styles.map_img}>
            <Image quality={90} className="image-next" layout='fill' src={`/images/map/${activeButtonMap}.png`} alt="" />
          </div>
          {/* TODO ANIMATE */}
        </LayoutRight>
      </Layout>
      <div className="offset"></div>
      <Banner src="/images/banner-center.jpg" />
      {/* <div className="offset"></div> */}
      <Layout>
        <LayoutLeft>
          <div className="h5">Виды <br /> оборудования</div>
          <div className={styles.filter_buttons}>
            {EQUIP.map((button, index) => (
              <Button empty key={index} active={activeButtonEquip === index} onClick={() => handleEquip(index)}>{button.button}</Button>
            ))}
          </div>
        </LayoutLeft>
        <LayoutRight>
          <div className={styles.equipments}>
            <div className={styles.equipments_left}>
              {EQUIP[activeButtonEquip].left?.map((e, index) => (
                <Equipment key={index} {...e}></Equipment>
              ))}
            </div>
            <div className={styles.equipments_right}>
              {EQUIP[activeButtonEquip].right?.map((e, index) => (
                <Equipment key={index} {...e}></Equipment>
              ))}
            </div>
          </div>
        </LayoutRight>
      </Layout>
      {/* <div className='container'>
        <Divider />
      </div> */}
      <NewsEvents news={NEWS} />

      <Modal onClose={handleCloseMainModal} isOpen={modalMain}>
        <div className="h3">Центры ядерной медицины ПЭТ-Технолоджи и лучевой терапии</div>
        <div className="offset"></div>
        <p>Это большая федеральная семья центров, являющихся частью экосистемы ГК “МИГ” и обеспечивающих выполнение государственной задачи оказания высокотехнологичной онкологической помощи в регионах России по ОМС. Каждый центр глубоко интегрирован в систему здравоохранения региона, пациенты получают направления на обследования и лечение от лечащих врачей-онкологов в рамках квот, выделяемых региональными органами власти.</p>
        <p>В 2018 году, когда бренд ПЭТ-Технолоджи вошел в ГК “МИГ”, в 12 субъектах РФ имелось 14 центров, а количество исследований в год - 50 тысяч.
          На начало 2-го квартала 2022 года в семью вошли уже 29 центров в 25 регионах России, а количество исследований превысило 150 тысяч. Открытия новых центров продолжаются практически каждый месяц.
          По сути в России благодаря деятельности ГК “МИГ” создана новая медицинская отрасль, которая вывела диагностики онкозаболеваний на качественно иной уровень.
        </p>
        <p>
          В 2018 году, когда бренд ПЭТ-Технолоджи вошел в ГК “МИГ”, в 12 субъектах РФ имелось 14 центров, а количество исследований в год - 50 тысяч.
        </p>
        <p>На начало 2-го квартала 2022 года в семью вошли уже 29 центров в 25 регионах России, а количество исследований превысило 150 тысяч. Открытия новых центров продолжаются практически каждый месяц.  </p>
        <p>
          По сути в России благодаря деятельности ГК “МИГ” создана новая медицинская отрасль, которая вывела диагностики онкозаболеваний на качественно иной уровень.
        </p>
        <p>
          Медцентры ГК “МИГ” оснащены линейными ускорителями последнего поколения, которые обеспечивают сверхвысокую точность облучения и рекордно высокую скорость работы без потери качества. Всё это позволяет лечить большой поток пациентов, нуждающихся в помощи. Вероятность отклонения пучка ионизирующего излучения – не более 0,75 мм от границы опухоли. Положение пациента во время сеанса облучения контролируется с интервалом 10 миллисекунд. При этом методе лечения здоровые ткани практически не затрагиваются, что сводит к минимуму его негативные последствия.
        </p>
        <img src="/images/center-modal.jpg" alt="" />
        <div className="big-offset"></div>
        <div className="h5">Основные направления деятельности Центров:</div>
        <div className="offset"></div>
        <div className="h6">Диагностика</div>
        <div className="offset"></div>
        <ul>
          <li>ПЭТ\КТ диагностика онкопациентов (все регионы присутствия)</li>
          <li>ПЭТ\КТ диагностика кардиопациентов (г. Уфа, Башкирия)</li>
          <li>МРТ, ОФЭКТ\КТ (г. Балашиха и г.Подольск, Московская область)</li>
        </ul>
        <div className="offset"></div>
        <div className="h6">Лечение онкопациентов:</div>
        <div className="offset"></div>
        <ul>
          <li>
            КиберНож (г. Уфа, Башкирия)
          </li>
          <li>Гамма-нож (г. Обнинск, Калужская область)</li>
          <li>Лучевая терапия на линейный ускорителях - в центрах ПЭТ-Технололджи в Балашихе, Нижнем Новгороде, Новосибирске, Перми, Подольске и Уфе</li>
          <li>Химиотерапия и химиолучевая терапия (г. Балашиха и г.Подольск, Московская область, г. Уфа, Башкирия, г. Ростов-на-Дону, г. Самара, г. Ярославль.</li>
        </ul>
        <div className="offset"></div>
        <img src="/images/center-modal-2.jpg" alt="" />
        <div className="big-offset"></div>
        <div className="h6">Производство и доставка радиофармпрепаратов:</div>
        <div className="offset"></div>
        <p>Циклотронно-радиохимический комплексы в г. Балашиха, Московская область и г. Елец, г. Уфа и Ставрополь</p>
        <div className="h6">Качественные характеристики Центров: </div>
        <div className="offset"></div>
        <p>Передовое оборудование премиум-класса, собственный референс центр и уникальная система контроля качества расшифровки результатов с участием сильнейших специалистов федерального уровня.</p>
        <p>Надежная логистическая  и производственная база, обеспечивающая все центры качественными радиофармпрепаратами.</p>
        <p>Система постоянного образовательного процесса, повышения квалификации для медицинского персонала.</p>
        <p>Традиции эффективного сотрудничества с докторами, направляющими своих пациентов на ПЭТ/КТ диагностику, что позволяет максимально точно и персонифицировано интерпретировать полученные результаты, назначить точное лечение, а затем совместными усилиями контролировать ход его проведения.   </p>
        <p>Возможность получить “второе мнение” по расшифровке результатов ПЭТ/КТ, КТ, МРТ, если обследование проводилось в ином центре с иными стандартами качества. </p>
        <p>Возможность получения дополнительного заключения от группы экспертов-онкологов федерального уровня для уточнения диагноза и схемы лечения.</p>
        <p>Возможность проведения химиотерапии без очередей и ожидания поступления препаратов, быстрый старт начала лечения. препаратов, быстрый старт начала лечения. </p>
      </Modal>

      <Modal isOpen={directionModal === 'dig'} onClose={handleDirectionClose}>
        <div className="h5">Диагностика</div>
        <div className="offset"></div>
        <ul>
          <li>ПЭТ\КТ диагностика онкопациентов (в 24 из 27 регионов присутствия)</li>
          <li>ПЭТ\КТ диагностика кардиопациентов (г. Уфа, Башкирия)</li>
          <li>МРТ (г. Балашиха, г.Подольск, г.Пермь, г.Ставрополь)</li>
          <li>ОФЭКТ\КТ (г. Балашиха и г.Подольск)</li>
          <li>КТ (г. Балашиха, г. Подольск, г.Уфа)</li>
        </ul>
      </Modal>

      <Modal isOpen={directionModal === 'ter'} onClose={handleDirectionClose}>
        <div className="h5">Лучевая и химиотерапия</div>
        <div className="offset"></div>
        <ul>
          <li>КиберНож (г. Уфа, Башкирия)</li>
          <li>Гамма-нож (г. Обнинск, Калужская область)</li>
          <li>Лучевая терапия на линейных ускорителях — в центрах ПЭТ-Технолоджи в Балашихе, Нижнем Новгороде, Новосибирске, Перми, Подольске, Уфе, Москве (в клинике К+31 «Запад»), в том числе с применением метода химиолучевой терапии</li>
        </ul>
      </Modal>

      <Modal isOpen={directionModal === 'him'} onClose={handleDirectionClose}>
        <div className="h5">Химиотерапия</div>
        <div className="offset"></div>
        <p>Химиотерапия — это доступ к полному спектру химиопрепаратов, быстрый старт, команды высококлассных специалистов и возможность проходить лечение в комфортных условиях в разных регионах России.</p>
        <p>Химиотерапия  доступна в онкорадиологическом центре в  Балашихе, в центре ядерной медицины в  Уфе и в многопрофильной клинике  К+31 “Запад” в  Москве.</p>
        {/* <div className="offset"></div> */}
        {/* <ul>
          <li>Химиотерапия  доступна в онкорадиологическом центре в  Балашихе, в центре ядерной медицины в  Уфе и в многопрофильной клинике  К+31 “Запад” в  Москве. Химиолучевая терапия — комбинированный метод лечения отдельных видов онкозаболеваний, когда оперативное вмешательство по тем или иным причинам невозможно.</li>
          <li>Химиолучевая терапия успешно проводятся пациентам наших центров в Балашихе, Подольске, Уфе, Перми, Нижнем Новгороде, Омске, Новосибирске, Москве (К+31 “Запад”). Благодаря эксклюзивному партнерству с лидерами производства фармацевтических и биофармацевтических препаратов нашим пациентам доступная вся линейка медикаментов для терапии любой сложности - химиотерапии, таргетной, гормональной, иммунотерапии. </li>
        </ul> */}
      </Modal>
    </>
  )
}

export default Index