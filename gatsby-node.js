const path = require(`path`)
const chunk = require(`lodash/chunk`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions


  const posts = await getPosts(graphql, reporter)
  const pages = await getPages(graphql, reporter)

  pages.nodes.forEach(page => {
    if (page.slug !== 'blog') {
      createPage({
        path: page.uri,
        component: path.resolve('./src/templates/page.js'),
        context: {
          id: page.id
        }
      })
    }
  })

  posts.edges.forEach(singlePost => {
    return createPage({
      path: singlePost.post.uri,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: singlePost.post.id,
        next: singlePost.next,
        previous: singlePost.previous
      }
    })
  })



}



//Get all pages
async function getPages(graphql, reporter) {
  const pagesResult = await graphql(`
    query WpPages {
      allWpPage {
        nodes {
          id
          title
          slug
          uri
        }
      }
    }
  `)

  if (pagesResult.errors) {
    reporter.panicOnBuild(
      'There was an error loading your Single Page',
      pagesResult.errors
    )
    return
  }
  return pagesResult.data.allWpPage
}

//Get all Works CPT
async function getPosts(graphql, reporter) {
  const graphqlResults = await graphql(`
  query WpPost {
    allWpPost {
      edges {
        previous {
          id
          link
        }
        post: node {
          id
          title
          slug
          uri
        }
        next {
          id
          link
        }
      }
    }
  }
  `)

  if (graphqlResults.errors) {
    reporter.panicOnBuild(
      'There was an error loading your Work CPT',
      graphqlResults.errors
    )
    return
  }

  return graphqlResults.data.allWpPost
}