import React, {Component} from 'react'
import { fetchTodaysPhoto } from '../actions/picActions'
import PhotoInfo from './PhotoInfo'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import InformationPopOver from './InformationPopOver'


class Home extends Component {

  state ={
    redirect: false
  }

  setRedirect = () =>{
    this.setState({
      redirect: true
    })
  }

  handleRedirect = () => {
    if (this.state.redirect){
      return <Redirect to='/search'/>
    }
  }



  componentDidMount(){
    this.props.fetchTodaysPhoto();
  }
    render(){


      return(
      <div>
        <PhotoInfo photoInfo={this.props.photo} />
        {this.handleRedirect()}
        <InformationPopOver photo={this.props.photo}/>
      </div>
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
