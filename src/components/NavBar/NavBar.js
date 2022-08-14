import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { GoHome } from 'react-icons/go';
import { GiBookshelf } from 'react-icons/gi';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import SearchBar from "../SearchBar/SearchBar";
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import styles from './NavBar.module.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/ebookalypse-logo.png';
import { BsCart4 } from 'react-icons/bs';
import En from '../../assets/En.png';
import Ar from '../../assets/Ar.png';
import { changeLang } from '../../store/actions/language';
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import { booksApi } from '../../store/services';
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../Firebase/firebaseImage';



function NavBar() {
  const authState = useSelector(state => state.auth.userRole)

  const [getUserByID, response] = booksApi.useGetUserByIDMutation();

  const [loggedIn, setLoggedIn] = useState(true);
  const theme = useSelector((state) => state.theme.currentTheme);
  const lang = useSelector((state) => state.lang.currentLang);
  const dispatch = useDispatch();

  const [profileClicked, setProfileClicked] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [userImage, setUserImage] = useState("")

  useEffect(() => {
    if (authState !== '') {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [authState]);
  // console.log(theme);
 
  // useEffect(() => {
  //   getUserByID().then((res) => {
  //     // console.log("hi")
  //     // console.log(res.data.image)
  //     setUserImage(res.data.image)
  //     // console.log("userImage" + userImage);
  //   })

  //   // if(user.image){
  //     const starsRef = ref(storage, 'uploads/users/'+userImage);

  //     getDownloadURL(starsRef)
  //     .then((url) => {
  //         setProfilePic(url)
  //         // console.log("image" + url)
  //     })
  //   // }
  // }, [userImage])


  return (
    <>
      {['lg'].map((expand) => (
        <Navbar sticky="top" className='shadow-lg' key={expand} bg={theme === "night" ? "dark" : "light"} expand={expand} variant={theme === "night" ? "dark" : "light"}>
          <Container fluid>
            <Navbar.Brand className={`${styles.logo} fs-4`}><img className={styles.logoIMG} src={logo} />E-Bookalypse</Navbar.Brand>
            <div className="justify-content-start flex-grow-1 pe-3 align-items-center d-lg-none">
              <SearchBar />
            </div>
            <div className="justify-content-center align-items-center d-lg-none  me-3">
              <Link to='/cart'>
                <BsCart4 className={`${theme === "night" ? styles.navIconNight : styles.navIcon}`} style={{ width: '22px', height: '22px' }} />
              </Link>
            </div>
            <div className="align-items-center d-lg-none me-3">
              {loggedIn ?
                <div className={`${styles.profileIcon}`}>
                  <FaUserCircle className={styles.userIcon} onClick={() => { setProfileClicked(!profileClicked) }} />
                  {/* <img src={profilePic} className={styles.userIcon} onClick={() => { setProfileClicked(!profileClicked) }} /> */}
                  {profileClicked ? <ProfileDropDown /> : null}

                </div> :
                <div className={`${styles.loginSection} row`} style={{ height: '30px' }}>
                  <button className="col-12"><Link className={`text-decoration-none ${styles.navBtn} text-light rounded px-2 py-1 w-100 h-100`} to='/signUp'>Create Account</Link></button>
                  <p className={`col-12 fw-bold ${theme === "night" ? "text-light" : "text-dark"} text-center`} style={{ fontSize: '12px' }}>Or <Link className={`text-decoration-none ${theme === "night" ? styles.navItemNight : styles.navItem} `} to='/login'>login</Link></p>
                </div>}
            </div>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start">
              <Offcanvas.Header className={theme === "night" ? "bg-dark" : ""}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={`${styles.logo} fs-4`}>
                  <img className={styles.logoIMG} src={logo} />E-Bookalypse
                </Offcanvas.Title>
                <div className="align-items-center d-lg-none">
                  <ThemeToggler />
                </div>
              </Offcanvas.Header>
              <Offcanvas.Body className={theme === "night" ? "bg-dark" : ""}>
                <Nav className="justify-content-start flex-grow-1 pe-3 align-items-center">
                  <NavLink to='/' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                    <GoHome className='me-1' />
                    Home</NavLink>

                  <NavLink to='/categories' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                    <GiBookshelf className='me-1' />
                    Categories</NavLink>

                  <NavLink to='/offers' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                    <TbShoppingCartDiscount className='me-1' />
                    Offers
                  </NavLink>
                  <div className='d-none d-lg-inline'>
                    <SearchBar />
                  </div>
                </Nav>

                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center d-none d-lg-flex">
                  <Link to='/cart'>
                    <BsCart4 className={`${theme === "night" ? styles.navIconNight : styles.navIcon} me-3 mb-2 mb-lg-0`} style={{ width: '22px', height: '22px' }} />
                  </Link>
                  {loggedIn ?
                    <div className={styles.profileIcon}>
                      <FaUserCircle className={styles.userIcon} onClick={() => { setProfileClicked(!profileClicked) }} />
                      {/* <img src={profilePic} className={styles.userIcon} onClick={() => { setProfileClicked(!profileClicked) }} /> */}
                      {profileClicked ? <ProfileDropDown /> : null}

                    </div> :
                    <div className={`${styles.loginSection} row`} style={{ height: '30px' }}>
                      <button className="col-12"><Link className={`text-decoration-none ${styles.navBtn} text-light rounded px-2 py-1 w-100 h-100`} to='/signUp'>Create Account</Link></button>
                      <p className={`col-12 fw-bold ${theme === "night" ? "text-light" : "text-dark"} text-center`} style={{ fontSize: '12px' }}>Or <Link className={`text-decoration-none ${theme === "night" ? styles.navItemNight : styles.navItem} `} to='/login'>login</Link></p>
                    </div>}
                  <ThemeToggler />
                  {/* Language Toggler */}
                  {/* <div className={`${styles.profileIcon}`} onClick={() => {
                    dispatch(changeLang(lang === "Ar" ? "En" : "Ar"));
                  }}>
                    {lang === "En" ? <img className={styles.userIcon} src={En} alt='en' data-bs-toggle="tooltip" data-bs-placement="bottom" title="English" /> :
                      <img className={styles.userIcon} src={Ar} alt='ar' data-bs-toggle="tooltip" data-bs-placement="bottom" title="عربي" />}
                  </div> */}
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
