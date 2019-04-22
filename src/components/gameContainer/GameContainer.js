import React, { Component } from 'react'
import RowOfCards from "../RowOfCards"
import GameController from "../GameController"
import Game from '../../Helpers/Game'

//import firebase from 'firebase'
//import {DB_Config} from '../../Helpers/FBConfig'



export default class GameContainer extends Component {

constructor(props) {
  super(props)

  this.state = {

    computerCards: [52,52,52,52,52],
    computerDraw:[false,false,false,false,false],
    computerTempCards: [52,52,52,52,52],
    playerCards:[52,52,52,52,52],
    playerDraw:[false,false,false,false,false],
    playerTempCards: [52,52,52,52,52],
    usedCards: [],
    step: 0,
    dealEm: "Deal'em",
    gamesPlayed: 0,
    computerWins: 0,
    theirWins: 0,
    winnerString0: "",
    winnerString1: ""
     
  }
}

onCardClick = (arg1) =>{


  if(this.state.step !== 1){
    return
  }

  if(arg1 < 5){
    if(!this.state.playerDraw[arg1]){

      let playerTempCards= [...this.state.playerTempCards]
      playerTempCards[arg1] = 53

      let playerDraw = [...this.state.playerDraw]
      playerDraw[arg1] = true


      this.setState({
        playerTempCards,
        playerDraw
      })
      
    }else{


      let playerTempCards= [...this.state.playerTempCards]
      playerTempCards[arg1] = this.state.playerCards[arg1]

      let playerDraw = [...this.state.playerDraw]
      playerDraw[arg1] = false


      this.setState({
        playerTempCards,
        playerDraw
      })

    }
  }

}

checkCardsForDuplicate = (arg1, arg2) => {

  for(let i = 0; i < arg2.a.length; i++){
    if(arg2.a[i] === arg1){
      return true
    }
  }


  arg2.a = [...arg2.a, arg1]
  return false
}

onDrawCardsClick = () =>{
  
var arrayHolder = {
      a:this.state.usedCards,
      b:this.state.computerCards,
      c:this.state.playerCards,
      d:this.state.computerDraw}

  if(this.state.step === 0){

    
    var randomComputerCard = -1
    var randomPlayerCard = -1


    for (let i = 0; i < this.state.computerCards.length; i++){


      do {
        this.randomComputerCard = Math.floor(Math.random( ) * 52)
      } while (this.checkCardsForDuplicate(this.randomComputerCard, arrayHolder) );
      
        arrayHolder.b[i] = this.randomComputerCard

      do {
        this.randomPlayerCard = Math.floor(Math.random( ) * 52)
      } while (this.checkCardsForDuplicate(this.randomPlayerCard, arrayHolder));
      
      arrayHolder.c[i] = this.randomPlayerCard

    }



    

    //computer discard
    Game.checkComputerCards(arrayHolder.b, arrayHolder.d)

    //reset computer view cards to backsides
    let computerTempCards = [52,52,52,52,52]

    //show computer discarded cards
    Game.showComputerDicardedCards( arrayHolder.d ,computerTempCards)


    

    this.setState({
      usedCards: [...arrayHolder.a],
      computerCards: [...arrayHolder.b],
      playerCards: [...arrayHolder.c],
      playerTempCards:  [...arrayHolder.c],
      computerDraw: [...arrayHolder.d],
      computerTempCards,
      winnerString0: "",
      winnerString1: "",
      step: 1
    })

    

  }else if(this.state.step === 1){


    //console.log(this.state.computerCards)

    arrayHolder = {
      a:this.state.usedCards,
      b:this.state.computerCards,
      c:this.state.playerCards}

    //get new cards computer
    for(let i = 0; i < this.state.computerCards.length; i++ ){
      if(this.state.computerDraw[i]){
        do {
          this.randomComputerCard = Math.floor(Math.random( ) * 52)
        } while (this.checkCardsForDuplicate(this.randomComputerCard, arrayHolder) );
        
          arrayHolder.b[i] = this.randomComputerCard
      }
    }

    //get new cards player
    let tempPlayerCards = this.state.playerDraw
    let randomPlayerCard = -1

    for (let i = 0; i < this.state.playerDraw.length; i++){

      if(this.state.playerDraw[i]){
         do {
        this.randomPlayerCard = Math.floor(Math.random( ) * 52)
      } while (this.checkCardsForDuplicate(this.randomPlayerCard, arrayHolder));

      arrayHolder.c[i] = this.randomPlayerCard

      }

    }

    //let computerTempCards = this.state.computerCards

    console.log(`${this.state.computerDraw} comp`)
    console.log(`${this.state.playerDraw} player`)


    this.setState({
      computerTempCards: arrayHolder.b,
      computerCards: arrayHolder.b,
      usedCards: [],
      step:0,
      playerCards: arrayHolder.c,
      playerDraw: [false,false,false,false,false],
      computerDraw: [false,false,false,false,false],
      playerTempCards: arrayHolder.c,
    }, this.checkForWinner())



  }
}

checkForWinner = () => {
  let winner = Game.whoWonRound(this.state.computerCards, this.state.playerCards)

  if(winner >= 0){
    if(winner >= 10){


      let winnerString1 = ""

      switch (winner){
        case 19:
            winnerString1 = "Royal Flush";
            break;
        case 18:
            winnerString1 = "Straight Flush";
            break;
        case 17:
            winnerString1 = "Four of a Kind";
            break;
        case 16:
            winnerString1 = "Full House";
            break;
        case 15:
            winnerString1 = "Flush";
            break;
        case 14:
            winnerString1 = "Straight";
            break;
        case 13:
            winnerString1 = "Three of a Kind";
            break;
        case 12:
            winnerString1 = "Two Pair";
            break;
        case 11:
            winnerString1 = "One Pair";
            break;
        case 10:
            winnerString1 = "High Card";
            break;
            default:
                winnerString1 = "";

      }


      this.setState({
        gamesPlayed: this.state.gamesPlayed + 1,
        theirWins: this.state.theirWins + 1,
        winnerString1,
        winnerString0: ""
      })

    }else{


      let winnerString0 = ""

      switch (winner){
        case 9:
            winnerString0 = "Royal Flush";
            break;
        case 8:
            winnerString0 = "Straight Flush";
            break;
        case 7:
            winnerString0 = "Four of a Kind";
            break;
        case 6:
            winnerString0 = "Full House";
            break;
        case 5:
            winnerString0 = "Flush";
            break;
        case 4:
            winnerString0 = "Straight";
            break;
        case 3:
            winnerString0 = "Three of a Kind";
            break;
        case 2:
            winnerString0 = "Two Pair";
            break;
        case 1:
            winnerString0 = "One Pair";
            break;
        case 0:
            winnerString0 = "High Card";
            break;
        default:
            winnerString0 = "";
      }


      
      this.setState({
        gamesPlayed: this.state.gamesPlayed + 1,
        computerWins: this.state.computerWins + 1,
        winnerString1: "",
        winnerString0
      })

    }
  }else{

    this.setState({
      gamesPlayed: this.state.gamesPlayed + 1,
      winnerString1: "",
        winnerString0: ""
    })

  }

}


  render() {
    return (
      <div style={{textAlign:"center"}}>
        <RowOfCards computer={true}
                    card1={this.state.computerTempCards[0]} 
                    card2={this.state.computerTempCards[1]} 
                    card3={this.state.computerTempCards[2]} 
                    card4={this.state.computerTempCards[3]} 
                    card5={this.state.computerTempCards[4]}
                    step={this.state.step}
                    onCardClick = {(arg1)=>this.onCardClick(arg1)}/>
        <GameController gamesPlayed={this.state.gamesPlayed} 
                        computerText = {this.state.winnerString0}
                        computerWins={this.state.computerWins}
                        playerText = {this.state.winnerString1}
                        theirWins={this.state.theirWins} 
                        dealEm={this.state.dealEm}
                        step = {this.state.step}
                        onDrawCardsClick = {()=> this.onDrawCardsClick()}/>
        <RowOfCards 
                    computer={false}
                    card1={this.state.playerTempCards[0]}
                    card2={this.state.playerTempCards[1]} 
                    card3={this.state.playerTempCards[2]} 
                    card4={this.state.playerTempCards[3]} 
                    card5={this.state.playerTempCards[4]}
                    step={this.state.step}
                    onCardClick = {(arg1)=>this.onCardClick(arg1)}/>
        
      </div>
    )
  }
}
