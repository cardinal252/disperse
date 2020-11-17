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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        spaceId: "xjldg4gmgybd",
        accessToken: "JfTMtpLJSnjPr102b0auocxPEDY_eW4NERfphLREmWw"
      },
    },
  ],
}
