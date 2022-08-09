import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { TbBooks } from 'react-icons/tb';
import { BsCartCheck } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import styles from './ProfileDropDown.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProfileDropDown() {

    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className='position-relative'>
            <ul className={theme === "night" ? `${styles.listGroupNight} border border-dark` : `${styles.listGroup} border`}>
                <Link to='/editprofile' className={`text-decoration-none`}><li className={theme === "night" ? `${styles.listItemNight} border-bottom border-dark` : `${styles.listItem} border-bottom`}><FaRegUserCircle className={styles.listIcon} /> Profile</li></Link>
                <Link to='/editprofile' className={`text-decoration-none`}><li className={theme === "night" ? `${styles.listItemNight} border-bottom border-dark` : `${styles.listItem} border-bottom`}><FiEdit className={styles.listIcon} /> Edit Profile</li></Link>
                <Link to='/editprofile' className={`text-decoration-none`}><li className={theme === "night" ? `${styles.listItemNight} border-bottom border-dark` : `${styles.listItem} border-bottom`}><TbBooks className={styles.listIcon} /> Bookshelf</li></Link>
                <Link to='/editprofile' className={`text-decoration-none`}><li className={theme === "night" ? `${styles.listItemNight} border-bottom border-dark` : `${styles.listItem} border-bottom`}><BsCartCheck className={styles.listIcon} /> Orders</li></Link>
                <Link to='/editprofile' className={`text-decoration-none`}><li className={theme === "night" ? `${styles.listItemNight} border-bottom border-dark` : `${styles.listItem} border-bottom`}><MdFavoriteBorder className={styles.listIcon} /> Wishlist</li></Link>
                <Link to='/editprofile' className={`text-decoration-none`}><li className={theme === "night" ? styles.listItemNight : styles.listItem}><BiLogOut className={styles.listIcon} /> Logout</li></Link>
            </ul>
        </div>
    )
}

export default ProfileDropDown