import React from "react"
import GameContainer from "../components/gameContainer"

import Ad from "../components/Ads"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="5CD" keywords={[`gatsby`, `application`, `react`]} />
    <GameContainer />
    <Ad/>
  </Layout>
  
)

export default IndexPage
