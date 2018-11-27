import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhoto } from '../actions/picActions'
import PhotoInfo from '../components/PhotoInfo'
import InformationPopOver from '../components/InformationPopOver'
import CommentsInput from '../components/CommentsInput'

class PhotosContainer extends Component {

  render(){
    return (
      <div>
        {Object.keys(this.props.photo).length !== 0 ? <PhotoInfo photoInfo={this.props.photo} /> : false }
        {Object.keys(this.props.photo).length !== 0 ? <InformationPopOver photo={this.props.photo}/> : false}
        {Object.keys(this.props.photo).length !==0 ? <CommentsInput/> : false }
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
