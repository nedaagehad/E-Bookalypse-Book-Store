import React, { useState ,useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { GoHome } from 'react-icons/go';
import { GiBookshelf } from 'react-icons/gi';
import { GiShoppingCart } from 'react-icons/gi';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import SearchBar from "../SearchBar/SearchBar";
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styles from './NavBar.module.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/ebookalypse-logo.png';


function NavBar() {
  const authState = useSelector(state => state.auth.userRole)
  
  const [loggedIn, setLoggedIn] = useState(true);
  const theme = useSelector((state) => state.theme.currentTheme);
  useEffect(() => {
    if(authState !== ''){
      setLoggedIn(true)
    }else {
      setLoggedIn(false)
    }
  }, [authState]);
  // console.log(theme);

  return (
    <>
      {/* Navbar in Large Screen */}
      <Navbar sticky="top" className={`${styles.navbarLarge} shadow-sm py-lg-0 py-md-1`} bg={theme === "night" ? "dark" : "light"} variant={theme === "night" ? "dark" : "light"} expand="lg">
        <Container fluid>
          <Navbar.Brand className={`${styles.logo} fs-4`}><img className={styles.logoIMG} src={logo} /> E-Bookalypse</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavLink to='/' className={`fw-bold text-decoration-none d-flex align-items-center me-3 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                <GoHome className='me-1' />
                Home</NavLink>

              <NavLink to='/categories' className={`fw-bold text-decoration-none d-flex align-items-center me-3 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                <GiBookshelf className='me-1' />
                Categories</NavLink>

              <NavLink to='/promotions' className={`fw-bold text-decoration-none d-flex align-items-center me-3 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                <TbShoppingCartDiscount className='me-1' />
                Promotions
              </NavLink>
            </Nav>

            <SearchBar className={`${theme === "night" ? styles.navIconNight : styles.navIcon} me-4`} />
            <Link to='/cart'>

              <GiShoppingCart className={`${theme === "night" ? styles.navIconNight : styles.navIcon} me-3 mb-2 mb-lg-0`} style={{ width: '22px', height: '22px' }} />
            </Link>
            {loggedIn ?
              <div className={styles.profileIcon}>
                <Link to={`/profile`}>

                  <FaUserCircle className={styles.userIcon} />
                </Link>
              </div> :
              <div className={`${styles.loginSection} row`} style={{ height: '30px' }}>
                <button className="col-12"><Link className={`text-decoration-none ${styles.navBtn} text-light rounded px-2 py-1 w-100 h-100`} to='/signUp'>Create Account</Link></button>
                <p className={`col-12 fw-bold ${theme === "night" ? "text-light" : "text-dark"} text-center`} style={{ fontSize: '12px' }}>Or <Link className={`text-decoration-none ${theme === "night" ? styles.navItemNight : styles.navItem} `} to='/login'>Sign in</Link></p>
              </div>}
            <ThemeToggler />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* navbar in small screens */}
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} sticky="top" className={`shadow-sm d-lg-none`} bg={theme === "night" ? "dark" : "light"} variant={theme === "night" ? "dark" : "light"}>
          <Container fluid>
            <Navbar.Brand className={`${styles.logo} fs-4`}>E-Bookalypse</Navbar.Brand>
            <SearchBar className={`${theme === "night" ? styles.navIconNight : styles.navIcon} me-4`} />
            {loggedIn ?
              <div className={`${styles.profileIconMD} me-3`}>
                <FaUserCircle className={styles.userIcon} />
              </div> :
              <div className={`${styles.loginSection} row`} style={{ height: '30px' }}>
                <button className="col-12"><Link className={`text-decoration-none ${styles.navBtn} text-light rounded px-2 py-1 w-100 h-100`} to='/signUp'>Create Account</Link></button>
              </div>}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className={theme === "night" ? "bg-dark" : "bg-light"}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={theme === "night" ? "text-light" : "text-dark"}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={theme === "night" ? "bg-dark" : "bg-light"}>
                <Nav className="me-auto my-2 my-lg-0">
                  <NavLink to='/' className={`fw-bold text-decoration-none d-flex align-items-center me-3 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                    <GoHome className='me-1' />
                    Home</NavLink>

                  <NavLink to='/categories' className={`fw-bold text-decoration-none d-flex align-items-center me-3 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                    <GiBookshelf className='me-1' />
                    Categories</NavLink>

                  <NavLink to='/promotions' className={`fw-bold text-decoration-none d-flex align-items-center me-3 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                    <TbShoppingCartDiscount className='me-1' />
                    Promotions
                  </NavLink>
                  <ThemeToggler />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
