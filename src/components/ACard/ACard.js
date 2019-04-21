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

 

//${
// this.props.step === 0 || ( this.props.computer &&  this.props.step !== 0)  ? 
// (this.props.card === 52 || this.props.card === 53) &&  (Math.floor(Math.random( ) * 2) %  2 === 0) ? 
// `transform: rotate(180deg);`
// :`transform: rotate(0deg);`
//
//  :
//  ``
//  } 


        //${(this.props.card === 52 || this.props.card === 53) &&  (Math.floor(Math.random( ) * 2) %  2 === 0) ? 
        //`transform: rotate(180deg);`
        //:`transform: rotate(0deg);`}


    return (
      <div>
        <StyledImg src={ImageOfCards[this.props.card]} alt="" onClick={()=>this.handleClick()} />
      </div>
    )
  }
}
