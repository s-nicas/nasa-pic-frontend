import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhoto } from '../actions/picActions'
import Photos from '../components/pictures/Photos'
import InformationPopOver from '../components/pictures/InformationPopOver'
import CommentsContainer from './CommentsContainer'

class PhotosContainer extends Component {

  render(){
    return (
      <div>
        {Object.keys(this.props.photo).length !== 0 ? <Photos photoInfo={this.props.photo} /> : false }
        {Object.keys(this.props.photo).length !== 0 ? <InformationPopOver photo={this.props.photo}/> : false}
        {Object.keys(this.props.photo).length !==0 ? <CommentsContainer/> : false }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return { fetchPhoto: date => dispatch(fetchPhoto(date)) }
}

function mapStateToProps(state){
  return {photo: state.picture}
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer)
