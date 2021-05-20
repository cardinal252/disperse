module.exports = {
  siteMetadata: {
    title: `disperse`,
    description: `disperse`,
    author: `JCM`,
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
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `@contentful/rich-text-types`,
    `@contentful/rich-text-react-renderer`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-excerpts`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `disperse`,
        short_name: `disperse`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "0g51cwofkrus",
        accessToken: "VbH191mNYgFr6-tdCbEw1chl_INWUM9cXpji6AIpm00"
      },
    },
    `gatsby-plugin-fontawesome-css`,
  ],
}
