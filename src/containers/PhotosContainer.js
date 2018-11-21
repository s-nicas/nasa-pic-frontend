import React, { Component } from 'react'
import SearchInput from './SearchInput'
import { connect } from 'react-redux'
import { fetchPhoto } from '../actions/picActions'


class PhotosContainer extends Component {
  render(){
    return (
      <div>
        <SearchInput fetchPhoto={this.props.fetchPhoto}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return { fetchPhoto: date => dispatch(fetchPhoto(date)) }
}

function mapStateToProps(state){
  return {photos: state.pictures}
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer)
