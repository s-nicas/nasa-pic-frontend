import React, { Component } from 'react'
import { connect } from 'react-redux'
import InformationPopOver from '../components/InformationPopOver'
import CommentsInput from '../components/CommentsInput'
import Comments from '../components/Comments'

class CommentsContainer extends Component {

  render(){
    return (
      <div>
        {<Comments comments={this.props.comments} />  }
      </div>
    )
  }
}



function mapStateToProps(state){
  return {comments: state.comments}
}
export default connect(mapStateToProps)(CommentsContainer)
