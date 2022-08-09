import React from 'react';
import styles from './NotFound.module.css';
import notfound from '../../../assets/404.jpg'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NotFound() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div claassName='row'>
      <div className='col-12 d-flex justify-content-center'>
        <div className={`position-absolute w-100 h-100 ${theme === "night" ? "bg-secondary opacity-25" : ""}`}></div>
        <img className='w-75' src={notfound} alt='notfound' />
      </div>
      <Link to='/'><input type="button" className={`btn ${styles.saveBtn}`} value="Go Home" /></Link>
    </div>
  )
}

export default NotFound