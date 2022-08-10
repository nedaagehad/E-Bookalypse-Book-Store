import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'

const UserLayout = () => {

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout