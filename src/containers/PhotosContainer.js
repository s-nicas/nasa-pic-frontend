import React, { Component } from 'react'
import SearchInput from './SearchInput'
import { connect } from 'react-redux'

class PhotosContainer extends Component {
  render(){
    return (
      <div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
   photo: state.pictures
})

const mapDispatchToProps = dispatch => ({
  fetchPhoto: date => dispatch({type: 'FETCH_PHOTO', date})
})
export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer)
