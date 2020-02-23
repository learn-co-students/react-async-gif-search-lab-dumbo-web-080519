import React, { Component } from 'react';

export default class GifList extends Component {

  renderGifs = () => {
    return this.props.gifUrls.map((url, i) => {
      console.log(url);
      return (
        < li key={i} >
          <img src={ url } alt={ `${this.props.searchTerm } gif` }/>
        </ li >
      )
    });
  }

  render() {
    return (
      < ul >
        { this.renderGifs() }
      </ ul >
    )
  }

}
