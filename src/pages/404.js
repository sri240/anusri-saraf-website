import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{
      color: 'white',
      fontFamily: "Courier New",
      fontWeight: 'lighter'
      }}>page not found :(</h1>
    <p>oh no! you must be lost...</p>
    <p>go back <Link to="/">home</Link> </p>
  </Layout>
)

export default NotFoundPage
