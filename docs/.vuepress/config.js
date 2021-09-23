const { description } = require('../../package')

module.exports = {
locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Markdown 官方教程',
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    sidebarDepth: 0,
    repo: '',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: false,
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
        link: '/basic-syntax/',
      },
      {
        text: '扩展语法',
        link: '/extended-syntax/',
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
      '/basic-syntax/':getSidebarGuide(),
	  '/extended-syntax/':getExtendedSidebarGuide(),
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

function getSidebarGuide () {
  return [
    {
      title: '基本语法',
      collapsable: false,
      children: [
        '',
		'headings',
		'paragraphs',
		'line-breaks',
		'emphasis',
		'blockquotes',
		'lists',
		'code',
		'horizontal-rules',
		'links',
		'images',
		'escaping-characters',
		'htmls',
      ]
    }
  ]
}

function getExtendedSidebarGuide () {
  return [
    {
      title: 'markdown扩展语法',
      collapsable: false,
      children: [
        '',
		'availability',
		'tables',
		'fenced-code-blocks',
		'footnotes',
		'heading-ids',
		'definition-lists',
		'strikethrough',
		'task-lists',
		'emoji',
		'automatic-url-linking',
      ]
    }
  ]
}

