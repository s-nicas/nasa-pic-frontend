import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhoto } from '../actions/picActions'
import PhotoInfo from './PhotoInfo'
import InformationPopOver from './InformationPopOver'

class PhotosContainer extends Component {

  render(){
    return (
      <div>
        {Object.keys(this.props.photo).length !== 0 ? <PhotoInfo photoInfo={this.props.photo} /> : true }
        {Object.keys(this.props.photo).length !== 0 ? <InformationPopOver photo={this.props.photo}/> : false}
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
