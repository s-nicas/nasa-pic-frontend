import React, {Component} from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { fetchPhoto } from '../actions/picActions'
import { connect } from 'react-redux'
import { Col, Fa } from "mdbreact";

class SearchInput extends Component {
   state = {date: ''};


  handleOnChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }


  handleOnSubmit = (event) => {
    event.preventDefault()
     this.props.fetchPhoto(this.state.date);
     this.setState({
       date: ''
     })
  }

// TODO need to update date so that they can't pick future dates
  render(){
    return (
      <div >
        <Col md="6">
          <form className="form-inline mt-4 mb-4">
            <Fa icon="search" />
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="date"
              value={this.state.date}
              onChange={(event) => this.handleOnChange(event)}
            />
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
