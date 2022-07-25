import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { forwardRef } from 'react';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import Icon from '../Icon/Icon';
import { Navigation, Pagination, EffectFade } from 'swiper';

function Slider({ className, navigation = false, children, ...args }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      navigation={navigation}
      className={classNames(styles.Slider, className)}
      effect="slide"
      {...args}
    >
      {children}
    </Swiper>
  )
}

const Prev = forwardRef(({ className }, ref) => {
  return (
    <ButtonCircle className={classNames(styles.prev, className)} ref={ref}>
      <Icon name="left" />
    </ButtonCircle>
  )
})

const Next = forwardRef(({ className }, ref) => {
  return (
    <ButtonCircle className={classNames(styles.next, className)} ref={ref}>
      <Icon name="right" />
    </ButtonCircle>
  )
});

const Slide = forwardRef(({ className, children }, ref) => {
  return (
    <SwiperSlide className={className} ref={ref}>
      {children}
    </SwiperSlide>
  )
})

Swiper.propType = {}

const ExportSlider = React.memo(Slider);

Prev.displayName = 'Prev';
Next.displayName = 'Next';
Slide.displayName = 'SwiperSlide';

ExportSlider.Prev = React.memo(Prev);
ExportSlider.Next = React.memo(Next);
ExportSlider.Slide = React.memo(Slide);
ExportSlider.Slide.displayName = 'SwiperSlide';

ExportSlider.displayName = 'Slider'

export default ExportSlider;