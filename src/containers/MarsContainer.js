import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMarsPhotos } from '../actions/picActions'

class MarsContainer extends Component {

  render(){
    return(


    )
  }
}

  function mapDispatchToProps(dispatch){
    return { fetchMarsPhotos: () => dispatch(fetchMarsPhotos()) }
  }

  function mapStateToProps(state){
    return {photos: state.pictures}
  }

export default connect(mapStateToProps, mapDispatchToProps)(MarsContainer)
