import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'

const AdminLayout = () => {
  return (
    <>
    <AdminSidebar/>
    <AdminNavbar/>
    <Outlet />
    </>
  )
}

export default AdminLayout