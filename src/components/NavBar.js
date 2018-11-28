import React from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap'
import SignIn from './SignIn'

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/"><img src="https://api.nasa.gov/images/logo.png" alt="NASA logo" width="50" height="50"/>Photo Exploration</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={2} href="/search">
          Daily Photo Archive
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} >
          <SignIn />
        </NavItem>
      </Nav>
    </Navbar >
  )
}

export default NavBar
