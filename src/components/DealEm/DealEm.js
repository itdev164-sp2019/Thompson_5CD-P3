import React, { Component } from 'react'
import styled from 'styled-components'

export default class DealEm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: ["Deal'em", "Draw "]
    }
  }
  


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
        <StyledDealEm >{this.state.message[this.props.step]}</StyledDealEm>
      </div>
    )
  }
}
