import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulMyBlogs.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <div className="wrapper">
        <h1>{"Here's a list of all blogposts!"}</h1>
        <div className="blogposts">
          {blogPosts.map(({ node: post }) => (
            <ul key={post.id}>
              <li>
                <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                <span>{post.tags}</span>
              </li>
              <img src={post.avtar.fluid.src} alt="" />
            </ul>
          ))}
          <span className="mgBtm__24" />
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPosts

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulMyBlogs {
      edges {
        node {
          id
          slug
          title
          tags
          childContentfulMyBlogsContentRichTextNode {
            content
          }
          avtar {
            fluid {
              src
            }
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
