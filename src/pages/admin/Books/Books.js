import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import  { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

function Books() {


    const [Books,setBooks] = useState()

    useEffect(() => {
      
      axios.get('https://e-bookalypse.herokuapp.com/api/books').then(
        (res)=>{setBooks(res.data.book)}
      ).catch((err) => {console.log(err)});

      
    }, []);
    


  


  let deleteItem= (bookID)=>{
    axios.delete("https://e-bookalypse.herokuapp.com/api/books"+bookID)
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
            {Books !== undefined ? Books.map((book,i)=>{
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