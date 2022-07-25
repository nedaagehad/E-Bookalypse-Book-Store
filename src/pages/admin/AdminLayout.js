import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'

const AdminLayout = () => {
  return (
    <>
    <Outlet />
    </>
  )
}

export default AdminLayout