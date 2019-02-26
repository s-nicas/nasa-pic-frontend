import React, {Component} from 'react';
import { fetchTodaysPhoto } from '../actions/picActions';
import Photos from '../components/pictures/Photos';
import { connect } from 'react-redux';
import InformationPopOver from '../components/pictures/InformationPopOver';
import CommentsContainer from '../containers/CommentsContainer';


class Home extends Component {

  state ={
    redirect:false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  }

  componentDidMount() {
    this.props.fetchTodaysPhoto();
  }

  componentDidUpdate(prevProps) {
    if (this.props.photo !== prevProps.photo) {
      this.props.fetchTodaysPhoto();
    }
  };

    render() {
      return (
        <div>
          <Photos photoInfo={ this.props.photo } />
          <InformationPopOver photo={ this.props.photo } />
          <CommentsContainer />
        </div>
      );
    }
}

function mapDispatchToProps( dispatch ){
  return { fetchTodaysPhoto: () => dispatch( fetchTodaysPhoto() ) }
}


function mapStateToProps( state ){
  return { photo: state.picture }
}

export default connect( mapStateToProps, mapDispatchToProps )( Home )
