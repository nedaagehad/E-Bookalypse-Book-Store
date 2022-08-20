import React from 'react';
import { useSelector } from 'react-redux';
import NotFoundComp from '../../../components/NotFound/NotFoundComp';

function NotFound() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`mainContent ${theme === "night" ? "bg-dark" : ""}`}>
          <NotFoundComp />
      </div>
  )
}

export default NotFound