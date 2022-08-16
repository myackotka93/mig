import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Ecosystem.module.scss';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import EmptyButton from '@/components/buttons/EmptyButton/EmptyButton';
// import { ecosystem } from '@/data/main';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import Divider from '@/components/Divider/Divider';
import PlateButton from '@/components/buttons/PlateButton/PlateButton';
import IconNew from '@/components/IconNew/IconNew';
import typograf from '@/utils/typograf';

function Ecosystem({ ecosystem }) {
  const [activeCategoryCompany, setActiveCategoryCompany] = useState(0);
  const [activeCompany, setActiveCompany] = useState(0);

  const category = useMemo(() => (ecosystem[activeCategoryCompany] ?? {}), [ecosystem, activeCategoryCompany]);
  const company = useMemo(() => (category.ecosystem?.[activeCompany] ?? {}), [category, activeCompany]);

  function handleCategoryCompany(index) {
    setActiveCategoryCompany(index);
    setActiveCompany(0);
  }

  function handleCompany(index) {
    setActiveCompany(index);
  }

  return (
    <Layout color="blue" className={styles.company}>
      <LayoutLeft className={styles.company_left}>
        <div className="h3">Экосистема <br /> МИГ</div>
        <div className={styles.filter_buttons}>
          {ecosystem.map((system, index) => (
            <EmptyButton
              key={index}
              active={activeCategoryCompany === index}
              onClick={() => handleCategoryCompany(index)}>
              {system.title}
            </EmptyButton>
          ))}
        </div>
      </LayoutLeft>
      <LayoutRight LayoutRight light className={styles.company_right}>
        <div className={styles.company_card}>
          <div className="h4">{typograf(category.text)}</div>
          <Divider light className={styles.company_card_divider}></Divider>
          {company.media && <img className={styles.company_card_image} src={company.media} alt="" />}
          <div className="h6">{company.title}</div>
          <p className="p">{typograf(company.text)}</p>
          <div className={styles.company_tags}>
            {company.tags?.map((tag, index) => (
              <div key={index} className={styles.company_tag}>
                <IconNew name={tag.icon} />
                {tag.text}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.company_list}>
          {category.ecosystem?.map((com, index) => (
            <PlateButton onClick={() => handleCompany(index)} key={index} active={index === activeCompany}>
              <img src={com.svg} alt="" className={styles.company_logo} />
            </PlateButton>
          ))}
        </div>
      </LayoutRight>
    </Layout>
  )
}

Ecosystem.propType = {
}

export default React.memo(Ecosystem);
