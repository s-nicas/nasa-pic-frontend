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
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return { fetchPhoto: date => dispatch(fetchPhoto(date)) }
}

function mapStateToProps(state){
  return {photo: state.pictures}
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
