import {themes as prismThemes} from 'prism-react-renderer';
import fs from 'node:fs';
import path from 'node:path';

const repo = process.env.GITHUB_REPOSITORY || 'amirgame197/WatChat-Docs';
const [organizationName, projectName] = repo.split('/');
const cnamePath = path.join(process.cwd(), 'static', 'CNAME');
const customDomain = fs.existsSync(cnamePath) ? fs.readFileSync(cnamePath, 'utf8').trim() : ''; 

const githubUrl = 'https://github.com/amirgame197/WatChat';
const websiteUrl = 'https://watchat.pages.dev';

const githubIcon =
  '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" role="img" aria-label="GitHub repository">' +
  '<title>GitHub repository</title>' +
  '<path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.09 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>' +
  '</svg>';

const websiteIcon =
  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" ' +
  'stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="WatChat website">' +
  '<title>WatChat website</title>' +
  '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19"/>' +
  '<path d="M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5Z"/>' +
  '</svg>';

export default {
  title: 'WatChat',
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
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
      },
    ],
  ],
  presets: [[
    'classic',
    {
      docs: {sidebarPath: './sidebars.js', editUrl: undefined},
      blog: false,
      theme: {
        customCss: [
          './src/css/custom.css',
          '@fontsource/roboto/300.css',
          '@fontsource/roboto/400.css',
          '@fontsource/roboto/500.css',
          '@fontsource/roboto/700.css',
        ],
      },
    },
  ]],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    image: 'img/social-card.svg',
    navbar: {
      title: 'WatChat',
      logo: {alt: 'WatChat logo', src: 'img/favicon.svg'},
      hideOnScroll: false,
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
        {
          href: websiteUrl,
          position: 'right',
          html: websiteIcon,
          'aria-label': 'WatChat website',
          className: 'navbar-icon-link',
        },
        {
          href: githubUrl,
          position: 'right',
          html: githubIcon,
          'aria-label': 'GitHub repository',
          className: 'navbar-icon-link',
        },
      ],
    },
    docs: {sidebar: {hideable: true, autoCollapseCategories: false}},
    tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 4},
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Getting Started', to: '/docs/guides/getting-started'},
            {label: 'Reference', to: '/docs/reference/overview'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Website', href: websiteUrl},
            {label: 'GitHub', href: githubUrl},
            {label: 'Issues', href: `${githubUrl}/issues`},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WatChat. Built with Docusaurus.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};
