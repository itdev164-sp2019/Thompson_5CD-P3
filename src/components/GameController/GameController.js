import React, { Component } from 'react'

import ImageOfCards from "../ImageOfCards"
import DealEm from "../DealEm"
import SkoreKeeper from '../SkoreKeeper'

export default class GameController extends Component {
  render(props) {
    return (
        <div style={{height:"10vh", width:"100vw", display:"table-cell", position:"relative"}}>
        <SkoreKeeper computer score={this.props.computerWins} games={this.props.gamesPlayed}/>
        <img src={ImageOfCards[54]} alt="" style={{ width:"53%", verticalAlign:"middle"}} />
        <DealEm text={this.props.dealEm} />
        <SkoreKeeper score={this.props.theirWins} games={this.props.gamesPlayed}/>
        </div>
    )
  }
}
