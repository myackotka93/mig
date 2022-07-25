import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Modal.module.scss';
import ReactModal from 'react-modal';
import typograf from '@/utils/typograf';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    overflowX: 'hidden',
    borderRadius: 0,
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 72,
    paddingBottom: 72,
    maxWidth: 916,
    maxHeight: '95vh'
  },

  overlay: {
    backgroundColor: `rgba(17, 21, 29, 0.9)`,
    zIndex: 1000
  }
};


function Modal({ isOpen, children, onClose }) {
  function clone(c = {}, index) {
    if (!c.props) return React.cloneElement(c, { key: index });
    if (!c.props.children) return React.cloneElement(c, { key: index });
    if (typeof c.props?.children === 'string') {
      return React.cloneElement(c, { children: typograf(c.props.children), key: index })
    } else {
      if (Array.isArray(c.props.children)) {
        return React.cloneElement(c, { children: c.props.children?.map((c, i) => clone(c, index + '_' + i)), key: index })
      } else {
        return React.cloneElement(c, { children: React.cloneElement(c.props.children, { children: typograf(c.props.children.props.children) }), key: index })
      }
    }
  }


  return (
    <ReactModal style={customStyles} isOpen={isOpen} className={styles.Modal} onRequestClose={onClose}>
      {/* <button className={styles.close}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12L36 36M12 36L36 12L12 36Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button> */}
      {children.map((c, index) => clone(c, index))}
    </ReactModal>
  )
}

Modal.propType = {
}

export default React.memo(Modal);
