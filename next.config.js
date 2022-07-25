const nextConfig = {
  // experimental: {
  //   outputStandalone: false,
  //   // optimizeCss: true,
  //   // optimizeFonts: true
  // },
  // swcMinify: false,
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils', 'services', 'components', 'blocks', 'data', 'hooks'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    domains: ['mig-backend.evgeniyforweb.ru', 'test-gzip.locale'],
  },
}

module.exports = nextConfig
