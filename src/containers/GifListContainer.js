import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    searchTerm: '',
    gifUrls: []
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    // console.log(evt);
    // console.log(evt.target);
    // console.log(evt.target.search);
    // console.log(evt.target.search.value);
    const slug = evt.target.search.value
    fetch(`http://api.giphy.com/v1/gifs/search?q=${slug}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(info => {
        // console.log(dataArr);
        const urls = info.data.map(dataObj => {
          return dataObj.images.original.url;
        });
        this.setState({
          searchTerm: slug,
          gifUrls: urls.slice(0,3)
        })
      })
  }

  render() {
    console.log(this.state);
    return (
      < React.Fragment >
        < GifSearch handleFormSubmit={ this.handleFormSubmit } />
        < GifList gifUrls={ this.state.gifUrls } />
      </ React.Fragment >
    )
  }

}
