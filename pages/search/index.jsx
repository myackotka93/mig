import Divider from '@/components/Divider/Divider';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import classNames from 'classnames';
import DirectionsItem from '@/components/DirectionsItem/DirectionsItem';
import SearchNews from '@/components/SearchNews/SearchNews';
import SearchTeam from '@/components/SearchTeam/SearchTeam';
import styles from './index.module.scss';
import fetcher from '@/utils/fetcher';
import Slider from '@/components/Slider/Slider';
import { getter } from '@/utils/sender';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


function Index({ }) {
  const router = useRouter();
  const [search, setSearch] = useState({});
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (router.query?.search) {
      setSearch({});
      setLoaded(true);
      getter('search?search=' + router.query?.search)
        .then(search => {
          setLoaded(false);
          setSearch(search)
        });
    }
  }, [router]);

  return (
    <>
      <Layout>
        <LayoutLeft className={styles.left_heading}>
          <div className={classNames(styles.heading, 'h3')}>{router.query?.search}</div>
          <p className={styles.title}>Результаты поиска</p>
        </LayoutLeft>
      </Layout>
      <Divider className={styles.divider} />

      {search.static_pages &&
        <Layout>
          <LayoutLeft>
            <p className={styles.subtitle}>Направления</p>
          </LayoutLeft>
          <LayoutRight className={classNames(styles.right, styles.directions)}>
            {search.static_pages.map(press => (
              <DirectionsItem
                {...press}
                link={press.url}
                key={press.searchable.id}
              />
            ))}
          </LayoutRight>
        </Layout>
      }

      {search.news &&
        <Layout>
          <LayoutLeft>
            <p className={styles.subtitle}>Пресс-центр</p>
          </LayoutLeft>
          <LayoutRight className={styles.right}>
            <Slider
              className={styles.slider}
              spaceBetween={-1}
              pagination
              breakpoints={{
                320: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                900: { slidesPerView: 1.5 },
                1200: { slidesPerView: 2.3 },
                1500: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: '.news_prev',
                nextEl: '.news_next'
              }}
            >
              {search.news.map(press => (
                <Slider.Slide key={press.searchable.id} className={styles.slide}>
                  <SearchNews
                    {...press}
                    className={styles.search}
                  />
                </Slider.Slide>
              ))}
            </Slider>

            <Slider.Prev className={classNames(styles.prev, 'news_prev')} />
            <Slider.Next className={classNames(styles.next, 'news_next')} />
          </LayoutRight>
        </Layout>
      }

      {search.teams &&
        <Layout>
          <LayoutLeft>
            <p className={styles.subtitle}>Команда</p>
          </LayoutLeft>
          <LayoutRight className={styles.right}>
            <Slider
              className={styles.slider}
              spaceBetween={-1}
              pagination
              breakpoints={{
                320: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                900: { slidesPerView: 1.5 },
                1200: { slidesPerView: 2.3 },
                1500: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: '.teams_prev',
                nextEl: '.teams_next'
              }}
            >
              {search.teams.map(press => (
                <Slider.Slide key={press.searchable.id} className={styles.slide}>
                  <SearchTeam
                    {...press}
                    className={styles.search}
                  />
                </Slider.Slide>
              ))}
            </Slider>

            <Slider.Prev className={classNames(styles.prev, 'teams_prev')} />
            <Slider.Next className={classNames(styles.next, 'teams_next')} />
          </LayoutRight>
        </Layout>
      }

      {!search.teams && !search.static_pages && !search.news && <>
        <Layout>
          <LayoutLeft className={styles.notfound}>
            <div className='h6'>{loaded ? 'Идет поиск...' : 'К сожалению, ничего не найдено'}</div>
          </LayoutLeft>
        </Layout>
      </>}
    </>
  )
}

export default Index
export async function getStaticProps(ctx) {
  // const team = await fetcher('api/team', ctx);
  // const maps = await fetcher('api/maps', ctx);

  const [footer] = await Promise.all([
    fetcher('api/option/footer', ctx),
    // fetcher('api/search?search=' + encodeURIComponent(ctx.query?.search ?? null), ctx),
  ]);

  return {
    props: {
      // search,
      query: ctx.query?.search ?? null,
      footer: footer.attributes
    }
  }

  // return { props: { ...props} }
}
