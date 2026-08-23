import {themes as prismThemes} from 'prism-react-renderer';
import fs from 'node:fs';
import path from 'node:path';

const repo = process.env.GITHUB_REPOSITORY || 'YOUR_GITHUB_USERNAME/my-docs';
const [organizationName, projectName] = repo.split('/');
const cnamePath = path.join(process.cwd(), 'static', 'CNAME');
const customDomain = fs.existsSync(cnamePath) ? fs.readFileSync(cnamePath, 'utf8').trim() : ''; 

export default {
  title: 'Documentation',
  tagline: 'Documentation for your project',
  favicon: 'img/favicon.svg',
  url: customDomain ? `https://${customDomain}` : `https://${organizationName}.github.io`,
  baseUrl: customDomain ? '/' : `/${projectName}/`,
  organizationName,
  projectName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [[
    'classic',
    {
      docs: {sidebarPath: './sidebars.js', editUrl: undefined},
      blog: false,
      theme: {customCss: './src/css/custom.css'},
    },
  ]],
  themeConfig: {
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
      copyright: `© ${new Date().getFullYear()} Your Project`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};
