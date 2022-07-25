import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Partners.module.scss';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import typograf from '@/utils/typograf';
import Partner from '@/components/Partner/Partner';
import PlateButton from '@/components/buttons/PlateButton/PlateButton';
import Slider from '@/components/Slider/Slider'
import { PARTNERS } from '@/data/main';
import useSwiperBreakpoint from 'hooks/useSwiperBreakpoint';

function Partners({ title, text, blocks }) {
  const swiper = useSwiperBreakpoint('(min-width:1100px)');

  return (
    <Layout>
      <LayoutLeft className={styles.left}>
        <div className="h3">{title}</div>
        <p className={styles.partners_text}>
          {typograf(text)}
        </p>
      </LayoutLeft>
      <LayoutRight className={styles.partners}>
        <Slider
          className={styles.partners_blocks}
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
          {blocks.map((p, i) => {
            return (
              <Slider.Slide key={i}>
                <Partner {...p} className={styles.partner} />
              </Slider.Slide>
            )
          })}
        </Slider>
      </LayoutRight>
    </Layout>
  )
}

Partners.propType = {
}

export default React.memo(Partners);
