import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Button } from 'reactstrap';


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

    handleComment() {

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
                        <h1 >testjfjfjfjf</h1>
                          <form>
                            <label onSubmit={this.handleComment}>
                              Title:
                              <input type="text" name="title" onChange={this.handleTitle}/>
                            </label>
                            <label>
                              Content:
                              <input type="text_area" name="content" onChange={this.handleContent}/>
                            </label>
                            <input type="submit" value="Submit" />
                          </form>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}
