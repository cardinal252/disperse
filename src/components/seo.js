/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <title>{title}</title>

      {/* Favicons */}
      <link rel="shortcut icon" href="src/images/favicon.png"/>
      <link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="assets/images/apple-touch-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="assets/images/apple-touch-icon-114x114.png"/>
      
      {/* Web Fonts */}
      <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400italic,400,600,700' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Montserrat:700' rel='stylesheet' type='text/css'/>
      
      {/* Bootstrap core CSS */}
      <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
      
      {/* Icon Fonts */}
      <link href="/assets/css/font-awesome.min.css" rel="stylesheet"/>
      <link href="/assets/css/simple-line-icons.css" rel="stylesheet"/>
      
      {/* Plugins */}
      <link href="/assets/css/magnific-popup.css" rel="stylesheet"/>
      <link href="/assets/css/owl.carousel.css" rel="stylesheet"/>
      <link href="/assets/css/flexslider.css" rel="stylesheet"/>
      <link href="/assets/css/animate.min.css" rel="stylesheet"/>
      
      {/* Template core CSS */}
      <link href="/assets/css/vertical.min.css" rel="stylesheet"/>
      <link href="/assets/css/template.css" rel="stylesheet"/>      
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
