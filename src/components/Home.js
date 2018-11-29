import React, {Component} from 'react'
import { fetchTodaysPhoto } from '../actions/picActions'
import Photos from './pictures/Photos'
import { connect } from 'react-redux'
import InformationPopOver from '../components/InformationPopOver'
import CommentsContainer from '../containers/CommentsContainer'


class Home extends Component {

  state ={
    redirect: false
  }

  setRedirect = () =>{
    this.setState({
      redirect: true
    })
  }

  componentDidMount(){
    this.props.fetchTodaysPhoto();
  }

    render(){
      return(
      <div >
        <Photos photoInfo={this.props.photo} />
        <InformationPopOver photo={this.props.photo}/>
        <CommentsContainer />
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
