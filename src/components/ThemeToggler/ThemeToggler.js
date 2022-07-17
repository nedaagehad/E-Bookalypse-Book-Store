import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../store/actions/theme';

function ThemeToggler() {

  const theme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(changeTheme(theme === "night" ? "light" : "night"))
  }
  return (
    <div className={`theme-toggler${theme === "night" ? " night" : ""}`} onClick={toggleTheme}>
        <div className='notch'>
            <div className='crater st' />
            <div className='crater nd' />
        </div>
        <div className='shape sm' />
        <div className='shape sm second' />
        <div className='shape md' />
        <div className='shape lg' />
    </div>
  )
}

export default ThemeToggler