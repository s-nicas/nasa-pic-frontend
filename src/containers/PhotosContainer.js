import React, { Component } from 'react'
import SearchInput from './SearchInput'
import { connect } from 'react-redux'
import { fetchPhoto } from '../actions/picActions'
import App from '../App.js'


class PhotosContainer extends Component {
  render(){
    return (
      <div>
      <SearchInput fetchPhoto={this.props.fetchPhoto()}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return { fetchPhoto: () => dispatch(fetchPhoto()) }
}

function mapStateToProps(state){
  return {photos: state.pictures}
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer)
