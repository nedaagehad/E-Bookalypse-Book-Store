import React,{useState,useEffect} from 'react'
import '../../../assetsAdmin/css/style.css';
import "../../../assetsAdmin/vendors/mdi/css/materialdesignicons.min.css"
import AdminSidebar from '../../../components/AdminSidebar/AdminSidebar';
import AdminNavbar from '../../../components/AdminNavbar/AdminNavbar';
import DashboardContent from '../../../components/DashboardContent/DashboardContent';
import { Outlet } from 'react-router-dom';
import { booksApi } from '../../../store/services';
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../../Firebase/firebaseImage';
function HomeDashboard() {
  const [getUserByID] = booksApi.useGetUserByIDMutation()
  const [user,setUser] = useState()
  const [userImg,setUserImage] = useState()
  const getAllUsers  = booksApi.useGetAllUsersQuery()
  const [usersCount , setUsersCount] = useState()
  const getAllOrders = booksApi.useGetOrdersCountQuery()
  const [ordersCount , setOrdersCount] = useState()
  const getAllWriters = booksApi.useGetWritersCountQuery()
  const [writersCount,setWritersCount] = useState()
  const getAllBooks = booksApi.useGetAllBooksCountQuery()
  const [booksCount,setBooksCount] = useState()
  useEffect(() => {
    getUserByID().then((user)=>{
        setUser(user.data)
        const starsRef = ref(storage, `/uploads/users/${user.data.image}`);
        getDownloadURL(starsRef).then( (url)=>{
          setUserImage(url)  
          // console.log(url)
        }).catch((error) => {console.log(error)});
       
    })

    if(getAllUsers.data){
      setUsersCount(getAllUsers.data.length)
    }
    if(getAllOrders.data){
      setOrdersCount(getAllOrders.data.count)
      console.log(getAllOrders.data)
    }
    if(getAllWriters.data){
      setWritersCount(getAllWriters.data.count)
      // console.log(getAllWriters.data)
    }
    if(getAllBooks.data){
      setBooksCount(getAllBooks.data.count)
    }

  }, [getAllUsers.data,getAllOrders.data,getAllWriters.data,getAllBooks.data]);
    return (
        <div className="container-scroller bg-dark">
           
            <AdminNavbar user={user} userImg={userImg} />
            <AdminSidebar user={user} userImg={userImg} />
            {/* <div className="page-body-wrapper"> */}
            <Outlet context={{user:user,usersCount : usersCount,ordersCount:ordersCount ,writersCount:writersCount ,booksCount : booksCount}}/> 
          {/* </div> */}


        </div>
    )
  }
  
  export default HomeDashboard