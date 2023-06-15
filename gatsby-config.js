const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  siteMetadata: {
    siteUrl: 'https://ctwc55.github.io',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        fileName: isDev,
        displayName: isDev,
        pure: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '7a32f9341f5f7f9316100c68d0d3b4',
        localeFallbacks: {
          'ko-KR': 'ko-KR',
          'en': 'ko-KR',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'G-H6EJ4TNHBT',
        head: false,
        anonymize: true,
      },
    },
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://ctwc55.github.io/sitemap.xml',
      },
    },
  ],
};
