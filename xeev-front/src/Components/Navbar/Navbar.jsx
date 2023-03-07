import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">
        <img
          alt="Logo"
          src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png'}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Button variant="outline-secondary" className="ml-md-3">
          <i class="bi bi-person-fill mr-1"></i>
          Login
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;