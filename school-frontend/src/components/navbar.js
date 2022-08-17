import React from 'react'
import { Navbar, Container, Nav, Dropdown, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


export default function NavBar() {
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));

  function logout() {
    localStorage.clear();
    navigate("/login");

  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='font-weight-bold' href="/">TECH</Navbar.Brand>
        <Nav className="me-auto">
          {
            localStorage.getItem('user-info') ?
              <>
                <Nav.Link href="/add">Add Products</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
              </> : <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/sign-up">Register</Nav.Link>
              </>
          }

          <Nav.Link>FAQ</Nav.Link>
        </Nav>
        {
          localStorage.getItem("user-info") ? <>
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item>Edit</NavDropdown.Item>
                <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav></> : <></>
        }
      </Container>
    </Navbar>
  )
}
