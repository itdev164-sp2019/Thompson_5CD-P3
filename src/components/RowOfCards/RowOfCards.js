import React, { Component } from 'react'
import ACard from "../ACard"
import styled from 'styled-components'

export default class RowOfCards extends Component {
  render(...props) {

    const StyledDiv = styled.div`
        display: flex;
        align-items:center;
        justify-content:center;
        margin-top:10px;
        margin-bottom:10px;
        `
    return (
      
      <StyledDiv  >
        <ACard card={this.props.card1} />
        <ACard card={this.props.card2} />
        <ACard card={this.props.card3} />
        <ACard card={this.props.card4} />
        <ACard card={this.props.card5} />
      </StyledDiv>
    )
  }
}
