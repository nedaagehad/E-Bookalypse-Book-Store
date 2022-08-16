import React from 'react'
import '../../../assetsAdmin/css/style.css';
import "../../../assetsAdmin/vendors/mdi/css/materialdesignicons.min.css"
import AdminSidebar from '../../../components/AdminSidebar/AdminSidebar';
import AdminNavbar from '../../../components/AdminNavbar/AdminNavbar';
import DashboardContent from '../../../components/DashboardContent/DashboardContent';
function HomeDashboard() {
    return (
        <div className="container-scroller bg-dark">
           
            <AdminSidebar/>
            {/* <div className="page-body-wrapper"> */}
            <AdminNavbar/>
            <DashboardContent/> 
          {/* </div> */}


        </div>
    )
  }
  
  export default HomeDashboard