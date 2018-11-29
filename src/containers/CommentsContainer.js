import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Button } from 'reactstrap';
import { addComment } from '../actions/picActions'
import { connect } from 'react-redux'
import Comments from '../components/comments/Comments'
import CommentsForm from '../components/comments/CommentsForm'


 class CommentsContainer extends Component {

      state = {
        visible : false,
        title: '',
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

    handleOnCommentSubmit = (event) => {
      event.preventDefault()
      this.props.addComment(this.state.title, this.state.content, this.props.photo.date)
      this.setState({
        title: '',
        content: ''
      })
    }

    handleTitleOnChange = (event) => {
      this.setState({
        title: event.target.value
      })
    }

    handleContentOnChange = (event) => {
      this.setState({
        content: event.target.value
      })
    }

    render() {
        return (
            <section id='commentsView'>
              <Button className="buttonComment" onClick={this.openModal}>Comment</Button>
                <Modal id="commentView"
                  visible={this.state.visible}
                  width="600"
                  height="600"
                  effect="fadeInUp"
                  onClickAway={this.closeModal}
                  >

                  <div>
                    <button onClick={this.closeModal}>Close</button>

                    <h1>Comments</h1>

                    <CommentsForm
                      value={this.state.title}
                      handleTitleOnChange={this.handleTitleOnChange}
                      contentValue={this.state.content}
                      handleContentOnChange={this.handleContentOnChange}
                      handleOnCommentSubmit={this.handleOnCommentSubmit}
                    />

                    <Comments comments={this.props.comments} />

                  </div>
                </Modal>
            </section>
        );
    }
}

function mapStateToProps(state){
  return {
    photo: state.pictures,
    comments: state.comments
  }
}

export default connect(mapStateToProps, {addComment})(CommentsContainer)
