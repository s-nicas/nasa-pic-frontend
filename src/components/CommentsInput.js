import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Button } from 'reactstrap';
import { addComment } from '../actions/picActions'


export default class CommentsInput extends Component {

      state = {
        visible : false,
        title: '',
        content: ''
      }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    handleOnCommentSubmit =(event)=> {
      event.preventDefault()
    
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
            <section id='button'>
                <Button className="buttonComment" onClick={() => this.openModal()}>Comment</Button>
                <Modal
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1 >Comments</h1>
                          <form onSubmit={this.handleOnCommentSubmit}>
                            <label >
                              Title:
                              <input type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleTitleOnChange}/>
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
                        <a  onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}
