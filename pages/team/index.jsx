import Divider from '@/components/Divider/Divider';
import Person from '@/components/Person/Person';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import OnlyRight from '@/layouts/OnlyRight/OnlyRight';
import fetcher from '@/utils/fetcher';
import React from 'react'
import styles from './index.module.scss';

function Team({ data }) {
  return (
    <>
      <Layout>
        <div className={styles.center_header}>
          <h1 className={styles.heading_main}>Наша команда</h1>
        </div>
      </Layout>
      <Divider className={styles.divider_big}></Divider>
      {Object.entries(data).map(([group, items]) => {
        return (
          <React.Fragment key={group}>
            <Layout className={styles.Layout}>
              <LayoutLeft className={styles.left}></LayoutLeft>
              <LayoutRight className={styles.right}>
                {items.filter(person => person.active).map(person => {
                  return (
                    <React.Fragment key={person.id}>
                      <Person {...person} />
                      <Divider />
                    </React.Fragment>
                  )
                })}
              </LayoutRight>
            </Layout>
            <OnlyRight className={styles.divider_main}>
              <Divider />
            </OnlyRight>
          </React.Fragment>
        );
      })}
    </>
  )
}

export default Team;

export async function getStaticProps(ctx) {
  const [footer, team] = await Promise.all([
    fetcher('api/option/footer', ctx),
    fetcher('api/team', ctx)
  ]);
  
  return { props: { ...team, footer: footer.attributes }, revalidate: 10 }
}
