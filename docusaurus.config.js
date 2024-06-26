// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Galoy Dev Site',
  tagline: 'Developer Docs',
  favicon: 'images/favicon.ico',

  // Set the production url of your site here
  url: 'https://dev.galoy.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GaloyMoney', // Usually your GitHub org/user name.
  projectName: 'dev.galoy.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw', // 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // This changes the base path from /docs
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-6KME0GDR4W',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      image: 'images/g-logo.jpg',
      navbar: {
        title: 'Developer Documentation',
        logo: {
          alt: 'Galoy logo',
          src: 'images/galoy-logo-blue.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'productsSidebar',
            position: 'left',
            label: 'Products',
          },
          {
            type: 'docSidebar',
            sidebarId: 'deploymentSidebar',
            position: 'left',
            label: 'Deployment',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'left',
            label: 'Contribute',
          },
          {
            href: 'https://github.com/GaloyMoney',
            label: 'Follow us on GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Products',
                to: '/products',
              },
              {
                label: 'Deployment',
                to: '/deployment',
              },
              {
                label: 'Projects',
                to: '/projects',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Mattermost',
                href: 'https://chat.galoy.io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/GaloyMoney',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/BitcoinForCommunities',
              },
              {
                label: 'Nostr',
                href: 'https://primal.net/p/npub1gal0y3vuj3c5sme6444ncsr8xcfm9axehfcsuqfamz5v926m6f2s4yz3t2',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/GaloyMoney',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Galoy Inc.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,  // manual switch
        respectPrefersColorScheme: false, // system dark mode switch
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '9XPGCL3JOD',
        apiKey: '689e7400c3044e24b976ec47ed9379a8',
        indexName: 'galoy',
        contextualSearch: false, // only false works
      }
    }),

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/contribute',
            from: ['/projects'],
          },
        ],
      },
    ],
  ],
};

module.exports = config;
