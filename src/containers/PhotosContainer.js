import React, { Component } from 'react'
import SearchInput from './SearchInput'
import { connect } from 'react-redux'
import { fetchPhoto } from '../actions/picActions'
import PhotoInfo from './PhotoInfo'

class PhotosContainer extends Component {
  render(){
    return (
      <div>
        <SearchInput fetchPhoto={this.props.fetchPhoto}/>
        <PhotoInfo photoInfo={this.props.photo} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return { fetchPhoto: date => dispatch(fetchPhoto(date)) }
}

function mapStateToProps(state){
  return {photo: state.pictures}
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer)
