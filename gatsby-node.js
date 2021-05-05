const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  getMenuArticleA().then(function(result){
    createPages(result.data.allContentfulMenuArticleA.nodes, './src/templates/TeleSys.js');
  });
  getMenuArticleB().then(function(result){
    createPages(result.data.allContentfulMenuArticleB.nodes, './src/templates/LinesCalls.js');
  });
  getMenuArticleC().then(function(result){
    createPages(result.data.allContentfulMenuArticleC.nodes, './src/templates/Mobile.js');
  });
  getMenuArticleD().then(function(result){
    createPages(result.data.allContentfulMenuArticleD.nodes, './src/templates/Connectivity.js');
  });
  getMenuArticleE().then(function(result){
    createPages(result.data.allContentfulMenuArticleE.nodes, './src/templates/Business.js');
  });
  getMenuArticleF().then(function(result){
    createPages(result.data.allContentfulMenuArticleF.nodes, './src/templates/Computer.js');
  });

  async function getMenuArticleE() {
    console.log('Writing the ls articles');
    return await graphql(`
        query {
          allContentfulMenuArticleE {
            nodes {
              slug
            }
          }
        } 
    `);
  }

  async function getMenuArticleD() {
    console.log('Writing the ls articles');
    return await graphql(`
        query {
          allContentfulMenuArticleD {
            nodes {
              slug
            }
          }
        } 
    `);
  }

  async function getMenuArticleB() {
    console.log('Writing the ls articles');
    return await graphql(`
        query {
          allContentfulMenuArticleB {
            nodes {
              slug
            }
          }
        } 
    `);
  }

  async function getMenuArticleC() {
    console.log('Writing the ls articles');
    return await graphql(`
        query {
          allContentfulMenuArticleC {
            nodes {
              slug
            }
          }
        } 
    `);
  }

  async function getMenuArticleA() {
    console.log('Writing the ts articles');
    return await graphql(`
        query {
          allContentfulMenuArticleA {
            nodes {
              slug
            }
          }
        } 
    `);
  }  

  async function getMenuArticleF() {
    console.log('Writing the ts articles');
    return await graphql(`
        query {
          allContentfulMenuArticleF {
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
