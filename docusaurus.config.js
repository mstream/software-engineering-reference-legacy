/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require('path');
const rehypeKatex = require('rehype-katex');
const remarkMath = require('remark-math');

const defaultLocale = 'en';
const organizationName = 'mstream';
const projectName = 'software-engineering-reference';
const websiteTitle = 'Software Engineering Reference';

module.exports = {
  baseUrl: `/${projectName}/`,
  clientModules: [
    require.resolve('./src/globals.js')
  ],
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale,
    locales: [
      defaultLocale
    ],
  },
  projectName,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes:'throw',
  organizationName,
  title: websiteTitle,
  url: `https://${organizationName}.github.io/${projectName}`,
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
      logo: {
        alt: `${websiteTitle} Logo`,
        src: 'img/apple-touch-icon.png',
      },
      title: websiteTitle,
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
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-docs",
      {
        include: ['**/*.mdx'],
        path: 'docs',
        rehypePlugins: [
          [
            rehypeKatex, 
            {output: 'mathml', throwOnError: true}
          ],
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
