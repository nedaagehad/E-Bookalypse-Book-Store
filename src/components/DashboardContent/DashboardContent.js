import React, { useState, useEffect } from 'react'
import dashstyle from '../../assetsAdmin/css/style.module.css'
import "../../assetsAdmin/vendors/mdi/css/materialdesignicons.min.css"
import "../../assetsAdmin/vendors/flag-icon-css/css/flag-icon.min.css"
import "../../assetsAdmin/AdminDashboard.css";
import { booksApi } from '../../store/services';
import { useOutletContext } from 'react-router-dom';
import AdminComponent from './adminComponent';
import Lottie from 'react-lottie';
import RocketLottie from "./rocketCloud.json";


function DashboardContent() {

  const props = useOutletContext()
  const [user, setUser] = useState()
  const [usersCount, setUsersCount] = useState()
  const [ordersCount, setOrdersCount] = useState()
  const [writersCount, setWritersCount] = useState()
  const [booksCount, setBooksCount] = useState()
  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetAllBooksQuery({ salesSort: 'htl', limit: 3 })
  const [trendingBooks, setTrendingBooks] = useState()
  const getAllusers = booksApi.useGetAllUsersQuery()
  const [admins, setAdmins] = useState()

  useEffect(() => {
    if (props) {
      setUser(props.user)
      setUsersCount(props.usersCount)
      setOrdersCount(props.ordersCount)
      setWritersCount(props.writersCount)
      setBooksCount(props.booksCount)
    }
    if (data) {
      setTrendingBooks(data.data)
    }
    if (getAllusers.data) {
      setAdmins(getAllusers.data)
    }
  }, [props, data, getAllusers.data])

  if (user) {
    let rocketObj = {
      loop: true,
      autoplay: true,
      animationData: RocketLottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    return (
      <div className="page-body-wrapper">
        <div className="content-wrapper">
          {/* Change page content, related to selected navigation */}

          <div className="row pt-3">
            <div className={`col-12 grid-margin ${dashstyle.stretchCard} pt-5`}>
              <div className={`${dashstyle.card} ${dashstyle.adminGradientCard}`} id="gmov" >
                <div className={`${dashstyle.cardBody} py-0 px-0 px-sm-3`}>
                  <div className="row align-items-center">
                    <div className="col-4 col-sm-3 col-xl-2">
                      <span class={`${dashstyle.gradientAdminImg} ${dashstyle.imgFluid}`} />
                    </div>
                    <div className="col-5 col-sm-7 col-xl-8 p-0 mt-5 mb-5">

                      <h4 className="mb-1 mb-sm-0 m-2 h2 text-white font-weight-bold">Welcome Back, {user.fName} 🚀</h4>
                      <p className="mb-0 mt-1 font-weight-normal d-none d-sm-block text-white ps-3"> Check out your E-Bookalypse system!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`col-xl-3 col-sm-6 grid-margin ${dashstyle.stretchCard}`}>
            <div className={`${dashstyle.card} bg-dark`}>
                <div className={`${dashstyle.cardBody} bg-dark`}>
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0 text-white font-weight-bold fs-2">Users</h3>
                        <p className="text-success ml-2 mb-0 font-weight-bold fs-2">+{usersCount}</p>
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">Using E-Bookalypse</h6>
                </div>
              </div>
            </div>
            <div className={`col-xl-3 col-sm-6 grid-margin ${dashstyle.stretchCard}`}>
              <div className={`${dashstyle.card} bg-dark`}>
                <div className={`${dashstyle.cardBody} bg-dark`}>
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0 text-white font-weight-bold fs-2">Orders</h3>
                        <p className="text-success ml-2 mb-0 font-weight-bold fs-2">+{ordersCount}</p>
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">Orders Number</h6>
                </div>
              </div>
            </div>
            <div className={`col-xl-3 col-sm-6 grid-margin ${dashstyle.stretchCard}`}>
              <div className={`${dashstyle.card} bg-dark`}>
                <div className={`${dashstyle.cardBody} bg-dark`}>
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0 text-white font-weight-bold fs-2">Writers</h3>
                        <p className="text-success ml-2 mb-0 font-weight-bold fs-2">+{writersCount}</p>
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">Contract Writers</h6>
                </div>
              </div>
            </div>
            <div className={`col-xl-3 col-sm-6 grid-margin ${dashstyle.stretchCard}`}>
              <div className={`${dashstyle.card} bg-dark`}>
                <div className={`${dashstyle.cardBody} bg-dark`}>
                  <div className="row">
                    <div className="col-9">
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0 text-white font-weight-bold fs-2">Books</h3>
                        <p className="text-success ml-2 mb-0 font-weight-bold fs-2">+{booksCount}</p>
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted font-weight-normal">Categorised Books</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`col-md-4 grid-margin ${dashstyle.stretchCard}`} >
              <div className={`${dashstyle.card} bg-dark`}>
                <div className={`${dashstyle.cardBody} bg-dark`}>
                  <h4 className={`${dashstyle.cardTitle}`}>Trending Books</h4>
                  <div>
                    <Lottie options={rocketObj}
                      height={200}
                      width={200}
                      isStopped={false}
                      isPaused={false}
                    />
                  </div>
                  {
                    trendingBooks ? trendingBooks.map((t) => {
                      return (

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

                      : null
                  }

                </div>
              </div>
            </div>
            <div className={`col-md-8 grid-margin ${dashstyle.stretchCard}`}>
              <div className={`${dashstyle.card} bg-dark`}>
                <div className={`${dashstyle.cardBody} bg-dark`}>
                  <div className="d-flex flex-row justify-content-between">
                    <h4 className={`${dashstyle.cardTitle} mb-1 text-whight`}>Admins Role</h4>
                    <p className="text-muted mb-1">Your data status</p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className={`${dashstyle.previewList}`}>
                        {
                          admins ?

                            admins.map((admin) => {
                              if (admin.role == 'rootAdmin' || admin.role == 'admin') {

                                return (
                                  <AdminComponent admin={admin} key={admin._id} />
                                )
                              }
                            })

                            : null
                        }

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className={`${dashstyle.footer}`}>
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block"></span>

            </div>
          </footer>
        </div>
      </div>


    )

  }
}

export default DashboardContent
