const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await buildArticlePages();

  await buildHubPages();

  async function buildArticlePages() {
    console.log('Writing the articles');
    const result = await await graphql(`
        query {
          articles: allContentfulArticlePage {
            nodes {
              id
              slug
            }
          }
        } 
    `);

    if(result.errors){
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }
  
    result.data.articles.nodes.forEach((content) => {
        var template='./src/templates/articlePageTemplate.js';
        console.log('Writing article page - ' + content.id);
        createPage({
          component: path.resolve(template),
          path: `/${content.slug}`,
          context: {
            id: content.id
          }
        })
    });
  }

  async function buildHubPages() {
    console.log('Writing the hubs');
    const result = await await graphql(`
        query {
          hubs: allContentfulMain {
            nodes {
              id
              slug
            }
          }
        } 
    `);
    
    if(result.errors){
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }
  
    result.data.hubs.nodes.forEach((content) => {
        var template='./src/templates/hubPageTemplate.js';
        console.log('Writing hub page - ' + content.id);
        createPage({
          component: path.resolve(template),
          path: `/${content.slug}`,
          context: {
            id: content.id
          }
        })
    });
  }  

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
