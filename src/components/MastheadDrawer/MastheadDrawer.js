import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Flex} from 'rebass'
import {Nav} from '../Nav'

const Outer = styled(Flex)`
position: fixed;
top: ${props => props.top};
height: ${props => props.height};
width: 100%;
transition: ${({theme}) => theme.transitions.medium};
transform: ${props => (props.open ? 'translateY(0)' : 'translateY(-100%)')};
z-index: ${props => (props.open ? 9998 : -1)};
justify-content: center;
${props => props.theme.variants.mastheadDrawer[props.variant || 'primary']};
background-color: #6f580a;

`

const Spacer = styled.div`
position: static;
width: 974px;
height: ${props => props.heioght};
display: flex;
vertical-align: baseline;
float: none;
`

export const Drawer = ({variant, children, width, ...props}) => (
    <div style={{alignContent:"left"}}>
        <Outer {...props}>
            <Nav
                flex
                alignItems="center"
                justifyContent="space-evenly"
                width={width}
                {...props}>
               {children} 
            </Nav>
        </Outer>
        <Spacer {...props}/>
    </div>

)


Drawer.propTypes = {
    variant: PropTypes.string,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
