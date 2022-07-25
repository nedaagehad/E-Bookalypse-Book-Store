import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { GoHome } from 'react-icons/go';
import { GiBookshelf } from 'react-icons/gi';
// import { TbDiscount2 } from 'react-icons/tb';
import { BsSearch } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
// import { VscSettings } from 'react-icons/vsc';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import './Navbar-module.css';
// import { BsSearch } from 'react-icons/bs';
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {

  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled((s) => !s);
  }

  return (
    <>
      <Navbar sticky="top" className="shadow-sm py-lg-0 py-md-1" bg={toggled ? "dark" : "light"} variant={toggled ? "dark" : "light"} expand="lg">
        <Container fluid>
          <Navbar.Brand className='logo fs-4'>E-Bookalypse</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavLink to='/' className={`fw-bold text-decoration-none d-flex align-items-center me-3 nav-item${toggled ? "-night" : ""}`}>
                <GoHome className='me-1' />
                Home</NavLink>

              <NavLink to='/categories' className={`fw-bold text-decoration-none d-flex align-items-center me-3 nav-item${toggled ? "-night" : ""}`}>
                <GiBookshelf className='me-1' />
                Categories</NavLink>

              <NavLink to='/promotions' className={`fw-bold text-decoration-none d-flex align-items-center me-3 nav-item${toggled ? "-night" : ""}`}>
                <TbShoppingCartDiscount className='me-1' />
                Promotions
              </NavLink>
            </Nav>
            {/* <BsSearch className={`nav-icon${toggled ? "-night" : ""} me-3`} /> */}
            <SearchBar className={`nav-icon${toggled ? "-night" : ""} me-3`} />
            <GiShoppingCart className={`nav-icon${toggled ? "-night" : ""} me-3`} style={{ width: '22px', height: '22px' }} />
            <div className="login-section" style={{height: '30px'}}>
              <button><Link className="text-decoration-none nav-btn text-light rounded px-2 py-1 w-100 h-100" to='/signUp'>Create Account</Link></button>
              <p className={`fw-bold ${toggled ? "text-light" : "text-dark"} text-center`} style={{fontSize: '12px'}}>Or <Link className={`text-decoration-none nav-item${toggled ? "-night" : ""} `} to='/login'>Sign in</Link></p>
            </div>
            {/* <VscSettings className='nav-icon mx-3' /> */}
            <ThemeToggler toggled={toggled} onClick={handleClick} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
