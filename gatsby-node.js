const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  getTSArticles().then(function(result){
    createPages(result.data.allContentfulTSarticle.nodes, './src/templates/TSarticle2.js');
  });
  getLCArticles().then(function(result){
    createPages(result.data.allContentfulLCarticles.nodes, './src/templates/TSarticle.js');
  });

  async function getLCArticles() {
    console.log('Writing the ls articles');
    return await graphql(`
        query {
          allContentfulLCarticles {
            nodes {
              slug
            }
          }
        } 
    `);
  }

  async function getTSArticles() {
    console.log('Writing the ts articles');
    return await graphql(`
        query {
          allContentfulTSarticle {
            nodes {
              slug
            }
          }
        } 
    `);
  }  

  async function createPages(nodes, template){
    return await nodes.forEach((content) => {
      createPage({
        component: path.resolve(template),
        path: `/${content.slug}`,
        context: {
          slug: content.slug
        }
      })
    })
  }
}
