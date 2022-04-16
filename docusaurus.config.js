const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'My Docs',
  tagline: 'Technical notes',
  url: 'https://munderseth.github.io',
  baseUrl: '/my.docs/',
  organizationName: 'munderseth', // Usually your GitHub org/user name.
  projectName: 'my.docs', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/munderseth.jpg',
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/munderseth/my.docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/customTheme2.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/munderseth.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Notes',
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
                label: 'Notes',
                to: '/',
              },
            ],
          },
          {
            title: 'Whatever',
            items: [
              {
                label: 'Site',
                href: 'https://munderseth.github.io/my.docs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/munderseth/my.docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
