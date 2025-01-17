import { defineConfig } from 'vitepress';

// 引入导航栏和侧边栏配置
import { navbarZh, navbarEn } from './config/navbar';
import { sidebarZh, sidebarEn } from './config/sidebar';

export default defineConfig({
  // These are app level configs.
  base: '/bfui-vue/',
  title: 'BFUI',
  head: [
    ['link', { rel: 'shortcut icon', href: '/bfui-vue/images/icons/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/bfui-vue/manifest.json' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/bfui-vue/images/icons/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/bfui-vue/images/icons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/bfui-vue/images/icons/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/bfui-vue/images/icons/safari-pinned-tab.svg',
        color: '#0d3eed',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: '/bfui-vue/images/icons/browserconfig.xml',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['script', { type: 'text/javascript', src: '/bfui-vue/js/iconfont.js' }],
  ],
  appearance: true,
  lastUpdated: true,
  // Theme related configurations.
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [{ icon: 'github', link: 'https://github.com/BF-Teams/bfui-vue' }],
    outline: [2, 3],
  },
  locales: {
    root: {
      lang: 'zh',
      label: '中文简体',
      link: '/zh/',
      description: '一款简洁大方的前端 UI 组件库',
      titleTemplate: 'BFUI 文档',
      // Theme related configurations.
      themeConfig: {
        nav: navbarZh,
        sidebar: sidebarZh,
        outlineTitle: '本页目录',
        editLink: {
          pattern: 'https://github.com/BF-Teams/bfui-vue/edit/main/docs/:path',
          text: '为此页提供修改建议',
        },
        lastUpdatedText: '最后编辑时间',
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
        footer: {
          message: '根据MIT许可证发布',
          copyright: 'Copyright © 2023-present <a href="https://github.com/BF-Teams/" target="_blank" rel="noreferrer">BF-Teams</a>',
        },
      },
    },
    en: {
      lang: 'en', // 可选，将作为“lang”属性添加到“html”标签上
      label: 'English',
      link: '/en/', // 默认是 /en/ -- 显示在导航栏翻译菜单上，可以是外部的
      description: 'A Vue.js 3.x UI Components Library.',
      titleTemplate: 'BFUI Docs',
      // Theme related configurations.
      themeConfig: {
        nav: navbarEn,
        sidebar: sidebarEn,
        outlineTitle: 'On this page',
        editLink: {
          pattern: 'https://github.com/BF-Teams/bfui-vue/edit/main/docs/:path',
          text: 'Suggest changes to this page',
        },
        lastUpdatedText: 'Updated Date',
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2023-present <a href="https://github.com/BF-Teams/" target="_blank" rel="noreferrer">BF-Teams</a>',
        },
      },
    },
  },
});
