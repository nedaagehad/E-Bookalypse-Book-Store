import React, { useEffect, useState } from 'react'
import { booksApi } from '../../../store/services'

function Orders() {
  const {data,isLoading,error} = booksApi.useGetAllOrdersQuery()
  const [orders,setOrders] = useState()
  useEffect(()=>{
    if(data){
      console.log(data)
    }
  },[data])
  return (
    <div className="page-body-wrapper pt-5">
      <div className="content-wrapper pt-5">
      <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              {/* <th scope="col">image</th> */}
              <th scope="col">book</th>
              <th scope="col">description</th>
              <th scope="col">publisher</th>
              <th scope="col">date</th>
              <th scope="col">price</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>


            </tr>
          </thead>
    
        </table>

          {/* <nav className="justify-content-between align-items-center" style={{display:"flex"}}>
              <ul className="pagination m-0">
                  <li class="page-item">
                  <a class="page-link"  onClick={()=>{prevPage()}} aria-label="Previous">
                      <span aria-hidden="true">&laquo; Pre</span>
                  </a>
                  </li>
                  <li className="page-item"> 
                  <a className="page-link" onClick={()=>{nextPage()}} aria-label="Next">
                      <span aria-hidden="true"> Next &raquo;</span>
                  </a>
                  </li>
              </ul>
          <div className="add-btn">
            <Link to="/admin/book/addBook" className='btn btn-success text-white' >Add Book</Link>

          </div>
          </nav> */}

      </div>
    </div>
  )
}

export default Orders