import React, { Component } from 'react'

export default class Ads extends Component {

componentDidMount(){
    (window.adsbygoogle = window.adsbygoogle || []).push({});
}

  render() {
    return (
        <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-4102157633878115'
        data-ad-slot='12121212'
        data-ad-format='auto' />
    )
  }
}
