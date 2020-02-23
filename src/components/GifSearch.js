import React, { Component } from 'react';

export default class GifSearch extends Component {

  render() {
    return (
      < form onSubmit={ this.props.handleFormSubmit }>
        < label >Search for gifs</ label >
        < input type='text'
                name='search'
                onChange={ this.handleInputChange } />
        < input type='submit' value='Find Gifs' />
      </ form >
    )
  }

}
