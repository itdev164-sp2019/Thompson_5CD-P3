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
        ${(...props) => this.props.computer ? `
        top:-10px;
        right:-10px;
        `:`
        bottom:-10px;
        left:-10px;
        `}
        `

    


    return (
      <div>
        <StyledText >{`${this.props.score}/${this.props.games}`}</StyledText>
      </div>
    )
  }

  



}
