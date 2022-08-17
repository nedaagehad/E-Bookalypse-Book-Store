import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { booksApi } from '../../../store/services';
import { Link } from 'react-router-dom';
const UsersView = () => {
    const [users, setUsers] = useState();
    const {data,isLoading,error} = booksApi.useGetAllUsersQuery()
    // const 
    useEffect(() => {
      if(data){
        setUsers(data)
      }
    },[data])

    const deleteItem= (userID)=>{
      // console.log(userID)
      const deletedItem = users.find((u)=> u._id === userID)
      // console.log(deletedItem)
  
      // axios.delete("http://localhost:8080/api/user/"+userID+`?userName=${deletedItem.userName}`,{params:{icon:deletedItem.image}})
  
    }
    if(users){
      return (
        <div className="page-body-wrapper pt-5">
        <div className="content-wrapper pt-5">
    
          {/* <div className='addBook'>
          <Link to="/admin/book/addbook" className='btn btn-success' >Add Book</Link>
          </div> */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                {/* <th scope="col">image</th> */}
                <th scope="col">Full Name</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                {/* <th scope="col">points</th> */}
                {/* <th scope="col">Update</th>*/}
                <th scope="col">Update</th> 
    
    
              </tr>
            </thead>
            <tbody className="text-white">
              {users.map((user,i)=>{
                return (
                <tr key={user._id}>
                  <td >{i+1}</td>
                  {/* <td ><img width="150px" src={"../uploads/users/"+ user.image} /></td> */}
                  <td >{user.fName + " " + user.lName}</td>
                  <td >{user.userName}</td>
                  <td >{user.email}</td>
                  <td >{user.phone}</td>
                  {/* <td >{user.points}</td> */}
                  {/* <td ><Link to={'/admin/book/updateBook/'+book._id} className="btn btn-primary" >Update</Link></td>*/}
                  
                  <td ><Link className="btn btn-primary" to={'/admin/user/UpdateUserRole/'+user._id} onClick={(e)=>deleteItem(user._id)}>Update Role</Link></td> 
    
                </tr>
                )
              })
             
              }
    
            </tbody>
          </table>
        </div>
    
    
      </div>
      )

    }
}

export default UsersView