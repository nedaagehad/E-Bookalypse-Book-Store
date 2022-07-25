import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import  { useState,useEffect } from 'react'

const AddWriter = () => {


  
  
      const [writerImage, setWriterImage] = useState();
      const [writerData,setWriterData] = useState({
        writername:"",
        writergender:"",
        writerbio:"",
        writerdb:"",
        writerpb:"",
      
      });
 
      const [dataErr,setErrData]  = useState({
        writername:"",
        writergender:"",
        writerbio:"",
        writerdb:"",
        writerpb:"",
        
    })
  
    
    
  
      let onInputChange = (e)=>{
        // console.log(e.target.value)
        setWriterData({
          ...writerData,
          [e.target.id] : e.target.value
        })
        // console.log(writerData)
        validateBook(e.target.id,e.target.value)
      }
  
      let validateBook = (name,value)=>{
        if(name === 'writername' || name ==='writergender' ){
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
          setWriterImage(e.target.files[0])
          
        }

  let addWriter = (e) =>{
      
    e.preventDefault();
    // console.log(writerData)
  //  console.log(dataErr)
   if(writerData.writername !== '' && writerData.gender !== '' ){
    if(Object.values(dataErr).every((value) => value == '')){
    
      // const imagedata = new FormData()
      // imagedata.append("bookimage",BookImage)


      // console.log(BookImage)
    // axios.post('http://localhost:5000/api/books', BookData ).then((r)=>{
    //     axios.post("http://localhost:5000/api/books",imagedata).then((r)=>{console.log(r.data)}).catch((err) =>{console.log(err)})          

    // }).catch((err)=>{console.log(err)})
    
      const data = new FormData();
      data.append('writerimage',writerImage)
      // data.append('bookData',BookData)
      data.append("name",writerData.writername)
      data.append("date_birth",writerData.writerdb)
      data.append("place_birth",writerData.writerpb)
      data.append("bio",writerData.writerbio)
      data.append("gender",writerData.writergender)


   axios.post("http://localhost:5000/api/writers",data).then((r)=>{console.log(r) }).catch((err)=>{console.log(err)})
      
    }


   }
  }
  


  return (
    <div className="container mt-5 mb-5">
    <form  className='row' method="POST"  encType="multipart/form-data">
      <div className="col-md-6 mt-2">
        <label htmlFor="writername" className="form-label">Writer Name : </label>
        <input type="text" className='form-control'    name="writername" id="writername" placeholder="Writer Name" onChange={(e)=>onInputChange(e)}  />
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="writergender" className="form-label">Writer Gender : </label>
          <div className='genders d-flex justify-content-evenly'>
          <div class="form-check">
          <input class="form-check-input" type="radio" value="male"  name="writergender" id="writergender" onChange={(e)=>onInputChange(e)} />
          <label class="form-check-label" htmlFor="writergender">
            Male
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" value="female" name="writergender" id="writergender" onChange={(e)=>onInputChange(e)} />
          <label class="form-check-label" htmlFor="writergender">
            Female
          </label>
        </div>
        </div>

      </div>
      <div className='col-md-12 mt-2'>
        <label htmlFor="writerbio" className="form-label ">Writer Bio : </label>
        <textarea rows="3" className="form-control"   name="writerbio"  id="writerbio" onChange={(e)=>onInputChange(e)} ></textarea>

      </div>
      <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
        <label htmlFor="writerimg" className="form-label ">Writer Image : </label>
        <input type="file" className='form-control' id="writerimage" name="writerimage" onChange={(e) => onFileChange(e)} />
      </div>
      <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
        {writerImage? <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(writerImage)}  /> : " There Is No Image Yet"}
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="writerdate" className="form-label">Date of Birth : </label>
        <input type="date" className='form-control'  id="writerdb" name="writerdate"onChange={(e)=>onInputChange(e)}  placeholder="Release Date"   />
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="writerplace" className="form-label">Place of Birth : </label>
        <input type="text" className='form-control'  id="writerpb" name="writerplace"onChange={(e)=>onInputChange(e)}  placeholder="Book Publisher" />
      </div>

      <div className='col-md-12 mt-4'>
        <input type="submit" className='btn btn-success form-control'  onClick={(e)=>addWriter(e)}  value="Add Writer" />
      </div>
    </form>
  </div>  
  )
              }

export default AddWriter