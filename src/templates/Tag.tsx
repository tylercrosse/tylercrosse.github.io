// import React from 'react'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout'

// interface TagTemplateProps {
//   // readonly data: BlogPostQuery
// }

// const Template: React.FC<any> = ({
//   data, // this prop will be injected by the GraphQL query below.
// }) => {
//   return (
//     <Layout>
//       <main className="relative py-10 bg-theme-p5">
//         <section className="max-w-screen-lg p-6 pt-32 mx-auto">
//           <div className="text-xl font-display text-theme-s9">All Tags</div>
//           {}
//         </section>
//       </main>
//     </Layout>
//   )
// }

// export default Template

// export const pageQuery = graphql`
//   query BlogPost($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       timeToRead
//       frontmatter {
//         date
//         path
//         title
//         description
//       }
//     }
//   }
// `
