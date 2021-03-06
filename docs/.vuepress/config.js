const mapArr = [
  '',
  '_.md',
  'A.md',
  'B.md',
  'C.md',
  'D.md',
  'E.md',
  'F.md',
  'G.md',
  'H.md',
  'I.md',
  'J.md',
  'K.md',
  'L.md',
  'M.md',
  'N.md',
  'O.md',
  'P.md',
  'Q.md',
  'R.md',
  'S.md',
  'T.md',
  'U.md',
  'V.md',
  'W.md',
  'X.md',
  'Y.md',
  'Z.md'
]

module.exports = {
  title: 'awesome-pronunciation',
  description: 'how to pronunciation',
  base: '/awesome-pronunciation/',
  locales: {
    '/': {
      lang: 'English',
      description: 'awesome-pronunciation'
    },
    '/zh/': {
      lang: '简体中文',
      description: 'awesome-pronunciation'
    }
  },
  themeConfig: {
    repo: 'guanpengchn/awesome-pronunciation',
    docsRepo: 'guanpengchn/awesome-pronunciation',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        lang: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        title: 'awesome-pronunciation',
        description: 'English introduction for awesome-pronunciation',
        nav: [
          { text: 'Content', link: '/content/' }
        ],
        sidebar: {
          '/content/': [
            {
              title: 'Content',
              collapsable: false,
              children: mapArr
            }
          ]
        }
      },
      '/zh/': {
        lang: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        title: 'awesome-pronunciation',
        description: 'awesome-pronunciation的中文介绍',
        nav: [
          { text: '内容', link: '/zh/content/' }
        ],
        sidebar: {
          '/zh/content/': [
            {
              title: '内容',
              collapsable: false,
              children: mapArr
            }
          ]
        }
      }
    }
  }
}