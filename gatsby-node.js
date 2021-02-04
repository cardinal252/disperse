const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const CMSpage = await graphql(`
        query {
            allContentfulEntry {
                edges {
                  node {
                    ... on ContentfulTSarticle {
                      slug
                    }
                    ... on ContentfulLCarticles {
                      slug
                    }
                  }
                }
              }   
        }  
    `)
    const page = CMSpage

    page.data.allContentfulEntry.edges.forEach((edge) => {
        createPage({
            component: path.resolve('./src/templates/TSarticle.js'),
            path: `/${edge.node.slug}`,
            context: {
                slug: edge.node.slug    
            }
        })
    })
}
