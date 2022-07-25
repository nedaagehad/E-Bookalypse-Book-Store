
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../store/actions/theme';
import styles from './ThemeToggler.module.css';

function ThemeToggler() {

  const theme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(changeTheme(theme === "night" ? "day" : "night"))
  }
  return (
    <div className={`${styles.themeToggler} ${theme === "night" ? styles.night : ""}`} onClick={toggleTheme}>
        <div className={styles.notch}>
            <div className={`${styles.crater} ${styles.st}`} />
            <div className={`${styles.crater} ${styles.nd}`} />
        </div>
        <div className={`${styles.shape} ${styles.sm}`} />
        <div className={`${styles.shape} ${styles.sm} ${styles.second}`} />
        <div className={`${styles.shape} ${styles.md}`} />
        <div className={`${styles.shape} ${styles.lg}`} />
    </div>
  )
}

export default ThemeToggler