import { defineUserConfig, viteBundler } from 'vuepress';
import { recoTheme } from 'vuepress-theme-reco';
import codeBlockPlugin from '@bfehub/vuepress-plugin-code-block';
import path from 'path';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'useRequest',
  description: 'A library for manage your request for Vue + Composition API',
  head: [['link', { rel: 'icon', href: 'https://cn.vuejs.org/logo.svg' }]],
  base: '/vue-useRequest-docs/',
  dest: 'docs',
  theme: recoTheme({
    home: '/',
    repo: 'mahoushoujoarale/vue-useRequest',
    logo: '/logo.png',
    docsRepo: 'mahoushoujoarale/vue-useRequest-docs',
    navbar: [
      { text: '文档', link: '/document/guide' },
      { text: 'API参考', link: '/api/' },
      {
        text: '关于我',
        children: [
          { text: 'Github', link: 'https://github.com/mahoushoujoarale' },
          { text: '掘金', link: 'https://juejin.cn/user/3369351964272237/posts' },
          { text: '简介', link: '/aboutme/' },
          { text: '支持', link: '/donation/' },
        ],
      },
      { text: 'FAQ', link: '/faq/' },
      { text: 'ISSUES', link: 'https://github.com/mahoushoujoarale/vue-useRequest/issues' },
    ],
    series: {
      '/document/': [
        {
          text: '介绍',
          children: ['guide', 'quick-start'],
        },
        {
          text: '文档',
          children: ['options', 'basic', 'cache', 'cancel', 'race-condition', 'force-run', 'retry', 'lifecycle'],
        },
        {
          text: '兼容性',
          children: ['fetch', 'vue2'],
        },
      ],
    },
  }),
  plugins: [
    // @ts-ignore
    codeBlockPlugin(),
  ],
  bundler: viteBundler({
    viteOptions: {
      base: '/vue-useRequest-docs/',
    },
  }),
});
