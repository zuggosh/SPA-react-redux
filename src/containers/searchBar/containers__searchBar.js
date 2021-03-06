import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchArtist } from '../../actions/getArtistInfo';
import { fetchArtistTracks } from '../../actions/getArtistTracks';
import { fetchArtistAlbums } from '../../actions/getArtistAlbums';

import './searchBar.scss';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { value: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({ value: e.target.value });
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchArtist(this.state.value);
    this.props.fetchArtistTracks(this.state.value);
    this.props.fetchArtistAlbums(this.state.value);
    this.setState({value: ''});
  }

  render (){
    return(
      <div className="searchBar">
        <form onSubmit={this.onFormSubmit} className="searchBar__form">
          <input
              placeholder="enter artist... "
              className="searchBar__input"
              value={this.state.value}
              onChange={this.onInputChange}
          />
          <div className="searchBar__btnWrapper">
              <button type="submit" className="searchBar__btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArtist: bindActionCreators(fetchArtist, dispatch),
    fetchArtistTracks: bindActionCreators(fetchArtistTracks, dispatch),
    fetchArtistAlbums: bindActionCreators(fetchArtistAlbums, dispatch)
  };
}

export default connect(null, mapDispatchToProps) (SearchBar);
