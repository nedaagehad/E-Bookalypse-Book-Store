import React, { useEffect, useState } from 'react'
import { booksApi } from '../../../store/services';
import { Link } from 'react-router-dom';

const UsersView = () => {

  const [users, setUsers] = useState();
  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetAllUsersQuery()

  useEffect(() => {
    if (data) {
      setUsers(data)
    }
  }, [data])

  const deleteItem = (userID) => {
    // eslint-disable-next-line
    const deletedItem = users.find((u) => u._id === userID)
  }
  if (users) {

    return (
      <div className="page-body-wrapper pt-5">
        <div className="content-wrapper pt-5">

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {users.map((user, i) => {
                return (
                  <tr key={user._id}>
                    <td >{i + 1}</td>
                    <td >{user.fName + " " + user.lName}</td>
                    <td >{user.userName}</td>
                    <td >{user.email}</td>
                    <td >{user.phone}</td>

                    <td ><Link className="btn btn-primary" to={'/admin/user/UpdateUserRole/' + user._id} onClick={(e) => deleteItem(user._id)}>Update Role</Link></td>

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