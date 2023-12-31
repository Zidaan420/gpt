/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
// const fg = require('fast-glob');

// @ts-check

// const sidebarsItems = (type, deep = 1) =>
//   fg.sync(
//     [`docs/${type}/**/*.{mdx,md}`],
//     { ignore: ['**/_*.{mdx,md}'], deep }
//   ).map(i => i.match(/docs\/(.*)\.md/)[1]);

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  chatgpt: [
    {
      type: 'category',
      label: 'ChatGPT',
      link: {
        type: 'generated-index',
        title: 'Guides',
        slug: '/chatgpt',
        keywords: ['chatgpt'],
      },
      items: //sidebarsItems('chatgpt')
      //fix:make sidebar items in order
      [
        'chatgpt/install',
        'chatgpt/prompts',
        'chatgpt/faq',
        'chatgpt/config',
        'chatgpt/menu',
        'chatgpt/build',
      ],
    },
  ]
};

module.exports = sidebars;
