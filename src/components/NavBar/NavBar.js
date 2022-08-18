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
import { useDispatch, useSelector } from 'react-redux';
import styles from './NavBar.module.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/ebookalypse-logo.png';
import { BsCart4 } from 'react-icons/bs';
// import En from '../../assets/En.png';
// import Ar from '../../assets/Ar.png';
// import { changeLang } from '../../store/actions/language';
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import { booksApi, selectCartItems } from '../../store/services';
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../Firebase/firebaseImage';
import { getCount } from "../../store/reducers/cartReducer/CartReducer";
import { FaRegUserCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { TbBooks } from 'react-icons/tb';
import { MdFavoriteBorder } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { logOut } from "../../store/reducers/authReducer/authReducer";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoMdLogIn } from 'react-icons/io';

function NavBar() {
  const [count, setCount] = useState(0)
  const [profileClicked, setProfileClicked] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [userImage, setUserImage] = useState("")
  const [cartCount, setCartCount] = useState("")
  const { data, isLoading, error } = booksApi.useGetCartQuery()
  const [user, setUser] = useState()
  const [getUserByID, response] = booksApi.useGetUserByIDMutation();
  const [loggedIn, setLoggedIn] = useState(true);
  const [userName, setUserName] = useState("");

  // const title = <span className={styles.logIcon}>
  //   <IoMdLogIn />
  // </span>

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
      console.log(res.data.fName[0].toUpperCase() + res.data.fName.substring(1) + " " + res.data.lName[0].toUpperCase() + res.data.lName.substring(1));
      setUserName(res.data.fName[0].toUpperCase() + res.data.fName.substring(1) + " " + res.data.lName[0].toUpperCase() + res.data.lName.substring(1));

      const starsRef = ref(storage, 'uploads/users/' + res.data.image);

      getDownloadURL(starsRef)
        .then((url) => {
          setProfilePic(url)
        })
    }
    ).catch((err) => console.log(err))
  }, [authState, count, data]);

  console.log(userName);

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar className={`shadow-lg fixed-top px-3 px-lg-0`} key={expand} bg={theme === "night" ? "dark" : "light"} expand={expand} variant={theme === "night" ? "dark" : "light"}>
          <Container fluid>
            <Navbar.Brand className={`${styles.logo} fs-4`}><img className={styles.logoIMG} src={logo} /><span className='d-none d-md-inline'>E-Bookalypse</span></Navbar.Brand>
            <Nav>
              <div className="mx-auto flex-grow-1 ps-3 align-items-center d-lg-none">
                <SearchBar />
              </div>
            </Nav>
            {/* <div className="align-items-center d-lg-none">
              {loggedIn ?
                null :
                <NavDropdown title={title} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/signup">Create Account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                </NavDropdown>}
            </div> */}

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
                <Nav className="d-lg-none">
                  {loggedIn ?
                    <div className="row align-items-center mb-3" style={{ "height": "36px" }}>
                      <div className={`${styles.profileIcon} bg-transparent offset-2 col-2`}>
                        <img src={profilePic} className={styles.userIcon} />
                      </div>
                      <p className={`col-6 fw-bold mb-0 fs-3 ${theme === "night" ? styles.userNameNight : styles.userName}`}>{userName}</p>
                    </div>
                    : null}
                </Nav>

                {loggedIn ?
                  <Nav className={`justify-content-start flex-grow-1 pe-3 align-items-center border-bottom mb-3 d-lg-none
                ${theme === "night" ? "border-secondary" : ""}`}>
                    <NavLink to='/profile' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                      <FaRegUserCircle className='me-1' /> Profile</NavLink>

                    <NavLink to='/editprofile' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                      <FiEdit className='me-1' /> Edit Profile</NavLink>

                    <NavLink to='/profile/bookshelf' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                      <TbBooks className='me-1' /> Bookshelf
                    </NavLink>

                    <NavLink to='/wishlist' className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                      <MdFavoriteBorder className='me-1' /> Wishlist
                    </NavLink>

                    <div onClick={() => Logout()} className={`fw-bold text-decoration-none d-flex align-items-center me-3 mb-3 mb-lg-0 ${theme === "night" ? styles.navItemNight : styles.navItem}`}>
                      <BiLogOut className='me-1' /> Logout
                    </div>
                  </Nav>
                  : null}

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
                      {/* <FaUserCircle className={styles.userIcon} onClick={() => { setProfileClicked(!profileClicked) }} /> */}
                      <img src={profilePic} className={styles.userIcon} onClick={() => { setProfileClicked(!profileClicked) }} />
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
