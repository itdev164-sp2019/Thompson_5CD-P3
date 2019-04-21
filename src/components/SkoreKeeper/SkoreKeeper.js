import React, { Component } from 'react'
import styled from 'styled-components'


export default class SkoreKeeper extends Component {



  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }




  render(...props) {


    const StyledText = styled.div`
        position:absolute;
        font-size:1.5em;
        font-weight:bold;
        color: #D4AF37;
        ${(...props) => this.props.computer ? `
        top:-20px;
        right:-5px;
        `:`
        bottom:-17px;
        left:-5px;
        `}
        `

    


    return (
      <div>
        <StyledText >{`${this.props.text} ${this.props.score}/${this.props.games}`}</StyledText>
      </div>
    )
  }

  



}
