import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Footer.module.scss';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import Link from 'next/link';
import typograf from '@/utils/typograf';

function Footer({ data = {} }) {

  const main_links = useMemo(() => JSON.parse(data.main_links ?? '[]'), [data]);
  const second_links = useMemo(() => JSON.parse(data.second_links ?? '[]'), [data]);

  return (
    <div className={styles.Footer}>
      <Layout className={styles.Layout}>
        <LayoutLeft className={styles.LayoutLeft}>
          <Link href="/">
            <a className={styles.logo}>
              <img className={styles.img} src="/images/logo_footer.svg" alt="" />
            </a>
          </Link>
        </LayoutLeft>

        <LayoutRight light className={styles.info}>
          <div className={styles.two_columns}>
            <div className={styles.column_heading}>
              {main_links.filter(l => l?.attributes?.active).map(l => (
                <Link key={l.key} href={l.attributes.link} prefetch={false}>
                  <a className={styles.link_heading}>{l.attributes.name}</a>
                </Link>
              ))}
            </div>

            <div className={styles.column_directions}>
              <h3 className={styles.directions_heading}>Направления</h3>
              {second_links.filter(l => l?.attributes?.active).map(l => (
                <Link key={l.key} href={l.attributes.link} prefetch={false}>
                  <a className={styles.link_directions}>{l.attributes.name}</a>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.contacts}>
            <div className={styles.phone}>
              <p className={styles.heading}>Телефон</p>
              <a className={styles.number} href="tel:+74957084232">+7 495 708-42-32</a>
            </div>

            <div className={styles.email}>
              <p className={styles.heading}>E-mail</p>
              <a className={styles.number} href="mailto:welcome@medinvest-group.ru">welcome@medinvest-group.ru</a>
            </div>

            <div className={styles.social}>
              <p className={styles.heading}>Соц. сети</p>
              <div className={styles.icons}>
                <img className={styles.telegram} src="/images/telegram.svg" alt=""></img>
                <img className={styles.vk} src="/images/vk.png" alt=""></img>
              </div>
            </div>
          </div>

          <div className={styles.discriptions}>
            <p className={styles.text}>{typograf(data.copy)}</p>
          </div>
        </LayoutRight>
      </Layout>
    </div>
  )
}

Footer.propType = {
}

export default React.memo(Footer);
