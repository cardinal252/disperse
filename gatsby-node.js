const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  getTSArticles().then(function(result){
    createPages(result.data.allContentfulTSarticle.nodes, './src/templates/TeleSys.js');
  });
  getLCArticles().then(function(result){
    createPages(result.data.allContentfulLCarticles.nodes, './src/templates/LinesCalls.js');
  });
  getMArticle().then(function(result){
    createPages(result.data.allContentfulMarticle.nodes, './src/templates/Mobile.js');
  });
  getConArticle().then(function(result){
    createPages(result.data.allContentfulConArticle.nodes, './src/templates/Connectivity.js');
  });
  getBSarticles().then(function(result){
    createPages(result.data.allContentfulBSarticles.nodes, './src/templates/Business.js');
  });
  getCsArticles().then(function(result){
    createPages(result.data.allContentfulCsArticles.nodes, './src/templates/Computer.js');
  });

  async function getBSarticles() {
    console.log('Writing the ls articles');
    return await graphql(`
        query {
          allContentfulBSarticles {
            nodes {
              slug
            }
          }
        } 
    `);
  }

  async function getConArticle() {
    console.log('Writing the ls articles');
    return await graphql(`
        query {
          allContentfulConArticle {
            nodes {
              slug
            }
          }
        } 
    `);
  }

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

  async function getMArticle() {
    console.log('Writing the ls articles');
    return await graphql(`
        query {
          allContentfulMarticle {
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

  async function getCsArticles() {
    console.log('Writing the ts articles');
    return await graphql(`
        query {
          allContentfulCsArticles {
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
