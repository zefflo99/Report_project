import { defineConfig } from 'vitepress'

// Will be displayed in left sidebar and navigation
const links = [
  { text: 'Introduction', link: '/introduction' },
  { text: 'Languages', items: [
    { text: 'JavaScript', link: '/languages/javascript'},
      { text: "Html", link: '/languages/html'},
      { text: "Rust", link: '/languages/Rust'},
      { text: "Java", link: '/languages/Java'},
      { text: "PHP", link: '/languages/php'},
  ]},
  { text: 'Projects', items: [
    { text: 'Rust todo list', link: '/projects/rust-todo'},
      { text: 'html-WebSite-Static', link: '/projects/html-WebSite-Static'},
      { text: 'Tic-Tac-Toe', link: '/projects/Tic-Tac-Toe-Java'},
      { text: 'Grade-View', link: '/projects/Grade-View-JS'},
      { text: 'Grade-View', link: '/projects/Grade-View-react'},
      { text: 'Todo-list-php', link: '/projects/Todo-list-php'},
  ]},

  { text: 'FrameWork', items: [
      {text: 'React', link: '/framework/react'},
  ]}
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Update your title and description with username
  title: "My Progress Report - Zefflo99",
  description: "The training report outlines all the skills acquired during the CFC of computer scientist applications development.",
  cleanUrls: true,
  lang: 'en',
  base: "/progress-report/",
  lastUpdated: true,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      ...links,
      { text: 'How to', link: '/how-to-use' }
    ],

    outline: [2,3],
    sidebar: [
      ...links,
      {
        text: 'Others',
        items: [
          { text: 'How to use', link: '/how-to-use'}
        ]
      }
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      // Replace link with yor own GitHub repo or github profile
      { icon: 'github', link: 'https://github.com/zefflo99' }
    ],

    editLink: {
      // Change first part of path to your repo name
      pattern: 'https://github.com/jobtrek/progress-report/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    }
  }
})

