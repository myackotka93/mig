import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Directions.module.scss';
import Layout from '@/layouts/Layout/Layout';
import Slider from '@/components/Slider/Slider';
import { DIRECTIONS } from '@/data/main';
import typograf from '@/utils/typograf';
import Button from '@/components/Button/Button';
import useSwiperBreakpoint from 'hooks/useSwiperBreakpoint';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';

const directions = {
  'gchp': 'Государственно-частное партнерство',
  'mig': 'Клиники МИГ',
  'oncology': 'Онкологический кластер',
  'center': 'Центры ядерной медицины и лучевой терапии',
  'radio': 'Радиофармацевтическое производство',
  'laboratory': 'Лабораторная диагностика',
  'carier': 'Карьера',
}

function Directions({...attributes}) {
  const swiper = useSwiperBreakpoint('(min-width:750px)');

  return (
    <Layout color="blue" className={styles.directions}>
      <LayoutLeft className={styles.left}>
        <div className="h3">Направления <br /> МИГ</div>
      </LayoutLeft>

      <Slider
        className={styles.directions_list}
        onSwiper={(sw) => swiper.current = sw}
        pagination
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          750: {
            slidesPerView: 1.7
          },
          900: {
            slidesPerView: 1.2
          }
        }}
      >
        <Slider.Slide>
          <div className="h3">Направления <br /> МИГ</div>
        </Slider.Slide>
        {Object.keys(directions).filter(key => attributes[`direction_active_${key}`]).map((key) => (
          <Slider.Slide key={key}>
            <div>
              <div className="h6">{attributes[`direction_title_${key}`]}</div>
              <p>{typograf(attributes[`direction_text_${key}`])}</p>
            </div>
            <Button link={`/directions/${key}`} empty>Узнать больше</Button>
          </Slider.Slide>
        ))}
      </Slider>
    </Layout>
  )
}

Directions.propType = {
}

export default React.memo(Directions);
