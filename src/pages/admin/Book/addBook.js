import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import  { useState,useEffect } from 'react'


const AddBook = () => {
    const [BookImage, setBookImage] = useState();
    const [BookPdf, setBookPdf] = useState();

    const [BookData,setBookData] = useState({
      booktitle:"",
      bookprice:"",
      bookdescription:"",
      bookdate:"",
      bookpublisher:"",
      booklang:"",
      bookpages:"",
      category:"",
      writer:"",

    });
    const [categories,setCategories] =useState()
    const [writers,setWriters] =useState()

    useEffect(() => {
      axios.get('https://e-bookalypse.herokuapp.com/api/categories').then((res)=>setCategories(res.data.categories)).catch((err)=>console.log(err))
      axios.get('https://e-bookalypse.herokuapp.com/api/writers').then((res)=>setWriters(res.data.writers)).catch((err)=>console.log(err))

    }, []);
    const [dataErr,setErrData]  = useState({
      booktitle:"",
      bookprice:"",
      bookdescription:"",
      bookdate:"",
      bookpublisher:"",
      booklang:"",
      bookpages:"",
      
  })

    const initialValues = {
        booktitle:"",
        bookprice:"",
        bookdescription:"",
        bookdate:"",
        bookpublisher:"",
        booklang:"",
        bookpages:"",
      }
  
      const validate = values =>{
        let errors = {}
        if(!values.booktitle){
          errors.booktitle = 'Required'
        }
        if(!values.bookdescription){
          errors.bookdescription = 'Required'
        }
        if(!values.bookprice ){
          errors.bookprice = 'Required'
        }
  
        return errors
      }
  
      const onSubmit = values =>{
        // const data = new FormData()
        // //  data.append("bookimage",BookImage)
        // //  data.append("title",values.booktitle)
        // //  data.append("price",values.bookprice)
        // //  data.append("description",values.bookdescription)
        // //  data.append("date",values.bookdate)
        // //  data.append("publisher",values.bookpublisher)
        // //  data.append("lang",values.booklang)
        // //  data.append("pages",values.bookpages)
         // console.log(BookImage)  
        if(BookImage !== undefined){
          
          formik.values.bookimage = BookImage
        }
       axios.post('https://e-bookalypse.herokuapp.com/api/books', formik.values )
       .then(res => console.log(res))
       .catch((err)=>{console.log(err)});
    
      }
  
      const formik = useFormik({
        initialValues:initialValues,
        onSubmit: onSubmit,
        validate:validate
      })
  

    let onInputChange = (e)=>{
      // console.log(e.target.value)
      setBookData({
        ...BookData,
        [e.target.id] : e.target.value
      })
      // console.log(BookData)
      validateBook(e.target.id,e.target.value)
    }

    let validateBook = (name,value)=>{
      if(name === 'booktitle' || name ==='bookdescription' || name ==='bookprice' || name ==='category'  || name ==='writer'){
        // console.log(value)
        setErrData({
          ...dataErr,
          booktitle : 
          value === '' ? 'Error This Field is Required' 
          :
          ''
        })

      }


    }  
    let onFileChange = (e)=>{
        // console.log(e.target.files[0])
        setBookImage(e.target.files[0])
        
      }
    let onPdfChange = (e)=>{
      setBookPdf(e.target.files[0])
    }
    
    let addbook = (e) =>{
      
      e.preventDefault();
    //  console.log(dataErr)
     if(BookData.booktitle !== '' && BookData.bookprice !== '' && BookData.bookdescription !== '' && BookData.category !== '' ){
      if(Object.values(dataErr).every((value) => value == '')){
      
        // const imagedata = new FormData()
        // imagedata.append("bookimage",BookImage)

  
        // console.log(BookImage)
      // axios.post('http://localhost:5000/api/books', BookData ).then((r)=>{
      //     axios.post("http://localhost:5000/api/books",imagedata).then((r)=>{console.log(r.data)}).catch((err) =>{console.log(err)})          

      // }).catch((err)=>{console.log(err)})
      
        const data = new FormData();
        data.append('bookimage',BookImage)
        data.append('booksrc',BookPdf)

        // data.append('bookData',BookData)
        data.append("title",BookData.booktitle)
        data.append("price",BookData.bookprice)
        data.append("description",BookData.bookdescription)
        data.append("date",BookData.bookdate)
        data.append("publisher",BookData.bookpublisher)
        data.append("lang",BookData.booklang)
        data.append("pages",BookData.bookpages)
        data.append("category",BookData.category)
        data.append("writer",BookData.writer)


     axios.post("https://e-bookalypse.herokuapp.com/api/books",data).then((r)=>{console.log(r) }).catch((err)=>{console.log(err)})
        
      }


     }
  
    }

  return (
  <div className="container mt-5 mb-5">
    <form  className='row' method="POST"  encType="multipart/form-data">
      <div className="col-md-6 mt-2">
        <label htmlFor="booktitle" className="form-label">Book Title : </label>
        <input type="text" className='form-control'    name="booktitle" id="booktitle" placeholder="Book Title"  onChange={(e)=>onInputChange(e)}  />
        {formik.touched.booktitle  && formik.errors.booktitle ? <div className="error"> {formik.errors.booktitle} </div> : null}
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="bookprice" className="form-label">Book Price : </label>
        <input type="text" className='form-control'   name="bookprice" id="bookprice" placeholder="Book Price" onChange={(e)=>onInputChange(e)}  />
        {formik.touched.bookprice && formik.errors.bookprice ? <div className="error"> {formik.errors.bookprice} </div> : null}

      </div>
      <div className='col-md-12 mt-2'>
        <label htmlFor="bookdescription" className="form-label ">Book Description : </label>
        <textarea rows="3" className="form-control"   name="bookdescription"  id="bookdescription" onChange={(e)=>onInputChange(e)} ></textarea>
        {formik.touched.bookdescription && formik.errors.bookdescription ? <div className="error"> {formik.errors.bookdescription} </div> : null}

      </div>
      <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
        <label htmlFor="bookimage" className="form-label ">Book Image : </label>
        <input type="file" className='form-control' id="bookimage" name="bookimage" onChange={(e) => onFileChange(e)} />
      </div>
      <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
        {BookImage? <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(BookImage)}  /> : " There Is No Image Yet"}
      </div>
      <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
        <label htmlFor="booksrc" className="form-label ">Book PDF : </label>
        <input type="file" className='form-control' id="booksrc" name="booksrc" onChange={(e) => onPdfChange(e)} />
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="bookdate" className="form-label">Book Release Date : </label>
        <input type="date" className='form-control'  id="bookdate" name="bookdate"onChange={(e)=>onInputChange(e)}  placeholder="Release Date"   />
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="bookpublisher" className="form-label">Book Publisher : </label>
        <input type="text" className='form-control'  id="bookpublisher" name="bookpublisher"onChange={(e)=>onInputChange(e)}  placeholder="Book Publisher" />
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="booklang" className="form-label">Book Language : </label>
        <input type="text" className='form-control'  id="booklang" name="booklang"onChange={(e)=>onInputChange(e)}  placeholder="Book Language"    />
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="bookpages" className="form-label">Book Pages Number : </label>
        <input type="number" className='form-control'  id="bookpages" name="bookpages"onChange={(e)=>onInputChange(e)}  placeholder="Book Pages Number"    />
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="category" className="form-label">Select Category : </label>
              <select onChange={(e)=>onInputChange(e)} id="category" name="category" class="form-select" aria-label="Select Category">
                {categories ? categories.map((category)=>{
                   return (
                    <option key={category._id} value={category._id}>{category.title}</option>
                      
                   )

                }):null}
              </select>
      </div>
      <div className='col-md-6 mt-2'>
      <label htmlFor="category" className="form-label">Select Writer : </label>
              <select onChange={(e)=>onInputChange(e)} id="writer" name="writer" class="form-select" aria-label="Select Category">
                {writers ? writers.map((writer)=>{
                   return (
                    <option key={writer._id} value={writer._id}>{writer.name}</option>
                      
                   )

                }):null}
              </select>      </div>
      <div className='col-md-12 mt-4'>
        <input type="submit" className='btn btn-success form-control'  onClick={(e)=>addbook(e)}  value="Add Book" />
      </div>
    </form>
  </div>  
  )
}

export default AddBook