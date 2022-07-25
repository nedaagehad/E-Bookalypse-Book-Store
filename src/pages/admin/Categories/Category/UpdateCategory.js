import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const UpdateCategory = () => {
  let params = useParams()
  const [category, setCategory] = useState({
    title:'',
    icon:'',
    oldIcon:''
  });
  const [CatImg,setCatImg] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/api/categories/"+params.id).then((res)=>setCategory(res.data.category))
    .catch((err) => console.log(err))
  }, []);


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

    let updateCategory = (e)=>{
      e.preventDefault();
      const data = new FormData();
      data.append('catimage',CatImg)
      data.append("title",category.title)
      data.append("oldIcon",category.icon)

      axios.put("http://localhost:5000/api/categories/"+params.id,data).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})


   }

  return (
    <div className="container">
        <form method='POST' className='row'>
            <div className="col-md-12 mt-2">
                <label htmlFor="title" className="form-label">Category Title : </label>
                <input type="text" className='form-control' value={category ? category.title : "category"}   name="cattitle" id="title" placeholder="Category Title"  onChange={(e)=>onInputChange(e)}  />
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
              <label htmlFor="catimage" className="form-label ">Category Image : </label>
              <input type="file" className='form-control' id="catimage" name="catimage" onChange={(e) => onFileChange(e)} />
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
              {CatImg ?  
              
              <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(CatImg)} /> 
              :  <img  className="border-2" width="50%" height="100%" src={'/uploads/categories/'+category.icon} /> }
            </div>
            <div className="col-md-12 mt-2">
                <input type="submit" className='btn btn-success' value="Update Category" onClick={(e)=>updateCategory(e)}  />
            </div>
        </form>
    </div>
  )
}

export default UpdateCategory