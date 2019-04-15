import React, { Component } from 'react'
import styled from 'styled-components'

export default class DealEm extends Component {



  render(...props) {

    const StyledDealEm = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.6em;
      color: black;
      font-weight: bold;
      pointer-events:none;
    `




    return (
      <div>
        <StyledDealEm >{this.props.text}</StyledDealEm>
      </div>
    )
  }
}
