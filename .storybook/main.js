const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // {
    //   name: 'storybook-addon-next',
    //   options: {
    //     nextConfigPath: path.resolve(__dirname, '../next.config.js')
    //   }
    // }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /module\.scss$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
            }
          },
        },
        require.resolve('sass-loader'),
      ],
    },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, '../styles/global')
        ],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          require.resolve('sass-loader'),
        ],
      }
    );

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@/components": path.resolve(__dirname, "../components/"),
        "@/blocks": path.resolve(__dirname, "../blocks/"),
        "@/styles": path.resolve(__dirname, "../styles/"),
        "@/layouts": path.resolve(__dirname, "../layouts/"),
        "@/services": path.resolve(__dirname, "../services/"),
        "@/utils": path.resolve(__dirname, "../utils/"),
        "@/data": path.resolve(__dirname, "../data/"),
      },
    }

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader?url=false', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    // console.log(config);
    // Return the altered config
    return config;
  },
}