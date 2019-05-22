import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {IconButton} from "../components/Button"
import {DotsVerticalRounded as Dots} from 'styled-icons/boxicons-regular'

const Header = ({ siteTitle, onClick1}) => (
  <header
    style={{
      background: `#D4AF37`,
      marginBottom: `1rem`,
      height: `60px`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.75rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#6f580a`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <IconButton icon={<Dots />} onClick={() => onClick1()}></IconButton>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
