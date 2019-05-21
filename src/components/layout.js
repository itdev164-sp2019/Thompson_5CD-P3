/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import {ThemeProvider} from 'styled-components'
import {Green as theme} from '../themes/Green'

import {Footer} from '../components/Footer'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <Footer >
            © {new Date().getFullYear()} G.H.T.
          </Footer>
        </div>
      </>
    )}
  />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
