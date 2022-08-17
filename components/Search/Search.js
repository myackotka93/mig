import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Search.module.scss';
import sender, { getter } from '@/utils/sender';
import { useRouter } from 'next/router'
function Search({ open, onClose }) {
  const input = useRef();
  const { push } = useRouter();

  function bindClose(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  function startSearch(event) {
    if (event.key == "Enter") {
      onClose();
      push('/search?search=' + event.target.value)
      // Router.
      // getter('search?search=' + event.target.value);
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', bindClose)
    }

    return () => {
      if (open) {
        document.removeEventListener('keydown', bindClose)
      }
    }
  }, [open, bindClose]);

  useEffect(() => {
    if (input.current) {
      input.current.addEventListener('keydown', startSearch)
    }

    return () => {
      if (input.current) {
        input.current.removeEventListener('keydown', startSearch)
      }
    }
  }, [input, startSearch])


  return (
    <div className={classNames(styles.search, { [styles.open]: open })}>
      <button onClick={onClose} className={styles.search_close}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12L36 36M12 36L36 12L12 36Z" stroke="#11151D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={styles.input}>
        <input ref={input} type="text" placeholder='Поиск...' />
        <span>Нажмите клавишу Enter для поиска, Esc для отмены.</span>
      </div>
    </div>
  )
}

Search.propType = {
}

export default React.memo(Search);
