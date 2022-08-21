import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'

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