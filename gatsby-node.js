/* eslint-disable @typescript-eslint/no-var-requires */
const _ = require('lodash')
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/Idea.tsx`)
  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
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

  // Create idea post pages.
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
        highlight: node.frontmatter.highlight,
        shadow: node.frontmatter.shadow,
      },
    })
  })

  // Create Tag pages
  const tagPagesTemplate = path.resolve('src/templates/Tag.tsx')
  let tags = []
  result.data.allMdx.edges.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  tags = _.uniq(tags)
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`
    createPage({
      path: tagPath,
      component: tagPagesTemplate,
      context: {
        tag,
      },
    })
  })
}
