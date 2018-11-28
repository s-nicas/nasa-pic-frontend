import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Button } from 'reactstrap';
import { addComment } from '../actions/picActions'
import { connect } from 'react-redux'
import CommentsContainer from '../containers/CommentsContainer'


 class CommentsInput extends Component {

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
                <Button className="buttonComment" onClick={() => this.openModal()}>Comment</Button>
                <Modal id="commentView"
                    visible={this.state.visible}
                    width="600"
                    height="600"
                    effect="fadeInUp"
                    onClickAway={this.closeModal}
                >
                    <div>
                        <h1>Comments</h1>

                          <form onSubmit={this.handleOnCommentSubmit}>
                            <label >
                              Title:
                              <input type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleTitleOnChange}
                              />
                            </label>
                            <label>
                              Content:
                              <input type="text"
                                name="content"
                                value={this.state.content}
                                onChange={this.handleContentOnChange}/>
                            </label>
                            <input type="submit" value="Submit" />
                          </form>
                        <p>Some Contents</p>
                        <button onClick={this.closeModal}>Close</button>

                        {<CommentsContainer/>}

                    </div>
                </Modal>
            </section>
        );
    }
}

function mapStateToProps(state){
  return {photo: state.pictures}
}

export default connect(mapStateToProps, {addComment})(CommentsInput)
