import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Button } from 'reactstrap';
import { addComment } from '../actions/picActions';
import { connect } from 'react-redux';
import Comments from '../components/comments/Comments';
import CommentsForm from '../components/comments/CommentsForm';
import { faTimes, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


 class CommentsContainer extends Component {

  state = {
    visible : false,
    author: '',
    content: ''
  }

  openModal = () => {
    this.setState({
    visible : true
    });
  }

  closeModal = () => {
    this.setState({
    visible : false
    });
  }

  handleAuthorOnChange = ( event ) => {
    this.setState({
    author: event.target.value
    });
  }

  handleContentOnChange = ( event ) => {
    this.setState({
    content: event.target.value
    });
  }

  handleOnCommentSubmit = ( event ) => {
    event.preventDefault()
    if ( this.validate() ){
      this.props.addComment( this.state.author, this.state.content, this.props.photo.date )
      this.setState({
        author: '',
        content: ''
      });
    }
  }

  validate = () => {
    if ( !this.state.author || !this.state.content ) {
      return alert( 'Woops - please complete the form' )
    }
    return true
  }


  render() {
    return (
      <section id='commentsView'>
        <div className="toolBar">
          <Button className="buttonComment" onClick={ this.openModal }><FontAwesomeIcon icon={faComments} /></Button>
        </div>
        <Modal id="commentView"
            visible={ this.state.visible }
            width="600"
            height="600"
            effect="fadeInUp"
            onClickAway={ this.closeModal }
        >

          <div>
            <button id='closeButton' onClick={ this.closeModal }><FontAwesomeIcon icon={faTimes} /></button>

              <h1>Tell us what you think</h1>

              <CommentsForm
                value={ this.state.author }
                handleAuthorOnChange={ this.handleAuthorOnChange }
                contentValue={ this.state.content }
                handleContentOnChange={ this.handleContentOnChange }
                handleOnCommentSubmit={ this.handleOnCommentSubmit }
              />
              <Comments comments={ this.props.comments } />
          </div>
        </Modal>
      </section>
    );
  }
}

function mapStateToProps( state ){
  return {
    photo: state.picture,
    comments: state.comments
  }
}

export default connect( mapStateToProps, { addComment } )( CommentsContainer )
