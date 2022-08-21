import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { booksApi } from '../../../store/services'

const UpdateUserRole = () => {
    let params = useParams()
    // console.log(params.id)
    const [getUserByID] = booksApi.useGetUserByIDMutation()
    const [updateUserRole]  = booksApi.useUpdateUserRoleMutation()
    const [user,setUser]= useState()
    const [userRole,setUserRole] = useState()
    useEffect(() => {
        getUserByID(params.id).then((user)=>{
            console.log(user)
            setUser(user.data)
            setUserRole(user.data.role)
        })
    },[]);

    const getRole = (e)=>{
        // console.log(e.target.value)
        setUserRole(e.target.value)
        
    }

    const updateRole = (e)=>{
        e.preventDefault();
        updateUserRole({userName:user.userName,role:userRole}).then((r)=>{
            console.log(r)
        }).catch((error) => {console.log(error)})
    }

    if(user){
        return (
            <div className="page-body-wrapper p-5" style={{flex:"auto"}}>
            <div className="content-wrapper pt-5">
      
                  <div className='row text-white'>
                      <div className="col-md-4">
                          {user.fName + ' '+user.lName}
                      </div>
                      <div className='col-md-4'>
                        <select className="form-select" value={userRole} onChange={(e)=>getRole(e)} aria-label="Default select example">
                            <option value="regUser">User</option>
                            <option value="rootAdmin">Admin</option>
                        </select>
                      </div>
                      <div className='col-md-4'>
                        <button onClick={(e)=>updateRole(e)} className="btn btn-success" type='submit'>
                            Submit
                        </button>
                         
                      </div>
                  </div>
              </div>
          </div>
        )

    }
}

export default UpdateUserRole