import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Example.module.scss';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import typograf, { parser } from '@/utils/typograf';

function Example({ banner, popup, text }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    // setModalOpen(s => !s);
    window.open('https://oncoperm.ru/', '_blank')
  }

  return (
    <>
      <div className={styles.Example}>
        <img className={styles.img} src={banner} alt="" />
        <div className={styles.info_block}>
          <h6 className={styles.text}>{typograf(text)}</h6>
          <Button white onClick={toggleModal} className={styles.Button}>Перейти на сайт</Button>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={toggleModal}>
        {parser(popup)}
      </Modal>
    </>
  )
}

Example.propType = {
}

export default React.memo(Example);
