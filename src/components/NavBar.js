import React from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/"><img src="https://api.nasa.gov/images/logo.png" alt="NASA logo" width="50" height="50"/>Photo Exploration</Link>
        </Navbar.Brand>
      </Navbar.Header>
        <Link to="/search" eventKey={2} >
          Daily Photo Archive
        </Link>
        <Link to="/photos" eventKey={3}>
          Explore Photos
        </Link>
    </Navbar >
  )
}

export default NavBar
