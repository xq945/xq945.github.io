import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'xq945',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }]
  ],
  themeConfig: {
    siteTitle: false,
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Java',
        items: [
          { text: 'Java基础', link: '/java/basic/' },
          { text: 'Java集合', link: '/java/collections/' },
          { text: 'Java并发', link: '/java/concurrency/' },
          { text: 'Java虚拟机', link: '/java/jvm/' }
        ]
      },
      { text: '算法', link: '/alogorithm/' },
      { text: 'Spring', link: '/spring/' },
      { text: 'MySQL', link: '/mysql/' },
      { text: 'Redis', link: '/redis/' },
      { text: '项目', link: '/project/' }
    ],
    sidebar: [
      {
        text: 'Java',
        items: [
          { text: 'Java基础', link: '/java/basic/' },
          { text: 'Java集合', link: '/java/collections/' },
          { text: 'Java并发', link: '/java/concurrency/' },
          { text: 'Java虚拟机', link: '/java/jvm/' }
        ]
      },
      { text: '算法', link: '/alogorithm/' },
      { text: 'Spring', link: '/spring/' },
      { text: 'MySQL', link: '/mysql/' },
      { text: 'Redis', link: '/redis/' },
      { text: '项目', link: '/project/' }
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xq945'
      }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: '基于 VitePress 构建',
      copyright: '© 2026 NovaBlog'
    },
    lastUpdated: {
      text: '最后更新'
    }
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'dracula'
    }
  }
})
