import React, { Component } from 'react'
import ACard from "../ACard"
import styled from 'styled-components'

export default class RowOfCards extends Component {
  render(step, ...props) {

    const StyledDiv = styled.div`
        display: flex;
        align-items:center;
        justify-content:center;
        margin-top:10px;
        margin-bottom:10px;
        `


      


    return (
      
      <StyledDiv >
        <ACard card={this.props.card1} id={0} onCardClick = {this.props.onCardClick} computer={this.props.computer} step={this.props.step}/>
        <ACard card={this.props.card2} id={1} onCardClick = {this.props.onCardClick} computer={this.props.computer} step={this.props.step}/>
        <ACard card={this.props.card3} id={2} onCardClick = {this.props.onCardClick} computer={this.props.computer} step={this.props.step}/>
        <ACard card={this.props.card4} id={3} onCardClick = {this.props.onCardClick} computer={this.props.computer} step={this.props.step}/>
        <ACard card={this.props.card5} id={4} onCardClick = {this.props.onCardClick} computer={this.props.computer} step={this.props.step}/>
      </StyledDiv>
    )
  }
}
