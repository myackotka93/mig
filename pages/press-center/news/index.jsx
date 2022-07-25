import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import Divider from '@/components/Divider/Divider';
import styles from './index.module.scss';
import ButtonCircle from '@/components/ButtonCircle/ButtonCircle';
import Button from '@/components/Button/Button';
import NewsStill from '@/components/NewsStill/NewsStill';
import { NEWS_BUTTON, NEWS_STILL } from '@/data/press';
import React, { useState } from 'react'
import Icon from '@/components/Icon/Icon';
import typograf from '@/utils/typograf';
import classNames from 'classnames';

export default function Home() {

  const [activeButtonNews, setActiveButtonNews] = useState('pet');

  function handleNewsToggle(type) {
    setActiveButtonNews(type);
  }

  return (
    <>
      <div className={styles.layout_haeding}>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.footer}>
              <div className={styles.department}>Ядерная медицина</div>
              <div className={styles.vert_line}></div>
              <div className={styles.date}>16.06.22</div>
            </div>

            <h1 className={classNames(styles.heading, 'h2')}>{typograf('Инвестиционная программа МИГ в регионах Сибири')}</h1>
            <p className={styles.post}>{typograf('Группа компаний «Мединвестгрупп» реализует инвестиционную программу в регионах Сибириобщим объемом около 23 млрд руб.')}</p>
          </div>

          <img src="/images/news1.png" alt="" className={styles.img} />
        </div>
      </div>

      <Layout className={styles.layout_news}>
        <LayoutLeft className={styles.LayoutLeft}>
          <p className={styles.share}>Поделиться</p>
          <div className={styles.circle_group}>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="vk_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="telegram_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="ok_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="dzen_news" />
            </ButtonCircle>
          </div>
        </LayoutLeft>

        <LayoutRight className={styles.LayoutRight}>
          <div className={styles.text}>
            <h4>Всемирный день борьбы против рака</h4>
            <p>{typograf('4 февраля, во Всемирный день борьбы против рака,на торжественном открытии Центра ядерной медициныпо диагностике онкологических заболеваний «ПЭТ-Технолоджи»на площадке Областной клинической больницы, приняли участие Губернатор Владимир Сипягин, президент группы компаний «МедИнвестГрупп» Сергей Нотов, первый заместитель главы региона Сергей Шевченко, руководители органов исполнительной властии структурных подразделений областной администрации, представители Законодательного Собрания, главные врачи ОКБ и Областного клинического онкодиспансера.')}</p>
            <h6>Диагностика онкологических заболеваний методом ПЭТ/КТ</h6>
            <p>{typograf('В новом Центре будут заниматься диагностикой онкологических заболеваний методом ПЭТ/КТ, сочетающим возможности позитронно-эмиссионной и компьютерной томографии, который позволяет оценить структуру и функциональные особенности опухоли на молекулярном уровне. Метод дает возможность обнаружить малейшие опухолевые очаги на ранних стадиях заболеванияи получить трехмерное изображение организма человека с точными данными о локализации и границах новообразований. Полученное изображение позволяет отличить доброкачественное образованиеот злокачественного, уточнить размеры опухоли, определить наличие или отсутствие метастатического процесса в организме пациента.')}</p>
            <p>{typograf('Услугами «ПЭТ-Технолоджи» смогут воспользоваться пациентысо всего региона. Попасть сюда можно по направлению врача – онколога, радио - или химиотерапевта. В перспективе Центр сможет принимать до 6 тысяч пациентов в год. На первоначальном этапе есть договоренность о полутора тысячах исследований – по линии ОМС.')}</p>
            <img src="/images/news/video.png" alt="" />

            <ul>
              <li>Диагностика методом ПЭТ/КТ</li>
              <li>Прием бесплатный по полису ОМС</li>
              <li>6 000 пациентов в год смогут посетить Центр</li>
              <li>1 500 исследований пройдет на первоначальном этапе</li>
            </ul>
          </div>

          <Divider className={styles.divider_big} />

          <div className={styles.circle_group}>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="vk_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="telegram_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="ok_news" />
            </ButtonCircle>
            <ButtonCircle className={styles.circle_button}>
              <Icon name="dzen_news" />
            </ButtonCircle>
          </div>

          <div className={styles.filter_buttons}>
            {NEWS_BUTTON?.map((button, index) => (
              <Button className={styles.button_news} empty key={index} active={activeButtonNews === button.type} onClick={() => handleNewsToggle(button.type)}>{button.button}</Button>
            ))}
          </div>
        </LayoutRight>
      </Layout>

      <Divider />

      <Layout className={styles.layout_still}>
        <LayoutLeft>
          <h6 className={styles.still_news}>Ещё новости</h6>
        </LayoutLeft>

        <LayoutRight>
          <div className={styles.container_news}>
            {NEWS_STILL.map((press, index) => (
              <React.Fragment key={index}>
                <NewsStill {...press}></NewsStill>
                <Divider className={styles.divider} />
              </React.Fragment>
            ))}
          </div>
        </LayoutRight>
      </Layout>
    </>
  )
}

