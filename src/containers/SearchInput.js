import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { fetchPhoto } from '../actions/picActions'
import { connect } from 'react-redux'
import { Col, Fa } from "mdbreact";
import { Redirect } from "react-router-dom";

class SearchInput extends Component {
   state = {date: '',
   redirect: false
  };




  handleOnChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }


  handleOnSubmit = (event) => {
    event.preventDefault()
     this.props.fetchPhoto(this.state.date);
     this.setState({
       date: '',
       redirect: true
     })
  }

  handleRedirect = () => {
    if (this.state.redirect){
      return <Redirect to="/photo"/>
    }
  }


   todaysDate = () => {
     function twoDigit(n) { return (n < 10 ? '0' : '') + n; }

     var now = new Date();
      return `${now.getFullYear()}-${twoDigit(now.getMonth() + 1)}-${twoDigit(now.getDate())}`;
  }

<<<<<<< HEAD


// TODO need to update date so that they can't pick future dates
  render(){
    return (
      <div className='header'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img src="https://api.nasa.gov/images/logo.png" alt="NASA logo" width="50" height="50"/>Image of the Day</a>
            </Navbar.Brand>
          </Navbar.Header>
              <FormGroup >
                <FormControl type="date"  max="2018-11-21" value={this.state.date} onChange={(event) => this.handleOnChange(event)}/>
              </FormGroup>{' '}
              <Button type="submit" onClick={(event) => this.handleOnSubmit(event)}>Search</Button>
        </Navbar >


=======
  render(){
    return (
      <div id="SearchBar">
        <Col md="6">
          <form className="form-inline mt-4 mb-4">
            <Fa icon="search" />
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="date"
              value={this.state.date}
              onChange={(event) => this.handleOnChange(event)}
              max={this.todaysDate()}
            />
            {this.handleRedirect()}
            <Button type="submit" onClick={(event) => this.handleOnSubmit(event)}>Search</Button>
          </form>
        </Col>
>>>>>>> lastWed
      </div>
    )
  }
}

<<<<<<< HEAD
export default SearchInput

// old form replaced with bootstrap
=======

function mapDispatchToProps(dispatch){
  return { fetchPhoto: date => dispatch(fetchPhoto(date)) }
}

function mapStateToProps(state){
  return {photo: state.pictures}
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)


// notes for later return <Redirect to={`/photos/${prevState.date}`}  />
>>>>>>> lastWed
