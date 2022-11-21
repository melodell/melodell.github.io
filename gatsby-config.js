/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Melina O'Dell`,
    description: `Melina O'Dell`,
    siteUrl: `https://melodell.github.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    }
  ],
}
