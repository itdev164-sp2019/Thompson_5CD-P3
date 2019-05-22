import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'rebass'
import styled from 'styled-components'

const Reset = styled(Button)`
background: none;
box-shadow: none;
font-weight: normal;
border-radius: 0;
cursor: pointer;
`

export const ButtonBase = ({ children, ...props}) => (
    <Reset { ...props}>{children}</Reset>
)

Button.propTypes = {
    children: PropTypes.node.isRequired
}