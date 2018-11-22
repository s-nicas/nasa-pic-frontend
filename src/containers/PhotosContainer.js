import React, { Component } from 'react'
import SearchInput from './SearchInput'
import { connect } from 'react-redux'
import { fetchPhoto } from '../actions/picActions'
import PhotoInfo from './PhotoInfo'
import PictureInfo from './Info'

class PhotosContainer extends Component {

  render(){
    return (
      <div>
        <SearchInput fetchPhoto={this.props.fetchPhoto}/>
        {Object.keys(this.props.photo).length !== 0 ? <PhotoInfo photoInfo={this.props.photo} /> : true }
        {Object.keys(this.props.photo).length !== 0 ? <PictureInfo photo={this.props.photo}/> : false}
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
