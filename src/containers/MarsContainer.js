import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMarsPhotos } from '../actions/picActions'
import MarsPictures from '../components/MarsPictures'

class MarsContainer extends Component {

  componentDidMount(){
    this.props.fetchMarsPhotos();
  }
  render(){
    return(
      <div>
        {Object.keys(this.props.photos).length !== 0 ?  <MarsPictures pictures={this.props.photos} /> : true}
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
