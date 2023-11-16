import { defineConfig } from 'vitepress'
import { join, resolve } from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SAP CAP Knowledge Base",
  description: "Un semplice sito che fornisce guide, tutorial, ecc. riguardo SAP CAP e UI5",
  srcDir: 'src',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorials/inserire-tabella' }
    ],

    sidebar: [
      {
        text: 'Tutorials',
        collapsed: true,
        items: [
          { text: 'Inserire una tabella', link: '/tutorials/inserire-tabella' },
          { text: 'Pulsanti', link: '/tutorials/pulsanti' },
          { text: 'Importare elementi', link: '/tutorials/importare-elementi' },
          {
            text: 'Chiamare funzioni',
            link: '/tutorials/call-functions'
          }
        ]
      },
      {
        text: 'FAQ',
        link: '/faq'
      },
      {
        text: 'Glossario',
        link: '/glossario'
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stefano-mecocci' }
    ]
  },
  markdown: {
    languages: [
      {
        id: 'cds',
        scopeName: 'source.cds',
        path: join(__dirname, 'syntaxes/cds.json'), // from https://github.com/SAP/cds-textmate-grammar
        aliases: ['cds']
      },
    ]
  }
})
