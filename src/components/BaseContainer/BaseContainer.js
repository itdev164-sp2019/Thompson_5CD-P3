import React from 'react'
import PropTypes from 'prop-types'
import {Flex,Box} from 'rebass'

export const BaseContainer = ({children, flex, ...props}) => {
    if (flex){
        return (
        <Flex {...props} className={props.className}>
            {children}
        </Flex>
        )
    }else{
        return (
            <Box {...props} className={props.className}>
                {children}
            </Box>
        )
    }
}

BaseContainer.propTypes = {
    flex: PropTypes.bool,
    children: PropTypes.node.isRequired
}