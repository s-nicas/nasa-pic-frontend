import React, {Component} from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'

class SearchInput extends Component {

  constructor(props) {
   super(props);
   this.state = {date: ''};
 }
  // state ={
  //   date: ''
  // }



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


      </div>
    )
  }
}

export default SearchInput

// old form replaced with bootstrap
