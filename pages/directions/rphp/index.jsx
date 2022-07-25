import Banner from '@/blocks/Banner/Banner'
import Directions from '@/blocks/Directions/Directions'
import NewsEvents from '@/blocks/NewsEvents/NewsEvents'
import HeaderBanner from '@/components/HeaderBanner/HeaderBanner'
import Modal from '@/components/Modal/Modal'
import { NEWS } from '@/data/rphp'
import Layout from '@/layouts/Layout/Layout'
import LayoutLeft from '@/layouts/LayoutLeft/LayoutLeft'
import LayoutRight from '@/layouts/LayoutRight/LayoutRight'
import typograf from '@/utils/typograf'
import classNames from 'classnames'
import React, { useState } from 'react'
import styles from './index.module.scss';
import Image from 'next/image'

function Index() {
  const [modalMain, setModalMain] = useState(false);

  function handleMainModal() {
    setModalMain(true);
  }

  function handleCloseMainModal() {
    setModalMain(false);
  }

  return (
    <>
      <HeaderBanner img='/images/header-rphp.jpg' />
      <Directions
        onClick={handleMainModal}
        title="Радиофармацевтическое производство"
        info="Производство радиофармацевтических лекарственных препаратов (РФП) —  важное направление, позволяющее обеспечить бесперебойность и автономность работы всех центров ПЭТ/КТ диагностики."
        text="Получение радиоактивной метки — главный этап производства, основанный на использовании сложного высокотехнологичного оборудования, изохронного циклотрона, в недрах которого происходят ядерные реакции, необходимые для синтеза молекул основного вещества лекарственного препарата. "
      />
      <Layout>
        <LayoutLeft>
          <div className="h6">Лекарственные направления</div>
        </LayoutLeft>
        <LayoutRight className={styles.info} right>
          <div className={classNames(styles.info_wrapper, 'h4')}>Практика применения разных видов РФП ежегодно расширяется. Наши специалисты готовы производить уникальные РФП для проведения
            ПЭТ/КТ диагностики наиболее сложных типов злокачественных новообразований и отдельных заболеваний сердечно-сосудистой системы:</div>
          <ul className={styles.info_list}>
            <li>Фтордезоксиглюкоза, 18F (ФДГ, 18F)</li>
            <li>Фторэтилтирозин, 18F (ФЭТ, 18F)</li>
            <li>ПСМА‑1007, 18F</li>
            <li>Фторэстрадиол, 18F (ФЭС,18F)</li>
            <li>Фтор-L-тимидин, 18F (FLT,18F)</li>
          </ul>
          <p>Планируется расширение линейки РФЛП, с помощью которых возможно визуализировать и эффективно диагностировать большинство типов злокачественных новообразований.</p>
        </LayoutRight>
      </Layout>
      <Layout className={styles.layout_map}>
        <LayoutLeft>
          <div className="h3">Регионы <br /> поставок <br />РФП</div>
        </LayoutLeft>
        <LayoutRight className={styles.map}>
          <div className={styles.map_img}>
            <Image className="image-next" quality={100} layout='fill' src={`/images/map/rfcp.png`} alt="" />
          </div>
        </LayoutRight>
      </Layout>
      <div className="offset"></div>
      <Banner src='/images/banner-rphp.png' />
      <div className="offset"></div>

      <NewsEvents news={NEWS} />

      <Modal onClose={handleCloseMainModal} isOpen={modalMain}>
        <div className="h4">Производство радиофармацевтических лекарственных препаратов (РФП) —  важное направление, позволяющее обеспечить бесперебойностьи автономность работы всех центров ПЭТ/КТ диагностики.</div>
        <div className="offset"></div>
        <p>Получение радиоактивной метки — главный этап производства, основанный на использовании сложного высокотехнологичного оборудования, изохронного циклотрона, в недрах которого происходят ядерные реакции, необходимые для синтеза молекул основного вещества лекарственного препарата. Обязательное требование к производству — система чистых помещений, в составе которых находится лаборатория синтеза РФП с установленным оборудованием. Оно обеспечивает соблюдение требований Правил надлежащей производственной практики (GMP).</p>
        <p>Защиту персонала обеспечивают рентгенозащитные боксы компании Comecer, внутри которых размещены автоматизированные модули синтеза РФЛП GE FASTLab2. Для фасовки готовой продукции используются системы компании Comecer: полуавтоматическая система фасовки Clio и автоматическая роботизированная система фасовки Theodorico2, также установленные внутри рентгенозащитных боксов.</p>
        <img src="/images/news/rphp-modal.jpg" alt="" />
        <div className="offset"></div>
        <div className="h5">Для обеспечения потребностей Группы в РФПиспользуется пять циклотронных комплексов, расположенных в городах:</div>
        <div className="offset"></div>
        <ul>
          <li>Балашиха</li>
          <li>Елец</li>
          <li>Уфа</li>
          <li>Ставрополь</li>
          <li>Казань</li>
        </ul>
        <div className="offset"></div>
        <p>
          На стадии строительства еще два, в Новосибирске и Сколково.
        </p>
        <p>
          Их география определяется логистическими требованиями, гарантирующими доставку РФП в нужном количестве и качестветочно к определенному времени.
        </p>
        <p>
          Основным препаратом, используемым в ПЭТ/КТ центрах, является фтордезоксиглюкоза, 18F (ФДГ, 18F), закрывающая до 90% диагностических потребностей.
        </p>
        <p>
          Большое внимание в Группе уделяется специалистам, задействованнымна производстве РФП. Они обладают огромным багажом знаний в области физики, химии, биотехнологии, производства лекарственных средств, микробиологии, являются постоянными участниками научно-практических конференций, регулярно публикуются в российских и зарубежных научных изданиях. Кроме того, весь персонал проходит дополнительное ежегодное обучение.
        </p>
        <p>
          Развитие ядерной медицины — в создании новых производственныхцентров и расширении различных наименований производимых радиофармпрепаратов как для диагностики, так и для терапии. Условиядля этого есть. Все мы понимаем, что от нашей работы зависят жизни многих людей.
        </p>

      </Modal>
    </>
  )
}

export default Index