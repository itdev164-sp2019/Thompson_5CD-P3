import React, { Component } from 'react'

import ImageOfCards from "../ImageOfCards"
import DealEm from "../DealEm"
import SkoreKeeper from '../SkoreKeeper'

export default class GameController extends Component {
  render() {
    return (
        <div style={{height:"15vh", width:"100vw", display:"table-cell", position:"relative"}}>
        <SkoreKeeper computer text={this.props.computerText} score={this.props.computerWins} games={this.props.gamesPlayed}/>
        <img src={ImageOfCards[54]} onClick={this.props.onDrawCardsClick} alt="" style={{ width:"53%", verticalAlign:"middle", cursor: "pointer"}} />
        <DealEm step={this.props.step} onDrawCardsClick={this.props.onDrawCardsClick}/>
        <SkoreKeeper text={this.props.playerText} score={this.props.theirWins} games={this.props.gamesPlayed}/>
        </div>
    )
  }
}
