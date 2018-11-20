import React, { Component } from 'react'
import SearchInput from './SearchInput'
import { connect } from 'react-redux'
import { fetchPhoto } from '../actions/picActions'

class PhotosContainer extends Component {
  render(){
    return (
      <div>
      <SearchInput photo={this.state.photo}  fetchPhoto={this.state.fetchPhoto()}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({
   photo: state.pictures
})

const mapDispatchToProps = dispatch => ({
  fetchPhoto: date => dispatch(fetchPhoto(date))
})
export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer)
