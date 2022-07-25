import "../styles/global/globals.scss";
import "../styles/global/storybook.scss";

import * as NextImage from "next/image";
import resize from "../utils/resize";
import debounce from "../utils/debounce";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

resize();
window.addEventListener('resize', debounce(resize, 200));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    // defaultViewport: 'Desktop',
    viewports: {
      Desktop: {
        name: 'Desktop',
        type: "desktop",
        styles: {
          width: '1920px',
          height: '1080px',
        },
      },
      Laptop: {
        name: 'Laptop',
        type: "desktop",
        styles: {
          width: '1280px',
          height: '1080px',
        },
      },
      Tablet: {
        name: 'Tablet',
        type: "tablet",
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      Mobile: {
        name: 'Mobile',
        type: "mobile",
        styles: {
          width: '320px',
          height: '568px',
        },
      },
    },
  }
}