import { defineConfig } from 'vitepress'
import { join } from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SAP CAP Knowledge Base",
  description: "Guide, tutorial e tanto altro riguardo SAP CAP",
  srcDir: 'src',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Tutorials',
        collapsed: true,
        items: [
          { text: 'Inserire una tabella', link: '/tutorials/inserire-tabella' },
          { text: 'Pulsanti', link: '/tutorials/pulsanti' },
          { text: 'Importare elementi', link: '/tutorials/importare-elementi' },
          { text: 'Usare un servizio', link: '/tutorials/call-functions' },
          { text: "Update di una entity", link: "/tutorials/update-entity" }
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
