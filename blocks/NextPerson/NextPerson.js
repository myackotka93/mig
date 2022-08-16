import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './NextPerson.module.scss';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import ButtonCircle from '@/components/ButtonCircle/ButtonCircle';
import Icon from '@/components/Icon/Icon';
import Slider from '@/components/Slider/Slider';
import typograf from '@/utils/typograf';
import HtmlParser from 'html-react-parser';
import Link from 'next/link';

function NextPerson({ title = 'Наша команда', currentPersonId, team = [] }) {
  return (
    <div className={styles.NextPerson}>
      <Layout className={styles.Layout}>
        <LayoutLeft className={styles.LayoutLeft}>
          <h6 className={styles.heading}>{title}</h6>


          <div className={styles.buttons}>
            <Slider.Prev className={classNames(styles.prev)} />
            <Slider.Next className={classNames(styles.next)} />
          </div>
        </LayoutLeft>

        <LayoutRight light className={styles.LayoutRight}>
          <Slider
            effect="fade"
            navigation={{
              prevEl: '.' + styles.prev,
              nextEl: '.' + styles.next
            }}
            className={styles.slider}
          >
            {team.filter(person => currentPersonId === null || currentPersonId !== person.id).map((person, id) => (
              <Slider.Slide key={id} className={styles.wrapper_column}>
                <div className={styles.name}>{person.name}</div>
                <p className={styles.post}>{HtmlParser(typograf(person.info))}</p>
                {person.active_page === 1 && (
                  <Link href={"/team/" + person.id}>
                    <a className={styles.button_group}>
                      <ButtonCircle empty className={styles.button}>
                        <Icon name="vector" />
                      </ButtonCircle>
                      <span className={styles.text}>
                        Узнать больше
                      </span>
                    </a>
                  </Link>
                )}
                <img className={styles.img} src={person.small_image} alt="" />
              </Slider.Slide>
            ))}
          </Slider>
        </LayoutRight>
      </Layout>
    </div>
  )
}

NextPerson.propType = {
}

export default React.memo(NextPerson);
