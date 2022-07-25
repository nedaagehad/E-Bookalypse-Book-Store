import axios from 'axios';
import React,{useState} from 'react'

const AddCategory = () => {
    const [category, setCategory] = useState({
      title:'',
      icon: ''
    });
    const [CatImg,setCatImg] = useState()
    let onInputChange = (e)=>{
        // console.log(e.target.value)
        setCategory({
          ...category,
          [e.target.id] : e.target.value
        })
      }

      
      let onFileChange = (e)=>{
        // console.log(e.target.files[0])
        setCatImg(e.target.files[0])
        
      }
      
      let addCategory = (e)=>{
         e.preventDefault();
         const data = new FormData();
         data.append('catimage',CatImg)
         data.append("cattitle",category.title)
          axios.post("http://localhost:5000/api/categories",data).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
 
 
      }
  return (
    <div className="container">
        <form method='POST' className='row' encType="multipart/form-data">
            <div className="col-md-12 mt-2">
                <label htmlFor="title" className="form-label">Category Title : </label>
                <input type="text" className='form-control'    name="title" id="title" placeholder="Category Title"  onChange={(e)=>onInputChange(e)}  />
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
              <label htmlFor="catimage" className="form-label ">Category Image : </label>
              <input type="file" className='form-control' id="catimage" name="catimage" onChange={(e) => onFileChange(e)} />
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
              {CatImg? <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(CatImg)}  /> : " There Is No Image Yet"}
            </div>
            <div className="col-md-12 mt-2">
                <input type="submit" className='btn btn-success' value="Add Category" onClick={(e)=>addCategory(e)}  />
            </div>
        </form>
    </div>
  )
}

export default AddCategory