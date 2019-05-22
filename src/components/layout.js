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
import {Link} from '../components/Link'

import Header from "./header"
import "./layout.css"
import {Drawer as MastheadDrawer} from '../components/MastheadDrawer'

const links = [
  {variant: 'contrast',
  to: 'test-one',
  text: 'Test1'},
  {variant: 'contrast',
  to: 'test-two',
  text: 'Test2'},
  {variant: 'contrast',
  to: 'test-three',
  text: 'Test3'}
]
export default class Layout extends React.Component{

  state = {
    drawerOpen: false,

  }


  render(){
    const{children} = this.props

    return(
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
          <main>
            <MastheadDrawer
              height="56px"
              width="900px"
              top="60px"
              open={this.state.drawerOpen}>
              {links.map((link, i) => (
                <Link key={i} variant={link.variant} href={link.to} fontSize={[0,1,2]}>
                  {link.text}
                  </Link>

              ))}
            </MastheadDrawer>
          {children}
          </main>
          <Footer >
            © {new Date().getFullYear()} G.H.T.
          </Footer>
        </div>
      </>
    )}
  />
  </ThemeProvider>
    )
  }
}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

