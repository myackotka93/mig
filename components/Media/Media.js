import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
// import { useScroll } from '../../services/Locomotive';
import Image from 'next/image';

function Media({ media, className, attributes, lazy }) {
  // const { update } = useScroll();
  const extension = useMemo(() => /[^.]+$/.exec(media)?.[0], [media]);
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    setIsVideo(extension === 'mp4');
  }, [extension]);

  function handleLoad() {
    // update();
  }

  // if (lazy) {
  //   return (
  //     <div className={className} {...attributes}>
  //       {
  //         extension === 'mp4' ?
  //           <LazyLoadComponent afterLoad={handleLoad} className="image-next">
  //             <video playsInline autoPlay muted loop src={media} className="image-next" />
  //           </LazyLoadComponent> :
  //           <LazyLoadImage afterLoad={handleLoad} src={media} className="image-next" />
  //       }
  //     </div>
  //   )
  // }

  return (
    <div className={className} {...attributes}>
      {
        isVideo ?
          <video show-mute-btn="true" playsInline onLoad={handleLoad} autoPlay muted loop src={media} className="image-next" /> :
          <Image onLoad={handleLoad} quality={90} layout='fill' className="image-next" src={media} alt="" />
      }
    </div>
  );
}

export default Media;