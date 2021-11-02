const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  getArticles().then(result => {
    return createPages(result.data.pages.nodes, './src/templates/article.js');
  });

  getBlogPosts().then(result => {
    return createPages(result.data.pages.nodes, './src/templates/blog.js');
  });  
 /* getMenuArticleB().then(function(result){
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
  }*/

  async function getArticles() {
    console.log('Writing the Articles');
    return await graphql(`
        query {
          pages: allContentfulArticlePage {
            nodes {
              slug
            }
          }
        } 
    `);
  }  

  async function getBlogPosts() {
    console.log('Writing the Blog Posts');
    return await graphql(`
        query {
          pages: allContentfulBlogPost {
            nodes {
              slug
            }
          }
        } 
    `);
  }    

  /*async function getMenuArticleF() {
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
  } */

  async function createPages(nodes, template){
    return Promise.all(nodes.map(async (edge, i) => {
      console.log(`Writing ${edge.slug}`)
      createPage({
        component: path.resolve(template),
        path: `/${edge.slug}`,
        context: {
          slug: edge.slug
        }
      })
    }));
  }
}
