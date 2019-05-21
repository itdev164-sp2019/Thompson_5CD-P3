import React from 'react'
import {BaseContainer} from '../BaseContainer'
import styled from 'styled-components'

const StyledFooter = styled(BaseContainer)`
${props => props.theme.defaults.footer}`

export const Footer = props => <StyledFooter {...props} />