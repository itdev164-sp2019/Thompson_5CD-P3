import React, { Component } from 'react'
import RowOfCards from "../RowOfCards"
import GameController from "../GameController"



export default class GameContainer extends Component {

constructor(props) {
  super(props)

  this.state = {

    computerCards: [52,52,52,52,52],
    theirCards:[52,52,52,52,52],
    step: 0,
    dealEm: "Deal'em",
    gamesPlayed: 0,
    computerWins: 0,
    theirWins: 0,
     
  }
}




  render() {
    return (
      <div style={{textAlign:"center"}}>
        <RowOfCards card1={this.state.computerCards[0]} card2={this.state.computerCards[1]} card3={this.state.computerCards[2]} card4={this.state.computerCards[3]} card5={this.state.computerCards[4]}/>
        <GameController gamesPlayed={this.state.gamesPlayed} computerWins={this.state.computerWins} theirWins={this.state.theirWins} dealEm={this.state.dealEm}/>
        <RowOfCards card1={this.state.theirCards[0]} card2={this.state.theirCards[1]} card3={this.state.theirCards[2]} card4={this.state.theirCards[3]} card5={this.state.theirCards[4]}/>
        
      </div>
    )
  }
}
