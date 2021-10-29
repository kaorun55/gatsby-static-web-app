import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>工事中</h1>
    <p>
      <Link to="https://twitter.com/kaorun55">＠kaorun55</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
