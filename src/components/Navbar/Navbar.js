import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from "react-bootstrap/Container";
import { GoHome } from 'react-icons/go';
import { GiBookshelf } from 'react-icons/gi';
import { TbDiscount2 } from 'react-icons/tb';

function NavBar() {
 

  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">E-Bookalypse</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        navbarScroll
      >
        <Nav.Link href="#action1">
          <GoHome />
          Home</Nav.Link>
        <Nav.Link href="#action2">
          <GiBookshelf />
          Categories</Nav.Link>
        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="#">
          <TbDiscount2 />
          Promotions
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
  );
}

export default NavBar;
