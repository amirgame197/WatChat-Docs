import {themes as prismThemes} from 'prism-react-renderer';
import fs from 'node:fs';
import path from 'node:path';

const repo = process.env.GITHUB_REPOSITORY || 'amirgame197/WatChat-Docs';
const [organizationName, projectName] = repo.split('/');
const cnamePath = path.join(process.cwd(), 'static', 'CNAME');
const customDomain = fs.existsSync(cnamePath) ? fs.readFileSync(cnamePath, 'utf8').trim() : ''; 

export default {
  title: 'Documentation',
  tagline: 'Documentation for WatChat',
  favicon: 'img/favicon.svg',
  url: customDomain ? `https://${customDomain}` : `https://${organizationName}.github.io`,
  baseUrl: '/',
  organizationName,
  projectName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  themes: ['cosmos-docusaurus-theme'],
  presets: [[
    'classic',
    {
      docs: {sidebarPath: './sidebars.js', editUrl: undefined},
      blog: false,
      theme: {customCss: './src/css/custom.css'},
    },
  ]],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    image: 'img/social-card.svg',
    navbar: {
      title: 'Documentation',
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
      ],
    },
    footer: {
      style: 'dark',
      links: [{title: 'Documentation', items: [{label: 'Introduction', to: '/docs/intro'}]}],
      copyright: `© ${new Date().getFullYear()} WatChat. Built with Docusaurus.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};
