import React, { useState,useEffect } from 'react'
import { booksApi } from '../../../store/services'
import { Link } from 'react-router-dom';



function Books()  {
    const [books,setBooks] = useState()
    // ,limit:2,category:"horror",rate:2,priceMin:0,priceMax:20,priceSort:"htl"
    const { data, error, isLoading } = booksApi.useGetAllBooksQuery({page:28})
    const [deleteBook,response] = booksApi.useDeleteBookMutation();
    // console.log(data)
    useEffect(()=>{
      if(data){
        setBooks(data.data)
      }
      
      },[data])
    const deleteItem = (bookId)=>{
      // icon:deletedItem.poster,src:deletedItem.source
      const deletedItem = books.find((b)=> b._id === bookId)

      deleteBook({bookId:bookId,bookOldFiles:{icon:deletedItem.poster,src:deletedItem.source}})
    }
 
  return (
    <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">image</th>
              <th scope="col">book</th>
              <th scope="col">description</th>
              <th scope="col">publisher</th>
              <th scope="col">date</th>
              <th scope="col">price</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>


            </tr>
          </thead>
          <tbody>
          
          {/* {console.log(books)} */}
          {books !== undefined  ? books.map((book,i)=>{
              return (
              <tr key={book._id}>
                <td >{i+1}</td>
                <td ><img width="150px" src={"../uploads/books/"+ book.poster} /></td>
                <td >{book.title}</td>
                <td >{book.description}</td>
                <td >{book.publisher}</td>
                <td >{book.date_release}</td>
                <td >{book.price}</td>
                <td ><Link to={'/admin/book/updateBook/'+book._id} className="btn btn-primary" >Update</Link></td>

                <td ><a className="btn btn-danger" onClick={(e)=>deleteItem(book._id)}>Delete</a></td>

              </tr>
              )
            })
            :
            null
            }

          </tbody>
        </table>
    </div>
  )
}

export default Books