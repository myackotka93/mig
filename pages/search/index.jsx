import Divider from '@/components/Divider/Divider';
import Layout from '@/layouts/Layout/Layout';
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft';
import LayoutRight from '@/layouts/LayoutRight/LayoutRight';
import classNames from 'classnames';
import DirectionsItem from '@/components/DirectionsItem/DirectionsItem';
import SearchNews from '@/components/SearchNews/SearchNews';
import SearchTeam from '@/components/SearchTeam/SearchTeam';
import styles from './index.module.scss';


function Index() {
 return (
  <>
    <Layout>
      <LayoutLeft className={styles.left_heading}>
        <div className={classNames(styles.heading, 'h3')}>Нотов</div>
        <p className={styles.title}>Результаты поиска</p>
      </LayoutLeft>
    </Layout>
    <Divider className={styles.divider} />
    <Layout>
      <LayoutLeft>
        <p className={styles.subtitle}>Направления</p>
      </LayoutLeft>
      <LayoutRight className={styles.right}>
        <DirectionsItem />
      </LayoutRight>
    </Layout>

    <Layout>
      <LayoutLeft>
        <p className={styles.subtitle}>Пресс-центр</p>
      </LayoutLeft>
      <LayoutRight className={styles.right}>
        <SearchNews className={styles.search_news}/>
      </LayoutRight>
    </Layout>
    
    <Layout>
      <LayoutLeft>
        <p className={styles.subtitle}>Команда</p>
      </LayoutLeft>
      <LayoutRight className={styles.right}>
        <SearchTeam />
      </LayoutRight>
    </Layout>
  </>
 )
}

export default Index