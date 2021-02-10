const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    
    const CMSpage = await graphql(`
        query {
            allContentfulContentType {
              edges {
                node {
                  name
                }
              }
            }
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

    const newpagetemplate = `{page.data.allContentfulContentType.edges.node.name}`;
    
    const page = CMSpage

    page.data.allContentfulEntry.edges.forEach((edge) => {
       
      var template = { newpagetemplate };

        switch(template) {
          case 'TCarticle':
          template = './src/templates/TSarticle.js';
          break;
          case 'Template2':
          template = './src/templates/LinesCalls.js';
          }

        createPage({
            component: path.resolve(template),
            path: `/${edge.node.slug}`,
            context: {
                slug: edge.node.slug    
            }
        })
    })
}
