import { defineConfig } from 'vitepress'

export default defineConfig({
  markdown: {
    config: (md) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      md.use(require('markdown-it-task-lists'))
    },
  },
  lang: 'en-US',
  title: 'Web Notes',
  lastUpdated: true,
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/http/': sidebarHttp(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alice52/vitepress' },
    ],
    editLink: {
      pattern: 'git+https://github.com/alice52/vitepress/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present',
    },
  },
})

function nav() {
  return [
    { text: 'http', link: '/http/index', activeMatch: '/http/' },
  ]
}

function sidebarVue() {
  return [
    {
      text: 'Source Code',
      collapsible: true,
      items: [
        { text: 'Core Engine', link: '/vue/core/core-engine' },
        { text: 'Core Patch Logics', link: '/vue/core/core-patch-logics' },
      ],
    },
    {
      text: 'Buildup From Scratch',
      collapsible: true,
      items: [
        { text: 'Vue3 + Vite3', link: '/vue/buildup/init-project' },
        { text: 'Add Docs', link: '/vue/buildup/init-project-docs' },
        { text: 'Add Playground', link: '/vue/buildup/init-project-playground' },
        { text: 'All In One', link: '/vue/buildup/all-in-one' },
      ],
    },
  ]
}

function sidebarHttp() {
  return [
    {
      text: 'http',
      items: [
        { text: 'FAQ', link: '/http/FAQ' },
      ],
    },
  ]
}
