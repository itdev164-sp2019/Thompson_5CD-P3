import React, { Component } from 'react'
import styled from 'styled-components'
import ImageOfCards from "../ImageOfCards"

export default class ACard extends Component {






  render(...props) {



    const StyledImg = styled.img`
        flex: 20%;
        padding: 5px;
        `



    return (
      <div>
        <StyledImg src={ImageOfCards[this.props.card]} alt="" />
      </div>
    )
  }
}
