import React from "react"
import GameContainer from "../components/gameContainer"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="5CD" keywords={[`gatsby`, `application`, `react`]} />
    <GameContainer />
  </Layout>
  
)

export default IndexPage
