import React, { Component } from 'react'
import styled from 'styled-components'
import ImageOfCards from "../ImageOfCards"

export default class ACard extends Component {



  handleClick = () => {
    
    if(!this.props.computer)
    this.props.onCardClick(this.props.id)
  }


  render(props) {

    const StyledImg = styled.img`
        flex: 20%;
        padding: 5px;
        margin: 5px;
        ${this.props.computer ? `cursor: default;` : `cursor: pointer;`} `


    return (
      <div>
        <StyledImg src={ImageOfCards[this.props.card]} alt="" onClick={()=>this.handleClick()} />
      </div>
    )
  }
}
