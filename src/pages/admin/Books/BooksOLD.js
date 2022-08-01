import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import  { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { fetchAllBooks } from '../../../store/reducers/booksReducer.js/BooksReducer';


function Books() {


    const [Books,setBooks] = useState()
    const books = useSelector(state=>state.books.books)
    const booksStatus = useSelector(state => state.books.status)
    const dispatch  = useDispatch()
    // console.log(booksStatus)
    let params = {limit:5,priceMin:5,priceMax:10}
    useEffect(() => {
      if(booksStatus == 'idle'){
         dispatch(fetchAllBooks(params))
      }else if(booksStatus =='Loading'){
        console.log("loading")
      }else {
        console.log('noo')
      }

      // axios.get('https://e-bookalypse.herokuapp.com/api/books').then(
      //   (res)=>{setBooks(res.data.data)}
      // ).catch((err) => {console.log(err)});

      
      if(booksStatus == 'Success'){
        // console.log("books here")
        
        setBooks(books.data)
      }
    }, [booksStatus,dispatch]);
    


// Create a reference to the file we want to download
var starsRef = storageRef.child('images/stars.jpg');

// Get the download URL
starsRef.getDownloadURL()
.then((url) => {
  
})

  let deleteItem= (bookID)=>{
    const deletedItem = Books.find((b)=> b._id === bookID)
    // console.log(deletedItem)

    axios.delete("http://localhost:8080/api/admin/books/"+bookID,{params:{icon:deletedItem.poster,src:deletedItem.source}})
  }


  return (
    <div>

        

      <div className="container">
        <div className='addBook'>
        <Link to="/admin/book/addbook" className='btn btn-success' >Add Book</Link>
        </div>
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
            {console.log(Books)}
            {Books !== undefined && Books !== "Request failed with status code 500" ? Books.map((book,i)=>{
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


    </div>

  )
}

export default Books