import React, { useEffect, useMemo, useState } from 'react';
import HtmlParser from 'html-react-parser';
import typograf from '@/utils/typograf';

import styles from './Promo.module.scss';
import classNames from 'classnames';

function Slide({ active, index, onClick, text }) {
  function handleClick() {
    onClick(index);
  }

  return (
    <div className={classNames(styles.slide_item, { [styles.active]: active })}>
      <div className={styles.progress}>
        <div className={styles.progress_line}></div>
      </div>
      <div
        className={styles.slide_text}
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: text }}
      >
      </div>
    </div>
  )
}

let timer;

function ImagePromo(p) {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    setIsVideo(p.media?.slice(-4) === '.mp4');
  }, [p.media]);

  return (
    <>
      {isVideo ? <video
        autoPlay playsInline loop muted
        className={classNames(styles.image_bg, { [styles.active_bg]: p.active === p.index })}
        src={p.media}
      /> : <img
        className={classNames(styles.image_bg, { [styles.active_bg]: p.active === p.index })}
        src={p.media}
        layout="fill"
        alt=""
      />}

    </>
  )
}
function Promo({ stories }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    timer = setInterval(() => {
      if (active === 3) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    }, 17000);

    return () => {
      clearInterval(timer);
    }
  }, [active]);

  return (
    <div className={styles.Promo}>
      <div className={styles.body}>
        <div>
          {stories.map((p, index) => (
            <ImagePromo
              active={active}
              index={index}
              key={p.id}
              {...p}
            />
          ))}
        </div>
        <div className={styles.wrapper}>
          <h1 className={classNames(styles.wrapper_heading, 'h2')}>{HtmlParser(typograf(stories[active].title))}</h1>
          <p className={classNames(styles.wrapper_info)}>{HtmlParser(typograf(stories[active].info))}</p>
          {/* <Button className={styles.Button} onClick={handleOpen}>Узнать больше</Button> */}
        </div>
        <div className={styles.slide}>
          {stories.map((p, index) => (
            <Slide
              key={index}
              text={p.story_text}
              onClick={setActive}
              active={active === index}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

Promo.propType = {
}

export default React.memo(Promo);
