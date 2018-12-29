import React from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap'
import { Route, RouteHandler, Link, Redirect } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/"><img src="https://api.nasa.gov/images/logo.png" alt="NASA logo" width="50" height="50"/>Photo Exploration</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/search">
        <NavItem eventKey={2} >
          Daily Photo Archive
        </NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/photos">
          <NavItem eventKey={1} >
            Browse
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar >
  );

}

export default NavBar
