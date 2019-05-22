import React from 'react'
import PropTypes from 'prop-types'
import {Link as BaseLink} from 'rebass'
import styled from 'styled-components'

const StyledLink = styled(BaseLink)`
${props => props.theme.defaults.link}`

export const Link = ({href, children, ...props}) =>(
    <StyledLink href={href} {...props}>
        {children}
    </StyledLink>

)

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}