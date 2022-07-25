import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import typograf from '@/utils/typograf';
import Button from '@/components/Button/Button';
import ButtonCircle from '@/components/ButtonCircle/ButtonCircle';
import Icon from '@/components/Icon/Icon';
import Slider from '@/components/Slider/Slider';
import styles from './Directions.module.scss';

function Directions({ title = 'Центры ядерной медицины и лучевой терапии', info = 'Большая федеральная семья центров', text, onClick, button = 'Подробнее'}) {
  return (
    <div className={styles.Directions}>
      <div className={styles.body}>
        <div className={styles.left}>
          <span className={styles.left_next}>Следующий раздел</span>
          <Slider
            effect="fade"
            pagination={{ type: 'fraction' }}
            navigation={{
              prevEl: '.' + styles.prev,
              nextEl: '.' + styles.next,
            }}

            className={styles.slider}
          >
            <Slider.Slide className={styles.slide}>
              <img src="/images/direction-next.jpg" alt="" />
              <span>Клиники МИГ</span>
            </Slider.Slide>
            <Slider.Slide className={styles.slide}>
              <img src="/images/direction-next-2.jpg" alt="" />
              <span>Онкологический кластер</span>
            </Slider.Slide>
            <Slider.Slide className={styles.slide}>
              <img src="/images/direction-next-3.jpg" alt="" />
              <span>Государственно-частное партнерство</span>
            </Slider.Slide>
            <Slider.Prev className={styles.prev}></Slider.Prev>
            <Slider.Next className={styles.next}></Slider.Next>
          </Slider>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            <div className="h3">{typograf(title)}</div>
            <div className="h7">{typograf(info)}</div>
            <p>{typograf(text)}</p>
            <Button onClick={onClick}>{button}</Button>
          </div>
          <div className={styles.socials}>
            <div className={styles.social_header}>Поделиться</div>
            <div className={styles.social_buttons}>
              <ButtonCircle>
                <Icon name='vk'></Icon>
              </ButtonCircle>
              <ButtonCircle>
                <Icon name='telegram'></Icon>
              </ButtonCircle>
              <ButtonCircle>
                <Icon name='ok'></Icon>
              </ButtonCircle>
              <ButtonCircle>
                <Icon name='social_four'></Icon>
              </ButtonCircle>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Directions.propType = {
}

export default React.memo(Directions);
