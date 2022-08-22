import React,{useState,useEffect} from 'react'
import dashstyle from '../../../assetsAdmin/css/style.module.css'
import "../../../assetsAdmin/vendors/mdi/css/materialdesignicons.min.css"
import AdminSidebar from '../../../components/AdminSidebar/AdminSidebar';
import AdminNavbar from '../../../components/AdminNavbar/AdminNavbar';
import { Outlet } from 'react-router-dom';
import { booksApi } from '../../../store/services';
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../../../Firebase/firebaseImage';
import DashboardContent from '../../../components/DashboardContent/DashboardContent';

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
        }).catch((error) => {console.log(error)});
       
    })

    if(getAllUsers.data){
      setUsersCount(getAllUsers.data.length)
    }
    if(getAllOrders.data){
      setOrdersCount(getAllOrders.data.count)
    }
    if(getAllWriters.data){
      setWritersCount(getAllWriters.data.count)
    }
    if(getAllBooks.data){
      setBooksCount(getAllBooks.data.count)
    }

  }, [getAllUsers.data,getAllOrders.data,getAllWriters.data,getAllBooks.data]);
    return (
        <div className={`${dashstyle.containerScroller} bg-dark`} style={{minHeight: "100vh"}}>
            <AdminNavbar user={user} userImg={userImg} />
            <AdminSidebar user={user} userImg={userImg} />
            
            <Outlet  context={{user:user,usersCount : usersCount,ordersCount:ordersCount ,writersCount:writersCount ,booksCount : booksCount}}/> 
        </div>
    )
  }
  
  export default HomeDashboard
