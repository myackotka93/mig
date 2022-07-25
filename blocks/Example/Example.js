import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Example.module.scss';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';

function Example() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(s => !s);

  return (
    <>
      <div className={styles.Example}>
        <img className={styles.img} src="/images/example.png" alt="" />
        <div className={styles.info_block}>
          <h6 className={styles.text}>Пример частной инвестиционной инициативы по строительству Онкологического центра в г. Пермь</h6>
          <Button white onClick={toggleModal} className={styles.Button}>Узнать больше</Button>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={toggleModal}>
        <div className="h3">
          ГК МИГ намерен построить онкологический центр в Перми стоимостью 17,7 млрд рублей и мощностью 570 коек.
        </div>
        <div className="offset"></div>
        <p>
          Правительство Пермского края и ГК МИГ подвели итоги конкурса на заключение концессионного соглашения по данному объекту.
        </p>
        <p>
          Концессия рассчитана на 35 лет, предполагает проектирование, строительство, оснащение компанией онкоцентра и передачу его краевым властям. Земельный участок площадью 120 тысяч кв. м под строительство сдается концессионеру в аренду. Возвести объект необходимо в течение трех лет и десяти месяцев.
        </p>
        <p>
          Инвестор обязан также эксплуатировать объект, обеспечить оказание медпомощи в системе ОМС. Компенсировать затраты краевые власти намерены при помощи своего бюджета, а также средств терфонда ОМС в части оказанной медпомощи.
        </p>
        <p>
          Будущий онкоцентр площадью 69 тысяч кв. м должен быть семиэтажным, иметь хирургический стационар, химиотерапевтический гематологический центр, радиологический стационар, операционный блок с ОРИТ и консультативно-диагностический блок.
        </p>
      </Modal>
    </>
  )
}

Example.propType = {
}

export default React.memo(Example);
