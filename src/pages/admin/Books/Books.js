import React, { useState, useEffect } from 'react'
import { booksApi } from '../../../store/services'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decPage, page } from '../../../store/reducers/filterReducer/filterReducer';

function Books() {

  const [books, setBooks] = useState()
  const filterState = useSelector(state => state.filter)
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const { data, error, isLoading } = booksApi.useGetAllBooksQuery(filterState)
  // eslint-disable-next-line
  const [deleteBook, response] = booksApi.useDeleteBookMutation();

  useEffect(() => {
    if (data) {
      setBooks(data.data)
    }

  }, [data])
  const deleteItem = (bookId) => {
    const deletedItem = books.find((b) => b._id === bookId)

    deleteBook({ bookId: bookId, bookOldFiles: { icon: deletedItem.poster, src: deletedItem.source } })
  }

  const nextPage = () => {
    if (data.data.length !== 0) {
      dispatch(page())

    }

    if (data.data.length === 0) {
      dispatch(decPage())
    }
  }
  const prevPage = () => {
    dispatch(decPage())

  }

  return (
    <div className="page-body-wrapper p-5" style={{flex:"auto"}}>
      <div className="content-wrapper pt-5">
        <table className="table">
          <thead className="text-secondary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">book</th>
              <th scope="col">description</th>
              <th scope="col">publisher</th>
              <th scope="col">date</th>
              <th scope="col">price</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="text-white">

            {books !== undefined ? books.map((book, i) => {

              return (
                <tr key={book._id}>
                  <td >{i + 1}</td>
                  <td >{book.title.substring(0, 30) + "..."}</td>
                  <td >{book.description.substring(0, 20) + "..."}</td>
                  <td >{book.publisher}</td>
                  <td >{book.date_release ? book.date_release.split("T")[0] : null}</td>
                  <td >{book.price}</td>
                  <td ><Link to={'/admin/book/updateBook/' + book._id} className="btn btn-primary" >Update</Link></td>

                  <td >
                    {/* eslint-disable-next-line */}
                    <a className="btn btn-danger" onClick={(e) => deleteItem(book._id)}>Delete</a>
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
            <Link to="/admin/book/addBook" className='btn btn-success text-white' >Add Book</Link>

          </div>
        </nav>

      </div>
    </div>
  )
}

export default Books