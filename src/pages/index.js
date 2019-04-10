import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/labs-1/">Labs 1 - Start Up</Link> - 
    <Link to ='/labs-2/'>Labs 2 - oAuth and APIs</Link>
    <Link to='/labs-3/'>Labs 3 - Requirements wrap up</Link>
  </Layout>
)

export default IndexPage
