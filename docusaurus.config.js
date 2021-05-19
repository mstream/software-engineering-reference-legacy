/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require('path');
const rehypeKatex = require('rehype-katex');
const remarkMath = require('remark-math');

module.exports = {
  baseUrl: '/',
  clientModules: [  require.resolve('./src/globals.js')],
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  projectName: 'software-development-reference',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes:'throw',
  organizationName: 'mstream',
  title: 'Software Development Reference',
  url: 'https://mstream.github.io/software-development-reference',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Maciej Laciak`,
      style: 'dark',
    },
    hideableSidebar: false,
    navbar: {
      title: 'Software Development Reference',
    },
    prism: {
      additionalLanguages: [
        'bash',
        'git', 
        'handlebars',
        'http'
      ],
    },
  },
  plugins: [
    path.resolve(__dirname, 'plugins', 'alias'),
    path.resolve(__dirname, 'plugins', 'crypto'),
    [
      "@docusaurus/plugin-content-docs",
      {
        include: ['**/*.mdx'],
        path: 'docs',
        rehypePlugins: [
          [rehypeKatex, {output: 'mathml', throwOnError: true}]
        ],
        remarkPlugins: [
          remarkMath,
        ],
        routeBasePath: '/',
      }
    ],
  ],
  themes: [
    '@docusaurus/theme-classic',
  ],
  titleDelimiter: '⦉'
}
