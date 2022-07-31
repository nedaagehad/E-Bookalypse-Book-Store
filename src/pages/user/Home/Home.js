import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HomeSlider from '../../../components/HomeSlider/HomeSlider';
import HomeCategories from '../../../components/HomeSlider/HomeCategories/HomeCategories';
import FlashSaleSlider from "../../../components/HomeSlider/FlashSaleSlider"
import TrendingBooksUp1 from '../../../components/TrendingBooksUp/TrendingBooksUp1';
import OurPartners from '../../../components/OurPartners/OurPartners';


function Home() {
  // Testing Starter Api 

  const [books, setBooks] = useState();
  const [newBook,setNewBook]= useState({
    id: Math.random(),
    title:'',
    description:'',
  });
  useEffect(()=>{
    
    axios.get('http://localhost:5000/api/books')
    .then((res)=>{setBooks(res.data.book)})
    .catch((err)=>{console.log(err)})


  })

  let onInputChange =(e)=>{
    setNewBook({
      ...newBook,
      [e.target.id] : e.target.value
    })
  }

  let addBook = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/books',newBook)
    .then(res => console.log(res))
    .catch((err)=>{console.log(err)});
 
  }

  // end Section ( TESTIING STARTER API)




      {/* Home Test Axios
      <>
        <div className='container mb-5'>
          <div className='row'>
          {books? 
            books.map((book)=>{
              return(
                <div key={book._id} className='col-lg-4'>
                  <div  className='card'>
                      <h5>{book.title}</h5>
                      <p>{book.description}</p>
                  </div>
                </div>
              )
            })
            :
            null
          }
        
          </div>
        </div>
          <div className="container formAddBook">
          <form method="POST">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input type="text" className="form-control" id="description" onChange={onInputChange} />
            </div>
            
            <button type="submit" onClick={addBook} className="btn btn-primary">Add Book</button>
          </form>
          </div>
        </> 
         End Section Test Axios */}
     


  return (
    <>
    <div className='mainContent'>

      <HomeSlider />
      <TrendingBooksUp1/>
        <HomeCategories data={[
          { Category_Name:"Biography", Num_of_books:30, },
          { Category_Name:"Children", Num_of_books:30, },
          { Category_Name:"Horror", Num_of_books:30, },
          { Category_Name:"History", Num_of_books:30, },
          { Category_Name:"Scientific", Num_of_books:30, },
          { Category_Name:"Novels", Num_of_books:30, },
          { Category_Name:"Arts", Num_of_books:0, },
          { Category_Name: "Poetries", Num_of_books: 0, },
          { Category_Name:"Religious", Num_of_books:0, }
        ]} />
      <FlashSaleSlider />
      <OurPartners />
    </div>
    </>
  )
}

export default Home