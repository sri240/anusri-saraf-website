module.exports = {
  //pathPrefix: "/sri240.github.io",
  siteMetadata: {
    title: `anusri saraf`,
    description: `a website about me: who i am and what i do.`,
    author: `@anusrisaraf`,
    keywords: [
      `anusri`,
      `saraf`,
      "programming",
      "gatsby",
      "music",
      "violin",
      "short stories",
      "writer",
      "leadership",
      "student",
      "bay area",
      "cybersecurity",
      "code red",
      "robotics",
      "bay",
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        pedantic: true,
        plugins: [`gatsby-remark-reading-time`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anusri-saraf`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#aee3e7`,
        theme_color: `#aee3e7`,
        display: `minimal-ui`,
        //icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
