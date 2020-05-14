module.exports = {
  title: 'NcURL - Next generation of cURL ',
  tagline: 'Fully compatible with cURL. And with JSON support, syntax highlight, easy to share with others.',
  url: 'https://ncurl.sh',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ncurl', // Usually your GitHub org/user name.
  projectName: 'ncurl-web', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-gtag'],
  themeConfig: {
    navbar: {
      title: 'NcURL',
      logo: {
        alt: 'NcURL Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/getting-started-installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ncurl/ncurl',
          label: 'GitHub',
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
              label: 'Getting Started',
              to: 'docs/getting-started-installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/ncurl',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/ncurl',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ncurlsh',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ncurl/ncurl',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NcURL, Inc. Built with Docusaurus.`,
    },
    gtag: {
        trackingID: 'UA-104688192-2',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ncurl/ncurl/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ncurl/ncurl/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
