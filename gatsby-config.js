module.exports = {
  siteMetadata: {
    title: `Boulevarda Rental Properties`,
    description: `Find a rental home`,
    author: `Tauren Mills`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/boulevarda`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/boulevarda`,
      },
    ],
    // social: {
    //   twitter: {
    //     name: `Twitter`,
    //     url: `https://twitter.com/boulevarda`,
    //   },
    //   gitHub: {
    //     name: `GitHub`,
    //     url: `https://github.com/boulevarda`,
    //   },
    //   stackOverflow: {
    //     name: `GitHub`,
    //     url: `https://github.com/boulevarda`,
    //   },
    //   linkedIn: {
    //     name: `GitHub`,
    //     url: `https://github.com/boulevarda`,
    //   },
    //   resumeInPdf: {
    //     name: `GitHub`,
    //     url: `https://github.com/boulevarda`,
    //   }
    // }
  },
  plugins: [
    // {
      // resolve: `@christiandavid/gatsby-theme-byfolio`,
      // options: {
      //   basePath: `portfolio`,
      //   path: `src/`,
      //   imagesPath: `src/images/`,
      //   // iconFile: `src/images/icon.png`,
      //   siteTitle: `Portfolio`,
      //   siteUrl: `https://www.christianibarguen.com`,
      //   siteName: `Christian David Ibarguen`,
      //   siteShortName: `CD`,
      //   siteDescription: `This cool App contains information about my work experience as a software developer.`,
      //   siteKeywords: `Software developer, Full Stack Developer`,
      //   useMozJpeg: true,
      //   menuLinks: [
      //     // title = Link text
      //     // color = Animation background color on click
      //     { name: `home`, title: `Home`, color: `#000`, link: `` },
      //     {
      //       name: `experience`,
      //       title: `Experience`,
      //       color: `#3a3d98`,
      //       link: ``,
      //     },
      //     { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
      //     { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
      //   ],
      //   email: `christian@davidibarguen.com`,
      //   social: {
      //     // Usernames
      //     twitter: `ichristiandavid`,
      //     gitHub: `christiandavid`,
      //     stackOverflow: `967956/christian-david`,
      //     linkedIn: `in/christianibarguen/`,
      //     resumeInPdf: `/CV-19.pdf`, // url or local link
      //   },
      //   homePage: {
      //     availableToHire: true,
      //     dotColors: ["#0e3e1e", "#6CC551"],
      //     h1Text: `Hi!, I'm Christian David Ibarguen`,
      //     h2Text: `I'm a Full Stack Developer who loves working in Backend, I have
      //         worked as a software developer since 2006.`,
      //     typewriter: [
      //       `Coding is my passion 😎`,
      //       `I'm a 🍕 lover`,
      //       `I'm a pretty fast learner and always interested in learning new technologies 🤓`,
      //       `I think one of my values is the <strong>ability to resolve problems<strong>`,
      //       `I like to share what I know 👨‍🏫`,
      //       `In my non-coding hours, I'm at the 🏋‍`,
      //       `I also do design and UX work <span style='color: #27ae60;'>occasionally</span>`,
      //     ],
      //   },
      //   // Color for menu background
      //   shapeColor: {
      //     link: { color: "#171616", hover: "#fff" },
      //     shape1: {
      //       color: `#413f46`,
      //       opacity: `0.7`,
      //     },
      //     shape2: {
      //       color: `#e6e5ea`,
      //       opacity: `0.7`,
      //     },
      //     shape3: {
      //       color: `#fff`,
      //       opacity: `0.7`,
      //     },
      //   },
      //   footer: `heart`,
      // },
    // },
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
      },
    },
  ],
}
