import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { changeLang } from '../../store/actions/language';
import { booksApi } from '../../store/services';
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../Firebase/firebaseImage';
import { useNavigate } from 'react-router-dom';
import { logOut } from "../../store/reducers/authReducer/authReducer";

//Components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import SearchBar from "../SearchBar/SearchBar";
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/ebookalypse-logo.png';
// import En from '../../assets/En.png';
// import Ar from '../../assets/Ar.png';
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";

//icons
import { GoHome } from 'react-icons/go';
import { GiBookshelf } from 'react-icons/gi';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { BsCart4 } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { TbBooks } from 'react-icons/tb';
import { MdFavoriteBorder } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { RiUserReceivedLine, RiUserAddLine } from 'react-icons/ri'

//CSS Module
import styles from './NavBar.module.css';

function NavBar() {

  const [count, setCount] = useState(0)
  const [profileClicked, setProfileClicked] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetCartQuery()
  // eslint-disable-next-line
  const [user, setUser] = useState()
  // eslint-disable-next-line
  const [getUserByID, response] = booksApi.useGetUserByIDMutation();
  const [loggedIn, setLoggedIn] = useState(true);
  const [userName, setUserName] = useState("");

  const offCanvasRef = useRef();

  const closeOffCanvas = () => offCanvasRef.current.backdrop.click();

  const authState = useSelector(state => state.auth.userRole)
  const theme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(logOut())
    navigate('/login')
  }

  useEffect(() => {
    if (authState !== '') {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    if (data) {
      setCount(data.cart.bookItems.length + data.cart.collectionItems.length)
    }

    getUserByID().then((res) => {
      setUser(res.data)
      setUserName(res.data.fName[0].toUpperCase() + res.data.fName.substring(1) + " " + res.data.lName[0].toUpperCase() + res.data.lName.substring(1));

      const starsRef = ref(storage, 'uploads/users/' + res.data.image);

      getDownloadURL(starsRef)
        .then((url) => {
          setProfilePic(url)
        })
    }
    ).catch((err) => console.log(err))
  }, [authState, count, data]);

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar className={`shadow-lg fixed-top px-3 px-lg-0`} key={expand} bg={theme === "night" ? "dark" : "light"} expand={expand} variant={theme === "night" ? "dark" : "light"}>
          <Container fluid>
            <Navbar.Brand className={`${styles.logo} fs-4`}><img className={styles.logoIMG} alt="logo" src={logo} /><span className='d-none d-md-inline'>E-Bookalypse</span></Navbar.Brand>
            <Nav>
              <div className="mx-auto flex-grow-1 ps-3 align-items-center d-lg-none">
                <SearchBar />
              </div>
            </Nav>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              ref={offCanvasRef}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start">
              <Offcanvas.Header className={theme === "night" ? "bg-dark" : ""}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={`${styles.logo} fs-4`}>
                  <img className={styles.logoIMG} alt="logo" src={logo} />E-Bookalypse
                </Offcanvas.Title>
                <div className="align-items-center d-lg-none">
                  <ThemeToggler />
                </div>
              </Offcanvas.Header>
              <Offcanvas.Body className={theme === "night" ? "bg-dark" : ""}>
                <Nav className="d-lg-none">
                  {loggedIn ?
                    <div className="row align-items-center mb-3" style={{ "height": "36px" }}>
                      <div className={`${styles.profileIcon} bg-transparent offset-2 col-2`}>
                        <img src={profilePic} alt="userpicture" className={styles.userIcon} />
                      </div>
                      <p className={`col-6 fw-bold mb-0 fs-3 ${theme === "night" ? styles.userNameNight : styles.userName}`}>{userName}</p>
                    </div>
                    : null}
                </Nav>

                {loggedIn ?
                  <Nav className={`justify-content-start flex-grow-1 pe-3 align-items-center border-bottom mb-3 d-lg-none
                ${theme === "night" ? "border-secondary" : ""}`}>
                    <NavLink onClick={closeOffCanvas} to='/profile' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                      <FaRegUserCircle className='me-1' /> Profile</NavLink>

                    <NavLink onClick={closeOffCanvas} to='/editprofile' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                      <FiEdit className='me-1' /> Edit Profile</NavLink>
                    {authState !== 'regUser' ? null :
                    <>
                      <NavLink onClick={closeOffCanvas} to='/profile/bookshelf' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                        <TbBooks className='me-1' /> Bookshelf
                      </NavLink>

                      <NavLink onClick={closeOffCanvas} to='/wishlist' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                        <MdFavoriteBorder className='me-1' /> Wishlist
                      </NavLink>
                      

                      <NavLink onClick={closeOffCanvas} to='/cart' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                        <BsCart4 className='me-1' /> Cart - <span className={`ms-1 fw-bold ${styles.mov}`}> {count} </span>
                      </NavLink>
                    
                    </>
                    }
                    

                    <div onClick={() => { Logout(); closeOffCanvas(); }} className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                      <BiLogOut className='me-1' /> Logout
                    </div>
                  </Nav>
                  :
                  <Nav className={`justify-content-start flex-grow-1 pe-3 align-items-center border-bottom mb-3 d-lg-none
                ${theme === "night" ? "border-secondary" : ""}`}>
                    <NavLink onClick={closeOffCanvas} to='/signup' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                      <RiUserAddLine className='me-1' /> Create Account </NavLink>

                    <NavLink onClick={closeOffCanvas} to='/login' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                      <RiUserReceivedLine className='me-1' /> Sign In</NavLink>
                  </Nav>
                }

                <Nav className="justify-content-start flex-grow-1 pe-3 align-items-center d-lg-none">
                  <NavLink onClick={closeOffCanvas} to='/' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                    <GoHome className='me-1' />
                    Home</NavLink>

                  <NavLink onClick={closeOffCanvas} to='/categories' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                    <GiBookshelf className='me-1' />
                    Categories</NavLink>

                  <NavLink onClick={closeOffCanvas} to='/offers' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                    <TbShoppingCartDiscount className='me-1' />
                    Offers
                  </NavLink>
                </Nav>

                {/* Large NavBar */}
                <Nav className="justify-content-start flex-grow-1 pe-3 align-items-center d-none d-lg-flex">
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
                  <div className='d-none d-lg-inline ms-lg-5 ms-0'>
                    <SearchBar />
                  </div>
                </Nav>

                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center d-none d-lg-flex">
                {authState !== 'regUser' ? null :

                  <Link to='/cart' className="position-relative">
                    {count === 0 ? null :
                      <p className={`position-absolute fw-bold w-75 mb-0 text-center me-3 ${styles.mov} ${styles.cartCount}`} style={{ "left": "-2px", "top": "-9px" }}> {count} </p>
                    }
                    <BsCart4 className={`${theme === "night" ? styles.navIconNight : styles.navIcon}
                    ${count === 0 ? styles.emptyCart : ""} me-3 mb-2 mb-lg-0`} style={{ width: '22px', height: '22px' }} />
                  </Link>
                  }
                  {loggedIn ?
                    <div className={styles.profileIcon}>
                      <img src={profilePic} alt="userpicture" className={styles.userIcon} onClick={() => { setProfileClicked(!profileClicked) }} />
                      {profileClicked ? <ProfileDropDown authState={authState} /> : null}

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
