import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Story({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <a class="backarrow" href="/anthology">
        <p>← anthology</p>
      </a>
      <div class="thestory">
        <h1 class="pageStoryTitle">{post.frontmatter.title}</h1>
        <h4 class="pageStoryTitle2">
          {post.fields.readingTime.text} • {post.fields.readingTime.words} words
        </h4>
        <div
          class="storyText"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
      frontmatter {
        title
      }
      fields {
        readingTime {
          text
          words
        }
      }
    }
  }
`
