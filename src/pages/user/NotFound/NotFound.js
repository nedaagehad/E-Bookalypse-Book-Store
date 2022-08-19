import React from 'react';
import styles from './NotFound.module.css';
import notfound from '../../../assets/404.jpg'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NotFoundComp from '../../../components/NotFound/NotFoundComp'
function NotFound() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`mainContent ${theme === "night" ? "bg-dark" : ""}`}>
          <NotFoundComp />
      </div>
  )
}

export default NotFound