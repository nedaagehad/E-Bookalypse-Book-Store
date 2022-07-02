import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Button from 'react-bootstrap/Button';
import { NavLink, Link } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Container from "react-bootstrap/Container";
import { GoHome } from 'react-icons/go';
import { GiBookshelf } from 'react-icons/gi';
import { TbDiscount2 } from 'react-icons/tb';
import { BsSearch } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { VscSettings } from 'react-icons/vsc';

function NavBar() {



  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className='logo fs-4'>E-Bookalypse</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavLink to='/' className='p-1 text-decoration-none d-flex align-items-center me-3 nav-item'>
                <GoHome className='me-1' />
                Home</NavLink>

              <NavLink to='/categories' className='p-1 text-decoration-none d-flex align-items-center me-3 nav-item'>
                <GiBookshelf className='me-1' />
                Categories</NavLink>

              <NavLink to='/promotions' className='p-1 text-decoration-none d-flex align-items-center me-3 nav-item'>
                <TbDiscount2 className='me-1' />
                Promotions
              </NavLink>
            </Nav>
            <BsSearch className='nav-icon me-3' />
            <GiShoppingCart className="nav-icon me-3" style={{ width: '22px', height: '22px' }} />
            <div style={{height: '50px'}}>
              <button><Link className="text-decoration-none nav-btn text-light rounded px-2 py-1 w-100 h-100" to='/signUp'>Create Account</Link></button>
              <p className="text-light text-center" style={{fontSize: '12px'}}>Or <Link className="text-decoration-none nav-item" to='/login'>Sign in</Link></p>
            </div>
            <VscSettings className='nav-icon mx-3' />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
