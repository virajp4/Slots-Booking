import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" className="bg-body-secondary" fixed='top'>
        <Container>
          <Navbar.Brand href="/">Slots Booking</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/page1" className='nav-link'>Section A</Nav.Link>
              <Nav.Link href="/page2" className='nav-link'>Section B</Nav.Link>
              <Nav.Link href="/page3" className='nav-link'>Section C</Nav.Link>
              <Nav.Link href="/page4" className='nav-link'>Section D</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            <Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
