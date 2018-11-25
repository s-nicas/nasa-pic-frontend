import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMarsPhotos } from '../actions/picActions'
import MarsPictures from './MarsPictures'

class MarsContainer extends Component {

  render(){
    return(
      <div>
        <MarsPictures pictures={this.props.photos}/>
      </div>
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
