import NextPerson from '@/blocks/NextPerson/NextPerson';
import Divider from '@/components/Divider/Divider';
import Person from '@/components/Person/Person';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import OnlyRight from '@/layouts/OnlyRight/OnlyRight';
import fetcher from '@/utils/fetcher';
import typograf from '@/utils/typograf';
import classNames from 'classnames';
import React from 'react'
import styles from './index.module.scss'
import Persons from '@/blocks/Persons/Persons';
import Image from '@/blocks/Image/Image';
import Media from '@/components/Media/Media';
import HtmlParser from 'html-react-parser';
import TEAM from '@/data/team';

function Team({ person = {}, data = [] }) {
  return (
    <>
      <div className={styles.Image}>
        <Media className={styles.img} media={person.big_image ?? "/images/image_block.png"} />
      </div>


      <Layout>
        <div className={styles.info}>
          <Persons {...person} />
        </div>
      </Layout>

      <Layout>
        <LayoutLeft>
          <div className="h6">Биография</div>
        </LayoutLeft>
        <LayoutRight right>
          <div className={styles.container}>
            {HtmlParser(typograf(person.biography))}
          </div>
        </LayoutRight>
      </Layout>
      <div className={classNames("container", styles.divider_main)}>
        <Divider />
      </div>
      <Layout>
        <LayoutLeft>
          <div className="h6">Достижения</div>
        </LayoutLeft>
        <LayoutRight right>
          <div className={styles.container}>
            <ul>
              {HtmlParser(typograf(person.achievements))}
            </ul>
          </div>
        </LayoutRight>
      </Layout>
      <NextPerson team={data} currentPersonId={person.id} />
      <div className="offset"></div>
    </>
  )
}

export default Team;

export async function getStaticPaths(ctx) {
  const res = await fetcher('api/team/all', ctx);

  return {
    paths: res.data.filter(person => person.big_image).map(person => ({ params: { id: String(person.id) } })),
    fallback: 'blocking'
  };
}


export async function getStaticProps(ctx) {
  const res = await fetcher('api/team/' + ctx.params.id, ctx);

  const { data, ...person } = res;

  if (data && person) {
    return { props: { person, data }, revalidate: 10 }
  }

  return {
    notFound: true
  }
}


