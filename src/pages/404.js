import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 error" />
    <div class="gg">
      <h1
        style={{
          color: "white",
          fontFamily: "Courier New",
          fontWeight: "lighter",
        }}
      >
        page not found :(
      </h1>
      <p>oh no! you must be lost...</p>
      <a href="/" class="arrows4">
        <p>go back home →</p>
      </a>
    </div>
  </Layout>
)

export default NotFoundPage
