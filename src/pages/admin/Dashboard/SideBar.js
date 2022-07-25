import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaBook ,FaPencilAlt,FaUsers } from 'react-icons/fa'
import { TbBooks } from 'react-icons/tb'
import { MdLocalOffer } from 'react-icons/md'

import { Link } from 'react-router-dom'
import { BsCartCheckFill } from 'react-icons/bs'
const SideBar = () => {
  return (
    <div className="sideBar ">
    <div className='sidebarheader p-5 text-white text-center bg-secondary w-100 '>
        <h4>E-Bookalypse</h4>
    </div>
    <div className="linkCollection h-100 text-white p-5">
      <span>Menu</span>
      <Link to="/admin" >
        <h6 className=' mt-4'>
          <AiFillHome className='me-2' /> Dashboard
        </h6> 
      </Link>
      <Link to="/admin/users" >
        <h6 className=' mt-4'>
          <FaUsers className='me-2' /> Users
        </h6> 
      </Link>
      <Link to="/admin/books" >
        <h6 className=' mt-4'>
          <FaBook className='me-2' /> Books
        </h6> 
      </Link>
      <Link to="/admin/categories" >
        <h6 className=' mt-4'>
          <TbBooks className='me-2' /> Categories
        </h6> 
      </Link>
      <Link to="/admin/writers" >
        <h6 className=' mt-4'>
          <FaPencilAlt className='me-2' /> Writers
        </h6> 
      </Link>
      <Link to="/admin/prmotions" >
        <h6 className=' mt-4'>
          <MdLocalOffer className='me-2' /> Prmotions
        </h6> 
      </Link>
      <Link to="/admin/orders" >
        <h6 className=' mt-4'>
          <BsCartCheckFill className='me-2' /> Orders
        </h6> 
      </Link>
      
    </div>
  </div>
  )
}

export default SideBar