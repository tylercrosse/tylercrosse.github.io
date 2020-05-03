/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/BlogPost.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog post pages.
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        highlight: node.frontmatter.highlight,
        shadow: node.frontmatter.shadow,
      },
    })
  })

  // // Create Tag pages
  // let tags = []
  //   result.data.allMarkdownRemark.edges.forEach(edge => {
  //     if (_.get(edge, `node.frontmatter.tags`)) {
  //       tags = tags.concat(edge.node.frontmatter.tags)
  //     }
  //   })
  //   tags = _.uniq(tags)
  //   tags.forEach(tag => {
  //     const tagPath = `/tags/${_.kebabCase(tag)}/`
  //     createPage({
  //       path: tagPath,
  //       component: tagPagesTemplate,
  //       context: {
  //         tag,
  //       },
  //     })
  //   })
  // })
}
