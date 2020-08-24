const { description } = require('../../package')

module.exports = {
locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Markdown教程',
      description: 'Markdown 是一种用来文本处理的轻量级 「标记语言」，它用简洁的语法代替排版，而无需像Microsoft的Word一样需要花费大量的时间进行排版、字体设置。它使我们专心于码字，用「标记」语法，来代替常见的排版格式',
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: '入门',
        link: '/intro.md',
      },
      {
        text: '速查表',
        link: '/cheat-sheet.md',
      },
      {
        text: '基本语法',
        link: '/basic-syntax.md',
      },
      {
        text: '扩展语法',
        link: '/extended-syntax.md',
      },
      {
        text: '工具',
        link: '/tools.md',
      },
      {
        text: '在线编辑器',
        link: 'https://markdown.com.cn/editor/'
      },
      {
        text: '标准',
        link: 'https://commonmark.org/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
