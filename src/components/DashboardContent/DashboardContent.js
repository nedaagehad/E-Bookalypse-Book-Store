import React, { useState,useEffect } from 'react'
import '../../assetsAdmin/css/style.css'
import "../../assetsAdmin/vendors/mdi/css/materialdesignicons.min.css"
import "../../assetsAdmin/vendors/flag-icon-css/css/flag-icon.min.css"
import "../../assetsAdmin/AdminDashboard.css";
// import style from "../../assetsAdmin/AdminDashboard.module.css";
// import logo from "../../assetsAdmin/images/logo2.png";
import face15 from "../../assetsAdmin/images/faces/face15.jpg";
import face1 from "../../assetsAdmin/images/faces/face1.jpg";
import face2 from "../../assetsAdmin/images/faces/face2.jpg";
import face3 from "../../assetsAdmin/images/faces/face3.jpg";
import face4 from "../../assetsAdmin/images/faces/face4.jpg";
import face5 from "../../assetsAdmin/images/faces/face5.jpg";
import face10 from "../../assetsAdmin/images/faces/face10.jpg";
import face21 from "../../assetsAdmin/images/faces/face21.jpg"; 
import map from "../../assetsAdmin/images/map.png";
import { booksApi } from '../../store/services';
import { useOutletContext } from 'react-router-dom';
import AdminComponent from './adminComponent';

function DashboardContent() {
  const props = useOutletContext()
  // console.log(props)
  const [user,setUser] = useState()
  const [usersCount , setUsersCount] = useState()
  const [ordersCount,setOrdersCount]  = useState()
  const [writersCount,setWritersCount]  = useState()
  const [booksCount,setBooksCount]  = useState()
  const {data,isLoading,error} = booksApi.useGetAllBooksQuery({salesSort:'htl',limit:3})
  const [trendingBooks,setTrendingBooks] = useState()
  const getAllusers  = booksApi.useGetAllUsersQuery()
  const  [ admins ,setAdmins ] = useState()
  useEffect(()=>{ 
    if(props){

      setUser(props.user)
      setUsersCount(props.usersCount)
      setOrdersCount(props.ordersCount)
      setWritersCount(props.writersCount)
      setBooksCount(props.booksCount)
    }
    if(data){
      // console.log(data)
      setTrendingBooks(data.data)
    }
    if(getAllusers.data){
      console.log(getAllusers.data)
      setAdmins(getAllusers.data)
    }
  },[props,data,getAllusers.data])
  

      if(user){
        return (
            // <div >
              <div className="page-body-wrapper">
                <div className="content-wrapper">
                {/* Change page content, related to selected navigation */}
    
                <div className="row pt-3">
                  <div className="col-12 grid-margin stretch-card pt-5">
                    <div className="card corona-gradient-card" id="gmov" >
                      <div className="card-body py-0 px-0 px-sm-3">
                        <div className="row align-items-center">
                          <div className="col-4 col-sm-3 col-xl-2">
                            <span class="gradient-corona-img img-fluid" />
                          </div>
                          <div className="col-5 col-sm-7 col-xl-8 p-0 mt-5 mb-5">
                            
                            <h4 className="mb-1 mb-sm-0 m-2 h2 text-white font-weight-bold">Welcome Back, {user.fName} 🚀</h4>
                            <p className="mb-0 mt-1 font-weight-normal d-none d-sm-block text-white ps-3"> Check out your E-Bookalypse system!</p>
                          </div>
                          {/* <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
                            <span>
                              <a href="" target="_blank" class="btn btn-outline-light btn-rounded get-started-btn">Upgrade to PRO</a>
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <div className="card bg-dark">
                      <div className="card-body bg-dark">
                        <div className="row">
                          <div className="col-9">
                            <div className="d-flex align-items-center align-self-start">
                              <h3 className="mb-0 text-white font-weight-bold fs-2">Users</h3>
                              <p className="text-success ml-2 mb-0 font-weight-bold fs-2">+{usersCount}</p>
                            </div>
                          </div>
                          {/* <div className="col-3">
                            <div className="icon icon-box-success ">
                              <span className="mdi mdi-arrow-top-right icon-item"></span>
                            </div>
                          </div> */}
                        </div>
                        <h6 className="text-muted font-weight-normal">Using E-Bookalypse</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <div className="card bg-dark">
                      <div className="card-body bg-dark">
                        <div className="row">
                          <div className="col-9">
                            <div className="d-flex align-items-center align-self-start">
                              <h3 className="mb-0 text-white font-weight-bold fs-2">Orders</h3>
                              <p className="text-success ml-2 mb-0 font-weight-bold fs-2">+{ordersCount}</p>
                            </div>
                          </div>
                          {/* <div className="col-3">
                            <div className="icon icon-box-success">
                              <span className="mdi mdi-arrow-top-right icon-item"></span>
                            </div>
                          </div> */}
                        </div>
                        <h6 className="text-muted font-weight-normal">Orders Number</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <div className="card bg-dark">
                      <div className="card-body bg-dark">
                        <div className="row">
                          <div className="col-9">
                            <div className="d-flex align-items-center align-self-start">
                              <h3 className="mb-0 text-white font-weight-bold fs-2">Writers</h3>
                              <p className="text-success ml-2 mb-0 font-weight-bold fs-2">+{writersCount}</p>
                            </div>
                          </div>
                          {/* <div className="col-3">
                            <div className="icon icon-box-success">
                              <span className="mdi mdi-arrow-top-right icon-item"></span>
                            </div>
                          </div> */}
                        </div>
                        <h6 className="text-muted font-weight-normal">Contract Writers</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <div className="card bg-dark">
                      <div className="card-body bg-dark">
                        <div className="row">
                          <div className="col-9">
                            <div className="d-flex align-items-center align-self-start">
                              <h3 className="mb-0 text-white font-weight-bold fs-2">Books</h3>
                              <p className="text-success ml-2 mb-0 font-weight-bold fs-2">+{booksCount}</p>
                            </div>
                          </div>
                          {/* <div className="col-3">
                            <div className="icon icon-box-success ">
                              <span className="mdi mdi-arrow-top-right icon-item"></span>
                            </div>
                          </div> */}
                        </div>
                        <h6 className="text-muted font-weight-normal">Categorised Books</h6>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="row">
                  <div className="col-md-4 grid-margin stretch-card  ">
                    <div className="bg-dark card">
                      <div className="bg-dark card-body">
                        <h4 className="card-title">Trending Books</h4>
                        <canvas id="transaction-history" className="transaction-chart"></canvas>
                        {
                          trendingBooks ? trendingBooks.map((t)=>{
                            return(

                            <>
                              <div key={t._id} className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                                <div className="text-md-center text-xl-left">
                                  <h6 className="mb-1 text-white font-weight-medium">{t.title}</h6>
                                  <p className="text-muted mb-0">Sales {t.sales}</p>
                                </div>
                                <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                                  <h6 className="font-weight-bold mb-0 text-success">${t.price}</h6>
                                </div>
                              </div>
                            
                            </>
                            )
                            
                          })
                          
                          :null
                        }
                        {/* <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                          <div className="text-md-center text-xl-left">
                            <h6 className="mb-1 text-white font-weight-medium">Harry Poter 2</h6>
                            <p className="text-muted mb-0">The Second Best Seller</p>
                          </div>
                          <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                            <h6 className="font-weight-bold mb-0 text-success">$493</h6>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 grid-margin stretch-card">
                    <div className="card bg-dark">
                      <div className="card-body bg-dark">
                        <div className="d-flex flex-row justify-content-between">
                          <h4 className="card-title mb-1 text-whight">Admins Role</h4>
                          <p className="text-muted mb-1">Your data status</p>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="preview-list">
                              {
                                admins  ? 
                                
                                admins.map((admin)=>{
                                  if(admin.role == 'rootAdmin' || admin.role == 'admin'){
                                    
                                    return (
                                      <AdminComponent admin={admin} key={admin._id}/>
                                    )
                                  }
                                })
                                
                                : null
                              }
                              {/* <div className="preview-item border-bottom">
                                <div className="preview-thumbnail">
                             
                                    <img src={face21} alt="" />
                                </div>
                                <div className="preview-item-content d-sm-flex flex-grow">
                                  <div className="flex-grow">
                                    <h6 className="preview-subject text-white">Eslam Mostafa</h6>
                                    <p className=" mb-0 text-success font-weight-bold">Root Admin</p>
                                  </div>
                                  <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                    <p className="text-muted">15 minutes ago</p>
                                    <p className="text-muted mb-0">30 tasks, 5 issues </p>
                                  </div>
                                </div>
                              </div> 
                               <div className="preview-item border-bottom">
                                <div className="preview-thumbnail">
                                 
                                  <img src={face15} alt="image" />
                                </div>
                                <div className="preview-item-content d-sm-flex flex-grow">
                                  <div className="flex-grow">
                                    <h6 className="preview-subject text-white">Hussein Alaa</h6>
                                    <p className="text-muted mb-0">Admin</p>
                                  </div>
                                  <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                    <p className="text-muted">1 hour ago</p>
                                    <p className="text-muted mb-0">23 tasks, 5 issues </p>
                                  </div>
                                </div>
                              </div> 
                               <div className="preview-item border-bottom">
                                <div className="preview-thumbnail">
                                  <img src={face3} alt="" />
                                </div>
                                <div className="preview-item-content d-sm-flex flex-grow">
                                  <div className="flex-grow">
                                    <h6 className="preview-subject text-white">Nedaa Gehad</h6>
                                    <p className="text-muted mb-0">Admin</p>
                                  </div>
                                  <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                    <p className="text-muted">35 minutes ago</p>
                                    <p className="text-muted mb-0">15 tasks, 2 issues</p>
                                  </div>
                                </div>
                              </div> *
                               <div className="preview-item border-bottom">
                                <div className="preview-thumbnail">
                                  
                                  <img src={face10} alt="" />
                                </div>
                                <div className="preview-item-content d-sm-flex flex-grow">
                                  <div className="flex-grow">
                                    <h6 className="preview-subject text-white">Ranan Hosney</h6>
                                    <p className="text-muted mb-0">Admin</p>
                                  </div>
                                  <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                    <p className="text-muted">55 minutes ago</p>
                                    <p className="text-muted mb-0">35 tasks, 7 issues </p>
                                  </div>
                                </div>
                              </div>
                              <div className="preview-item">
                                <div className="preview-thumbnail">
                                  
                                  <img src={face1} alt="" />
                                </div>
                                <div className="preview-item-content d-sm-flex flex-grow">
                                  <div className="flex-grow">
                                    <h6 className="preview-subject text-white">Reham Raafat</h6>
                                    <p className="text-muted mb-0">Admin</p>
                                  </div>
                                  <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                    <p className="text-muted">50 minutes ago</p>
                                    <p className="text-muted mb-0">27 tasks, 4 issues </p>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                
                
    
                {/* <div className="row">
                  <div className="col-xl-4 col-sm-12 grid-margin ">
                    <div className="card bg-dark">
                      <div className="card-body bg-dark">
                        <h5 className="text-white font-weight-bold fs-2">Revenue</h5>
                        <div className="row">
                          <div className="col-8 col-sm-12 col-xl-8 my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <h2 className="mb-0 text-white font-weight-medium fs-2 mb-1">$32123</h2>
                              <p className="text-success ml-2 mb-0 font-weight-bold fs-5">+3.5%</p>
                            </div>
                            <h6 className="text-muted font-weight-normal">11.38% Since last month</h6>
                          </div>
                          <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                            <i className="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
                          </div>
                        </div>
                      </div>    
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-12 grid-margin">
                    <div className="card bg-dark">
                      <div className="card-body bg-dark">
                        <h5 className="text-white font-weight-bold fs-2">Sales</h5>
                        <div className="row">
                          <div className="col-8 col-sm-12 col-xl-8 my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <h2 className="mb-0 text-white font-weight-medium fs-2 mb-1">$45850</h2>
                              <p className="text-success ml-2 mb-0 font-weight-bold fs-5">+8.3%</p>
                            </div>
                            <h6 className="text-muted font-weight-normal"> 9.61% Since last month</h6>
                          </div>
                          <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                            <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto"></i>
                          </div>
                        </div>
                      </div>
                    </div>           
                  </div>
                  <div className="col-xl-4 col-sm-12 grid-margin">                
                    <div className="card bg-dark">
                      <div className="card-body bg-dark">
                        <h5 className="text-white font-weight-bold fs-2">User Growth</h5>
                        <div className="row">
                          <div className="col-8 col-sm-12 col-xl-8 my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <h2 className="mb-0 text-white font-weight-medium fs-2 mb-1">$2039</h2>
                              <p className="text-danger ml-2 mb-0 font-weight-bold fs-5">-2.1% </p>
                            </div>
                            <h6 className="text-muted font-weight-normal">2.27% Since last month</h6>
                          </div>
                          <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                            <i className="icon-lg mdi mdi-monitor text-success ml-auto"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
    
    
    
                {/* <div className="row ">
                  <div className="col-12 grid-margin">
                    <div className="card bg-dark">
                      <div className="card-body bg-dark">
                        <h4 className="card-title fs-3 font-weight-bold">Order Status</h4>
                        <div className="table-responsive">
                          <table className="table bg-dark">
                            <thead>
                              <tr>
                                <th>
                                
                                </th>
                                <th className="font-weight-medium fs-5"> Client Name </th>
                                <th className="font-weight-medium fs-5"> Order No </th>
                                <th className="font-weight-medium fs-5"> Book Cost </th>
                                <th className="font-weight-medium fs-5"> Book Name</th>
                                <th className="font-weight-medium fs-5"> Payment Mode </th>
                                <th className="font-weight-medium fs-5"> Order Date </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                               
                                </td>
                                <td>
                                  <img src={face1} alt="" />
                                  <span className="pl-1 text-white-50 fs-5"> Mona Ahmad</span>
                                </td>
                                <td className="text-white-50 fs-5"> 02312 </td>
                                <td className="text-white-50 fs-5"> $14,500 </td>
                                <td className="text-white-50 fs-5"> Art Book </td>
                                <td className="text-white-50 fs-5"> Credit card </td>
                                <td className="text-white-50 fs-5"> 04 Aug 2022 </td>
                            
                              </tr>
                              <tr>
                                <td>
                             
                                </td>
                                <td>
                                  <img src={face2} alt="" />
                                  <span className="pl-1 text-white-50 fs-5"> Amr Ahmad</span>
                                </td>
                                <td className="text-white-50 fs-5"> 02312 </td>
                                <td className="text-white-50 fs-5"> $14,500 </td>
                                <td className="text-white-50 fs-5"> Art Book </td>
                                <td className="text-white-50 fs-5"> Paypal </td>
                                <td className="text-white-50 fs-5"> 04 Jun 2022 </td>
                        
                              </tr>
                              <tr>
                                <td>
                       
                                </td>
                                <td>
                                  <img src={face5} alt="" />
                                  <span className="pl-1 text-white-50 fs-5"> Ahmad Adel</span>
                                </td>
                                <td className="text-white-50 fs-5"> 02312 </td>
                                <td className="text-white-50 fs-5"> $14,500 </td>
                                <td className="text-white-50 fs-5"> Art Book </td>
                                <td className="text-white-50 fs-5"> Credit card </td>
                                <td className="text-white-50 fs-5"> 04 Mar 2022 </td>
                         
                              </tr>
                              <tr>
                                <td>
                          
                                </td>
                                <td>
                                  <img src={face3} alt="" />
                                  <span className="pl-1 text-white-50 fs-5"> Reham Raafat</span>
                                </td>
                                <td className="text-white-50 fs-5"> 02312 </td>
                                <td className="text-white-50 fs-5" > $14,500 </td>
                                <td className="text-white-50 fs-5"> Art Book </td>
                                <td className="text-white-50 fs-5"> Online Payment </td>
                                <td className="text-white-50 fs-5"> 04 Apr 2022 </td>
                              
                              </tr>
                              <tr>
                                <td>
                                 
                                </td>
                                <td>
                                  <img src={face4} alt="" />
                                  <span className="pl-1 text-white-50 fs-5"> Ahmad Ali</span>
                                </td>
                                <td className="text-white-50 fs-5"> 02312 </td>
                                <td className="text-white-50 fs-5"> $14,500 </td>
                                <td className="text-white-50 fs-5"> Art Book </td>
                                <td className="text-white-50 fs-5"> Credit card </td>
                                <td className="text-white-50 fs-5"> 04 May 2022 </td>
                              
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="row">
                  <div className="col-12">
                    <div className="card bg-dark">
                      <div className="card-body bg-dark">
                        <h4 className="card-title fs-3 font-weight-bold text-white">Users by Countries</h4>
                        <div className="row">
                          <div className="col-md-5">
                            <div className="table-responsive">
                              <table className="table">
                                <tbody>
                                  <tr className="m-2">
                                    <td>
                                      <i className="flag-icon flag-icon-eg"></i>
                                    </td>
                                    <td className="text-white-50 fs-5">Egypt</td>
                                    <td className="text-right text-white-50 fs-5"> 1500 </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <i className="flag-icon flag-icon-de"></i>
                                    </td> 
                                    <td className="text-white-50 fs-5">Germany</td>
                                    <td className="text-right text-white-50 fs-5"> 800 </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <i className="flag-icon flag-icon-au"></i>
                                    </td>
                                    <td className="text-white-50 fs-5">Australia</td>
                                    <td className="text-right text-white-50 fs-5"> 760 </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <i className="flag-icon flag-icon-gb"></i>
                                    </td>
                                    <td className="text-white-50 fs-5">United Kingdom</td>
                                    <td className="text-right text-white-50 fs-5"> 450 </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <i className="flag-icon flag-icon-ro"></i>
                                    </td>
                                    <td className="text-white-50 fs-5">Romania</td>
                                    <td className="text-right text-white-50 fs-5"> 620 </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <i className="flag-icon flag-icon-br"></i>
                                    </td>
                                    <td className="text-white-50 fs-5">Brasil</td>
                                    <td className="text-right text-white-50 fs-5"> 230 </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div id="audience-map" className="vector-map">
                              </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                
                <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                  <span className="text-muted d-block text-center text-sm-left d-sm-inline-block"></span>
                  
                </div>
              </footer>    
                </div>
                </div>
    
    
            // </div>
            )

      }
}
    
    export default DashboardContent
    