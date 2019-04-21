module.exports = {
  pathPrefix:'/assignment/proj3/public',
  siteMetadata: {
    title: `Five Card Draw`,
    description: `Final project for ITDEV-164-600. Simple 5 card draw game that is played against the users device.`,
    author: `Grant Thompson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        name: `five-card-draw`,
        short_name: `♠ Five Card Draw ♠`,
        start_url: `/`,
        background_color: `#6f580a`,
        theme_color: `#6f580a`,
        display: `minimal-ui`,
        icon: `src/components/imageofcards/images/sa.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
