import React, { Component } from 'react';
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import { connect } from 'react-redux'
import {fetchAllPhotos} from '../actions/picActions'

class PicSlider extends Component {
  state = {
    images:[],
    currentIndex: 0
  }

  componentDidMount(){
    // this.props.fetchAllPhotos();
    // dispatch({type: 'FETCH_ALL_PHOTOS'});
    fetch(`http://localhost:3001/pictures`,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => this.setState({
      images: data
    }))
    // .then(data => dispatch({type: 'ADD_ALL_PHOTOS_TO_STATE', data: data }))
    // should i call the fetch request here? Or how should i update state?
  }

  addPhotos = () =>{
    this.setState({
      images: this.props.photos
    })
  }

  goToPrevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {

    return (
      <div className="slider">
      {
          this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))
        }

      <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
      <RightArrow goToNextSlide={this.goToNextSlide}/>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {photos: state.pictures}
}

export default connect(mapStateToProps, {fetchAllPhotos})(PicSlider)
