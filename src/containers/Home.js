import React, {Component} from 'react'
import { fetchTodaysPhoto } from '../actions/picActions'
import PhotoInfo from './PhotoInfo'
import { connect } from 'react-redux'


class Home extends Component {

  componentDidMount(){
    this.props.fetchTodaysPhoto();
  }
    render(){
      return(
        <PhotoInfo photoInfo={this.props.photo} />
      )
    }
}

function mapDispatchToProps(dispatch){
  return { fetchTodaysPhoto: () => dispatch(fetchTodaysPhoto()) }
}

function mapStateToProps(state){
  return {photo: state.pictures}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

//  yyyymmdd =() => {
//    function twoDigit(n) { return (n < 10 ? '0' : '') + n; }
//
//    var now = new Date();
//    return `${now.getFullYear()}- ${twoDigit(now.getMonth() + 1)}-${twoDigit(now.getDate())}`;
// }
