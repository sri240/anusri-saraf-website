import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="anthology" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&family=Tangerine:wght@700&display=swap');
    </style>
    <p class="atitle">
      <center>anthology</center>
    </p>
    <img src="https://i.imgur.com/BChNzBY.png?1" alt="ink" id="ink"></img>
    <div id="another" class="another">
      <p>
        the idea for an anthology occurred to me in late 2018, as a freshman in
        high school. my goal in publishing my work online is to build up a
        collation of published work before creating a paper-and-ink version,
        complete with all poems, short stories, and illustrations by me.
      </p>
      <p>
        book of poetry: the complete book of poetry is a collection of my poetry
        and thoughts in verse. i aim to contribute to it consistently until it
        has substantial content for official publication
      </p>
    </div>
    <div class="thetable">
      <h2 class="storyheader">my stories</h2>
      <h4 class="storyheader2">{data.allMarkdownRemark.totalCount} stories</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div class="oppa" style={{ paddingBottom: "1px" }} key={node.id}>
          <a href={node.fields.slug} class="tablecontent">
            <h3 class="storyTitle">{node.frontmatter.title}</h3>
            <h4 class="storyTime">{node.fields.readingTime.text}</h4>
            <p class="excerpt">{node.excerpt}</p>
          </a>
        </div>
      ))}
      <br></br>
    </div>
    {/*<a href="/anthology/he-loves-me-not">
      <p>he loves me not</p>
    </a>
    <a href="/anthology/fading-lights">
      <p>fading lights</p>
    </a>
    <a href="/anthology/different-or-even-broken">
      <p>different, or even broken</p>
</a>*/}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            year
            readingTime {
              text
              words
            }
            slug
          }
          excerpt
        }
      }
    }
  }
`
