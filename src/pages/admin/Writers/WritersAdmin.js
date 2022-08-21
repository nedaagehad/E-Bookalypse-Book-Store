import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { booksApi } from '../../../store/services';



const WritersAdmin = () => {

  const [writers, setWriters] = useState()
  const [page, setPage] = useState(1)
  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetAllWritersQuery({ page: page })
  // eslint-disable-next-line
  const [deleteNewWriter, response] = booksApi.useDeleteNewWriterMutation()
  useEffect(() => {
    if (data) {
      setWriters(data.data)
    }

  }, [data]);

  const nextPage = () => {
    setPage(page + 1)
  }
  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1)

    }
  }
  let deleteWriter = (e, id) => {
    const deletedItem = writers.find((w) => w._id === id)
    deleteNewWriter({ writerId: id, icon: deletedItem.image })
  }

  return (
    <div className="page-body-wrapper pt-5">
      <div className="content-wrapper pt-5">

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {writers !== undefined ? writers.map((writer, i) => {
              return (
                <tr key={writer._id}>
                  <td >{i + 1}</td>
                  <td >{writer.name}</td>
                  
                  <td ><Link to={'/admin/writer/updatewriter/' + writer._id} className="btn btn-primary" >Update</Link></td>

                  <td >
                  {/* eslint-disable-next-line */}
                    <a className="btn btn-danger" onClick={(e, writerid) => deleteWriter(e, writer._id)}>Delete</a>
                  </td>

                </tr>
              )
            })
              :
              null
            }

          </tbody>
        </table>
        <nav className="justify-content-between align-items-center" style={{ display: "flex" }}>
          <ul className="pagination m-0">
            <li class="page-item">
              {/* eslint-disable-next-line */}
              <a class="page-link" onClick={() => { prevPage() }} aria-label="Previous">
                <span aria-hidden="true">&laquo; Pre</span>
              </a>
            </li>
            <li className="page-item">
              {/* eslint-disable-next-line */}
              <a className="page-link" onClick={() => { nextPage() }} aria-label="Next">
                <span aria-hidden="true"> Next &raquo;</span>
              </a>
            </li>
          </ul>
          <div className="add-btn">
            <Link to="/admin/writer/addwriter" className='btn btn-success text-white' >Add Writer</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default WritersAdmin