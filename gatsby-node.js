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
              section {
                id
              }
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
            id: content.id,
            sectionId: content.section.id
          }
        })
    });
  }  
}
