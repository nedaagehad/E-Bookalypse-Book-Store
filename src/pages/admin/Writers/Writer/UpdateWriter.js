import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import  { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';


const UpdateWriter = () => {
    const [writer,setWriter] = useState()

    let params = useParams()
    useEffect(() => {
        console.log(params)
        axios.get(`http://localhost:5000/api/writers/${params.id}`)
        .then((res)=>{setWriter(res.data.writer)})

    }, []);
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


  
      let getDate = ()=>{
        if(writer.date_birth){

          let formatDate = writer.date_birth.split("T")
          return formatDate[0]
        }
        else{
          return null
        }
      }
      
    let onInputChange = (e)=>{
      // console.log(writer)
      setWriter({
        ...writer,
        [e.target.id] : e.target.value
      })
      validateBook(e.target.id,e.target.value)
    }

    let validateBook = (name,value)=>{
      if(name === 'writername' || name ==='writergender' ){
        // console.log(value)
        setErrData({
          ...dataErr,
          writername : 
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
    
    let updateWriter = (e) =>{
      
      e.preventDefault();
    //  console.log(dataErr)
    //  if(BookData.booktitle !== '' && BookData.bookprice !== '' && BookData.bookdescription !== ''){
    //   if(Object.values(dataErr).every((value) => value == '')){
      


  // console.log(writer)

      
        const data = new FormData();
        data.append('writerimage',writerImage)
        // data.append('bookData',BookData)
        data.append("name",writer.name)
        data.append("date_birth",writer.date_birth)
        data.append("place_birth",writer.place_birth)
        data.append("bio",writer.bio)
        data.append("gender",writer.gender)
        data.append("oldImg",writer.image)

      //  console.log(currentBook.poster)

     axios.put(`http://localhost:5000/api/writers/${writer._id}`,data).then((r)=>{console.log(r) }).catch((err)=>{console.log(err)})
        
    //   }


    //  }
  
    }

 

  return (
    
    <div className="container mt-5 mb-5">
        {writer ? 
        
        <form  className='row' method="POST"  encType="multipart/form-data">
      <div className="col-md-6 mt-2">
        <label htmlFor="booktitle" className="form-label">Writer Name : </label>
        <input type="text"  className='form-control' value={writer.name}   name="name" id="name" placeholder="Writer name"  onChange={(e)=>onInputChange(e)}  />
      </div>
      <div className='col-md-6 mt-2'>
          <label htmlFor="writergender" className="form-label">Writer Gender : </label>
          <div className='genders d-flex justify-content-evenly'>
            <div class="form-check">
            {writer.gender == "male" ?  
                <input checked class="form-check-input" type="radio" value="male"  name="gender" id="gender" onChange={(e)=>onInputChange(e)} />

            
            :<input class="form-check-input" type="radio" value="male"  name="gender" id="gender" onChange={(e)=>onInputChange(e)} />
            } 
              <label class="form-check-label" htmlFor="gender">
                Male
              </label>
            </div>
            <div class="form-check">
            {writer.gender == "female" ?  

              <input checked class="form-check-input" type="radio" value="female" name="gender" id="gender" onChange={(e)=>onInputChange(e)} />
              :
              <input  class="form-check-input" type="radio" value="female" name="gender" id="gender" onChange={(e)=>onInputChange(e)} />
              
              }<label class="form-check-label" htmlFor="gender">
                Female
              </label>
            </div>
          </div>
      </div>
      <div className='col-md-12 mt-2'>
        <label htmlFor="bio" className="form-label ">Writer Bio : </label>
        <textarea rows="3" className="form-control"    name="bio"  id="bio" value= {writer.bio} onChange={(e)=>onInputChange(e)} ></textarea>

      </div>
      <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
        <label htmlFor="image" className="form-label ">Writer Image : </label>
        <input type="file" className='form-control'  id="image" name="image" onChange={(e) => onFileChange(e)} />
      </div>
      <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
        {writerImage ?  
        
        <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(writerImage)} /> 
        :  <img  className="border-2" width="50%" height="100%" src={'/uploads/writers/'+writer.image} /> }
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="date_birth" className="form-label">ًWriter's Birth Date : </label>
        <input type="date" className='form-control'  value={getDate()} id="date_birth" name="date_birth"onChange={(e)=>onInputChange(e)}  placeholder="Release Date"   />
        
      </div>
      <div className='col-md-6 mt-2'>
        <label htmlFor="place_birth" className="form-label">Place of Birth : </label>
        <input type="text" className='form-control' value={writer.place_birth} id="place_birth" name="place_birth"onChange={(e)=>onInputChange(e)}  placeholder="Place Birth" />
      </div>


      <div className='col-md-12 mt-4'>
        <input type="submit" className='btn btn-success form-control'  onClick={(e)=>updateWriter(e)}  value="Update Writer" />
      </div>
    </form>
        
        
        :null}
    
  </div>  
  )
}

export default UpdateWriter