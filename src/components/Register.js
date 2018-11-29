// import React, { Component } from 'react';
// import Modal from 'react-awesome-modal';
// import { signUp } from '../actions/picActions'
// import { connect } from 'react-redux'
// // import { Button } from 'reactstrap';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//
//
//  class Register extends Component {
//
//       state = {
//         visible : false,
//         username: '',
//         password: ''
//       }
//
//     openModal() {
//         this.setState({
//             visible : true
//         });
//     }
//
//     closeModal() {
//         this.setState({
//             visible : false
//         });
//     }
//
//
//     handlePasswordChange = (event) =>{
//       this.setState({
//         password: event.target.value
//       })
//     }
//
//     handleOnUsernameChange = (event) =>{
//       this.setState({
//         username: event.target.value
//       })
//     }
//
//     handleOnSubmit = (event) => {
//       event.preventDefault()
//       this.props.signUp(this.state.username, this.state.password)
//     }
//
//     render() {
//         return (
//             <section >
//                 <Button id='Register' onClick={() => this.openModal()}>Register</Button>
//                 <Modal
//                     visible={this.state.visible}
//                     width="640"
//                     height="300"
//                     effect="fadeInUp"
//                     onClickAway={() => this.closeModal()}
//                 >
//                     <div>
//                         <h4> Register Now! </h4>
//                         <Form inline>
//                             <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//                               <Label className="mr-sm-2">Username</Label>
//                               <Input type="text" name="text" value={this.state.username} onChange={this.handleOnUsernameChange}/>
//                             </FormGroup>
//                             <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//                               <Label className="mr-sm-2">Password</Label>
//                               <Input type="password" name="password"   value={this.state.password}
//                                 onChange={this.handlePasswordChange}/>
//                             </FormGroup>
//                             <Button onClick={this.handleOnSubmit}>Submit</Button>
//                           </Form>
//                         <button onClick={() => this.closeModal()}>Close</button>
//                     </div>
//                 </Modal>
//             </section>
//         );
//     }
// }
// export default connect(null, {signUp})(Register)
