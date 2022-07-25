import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const CategoriesAdmin = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    axios.get('http://localhost:5000/api/categories').then(
      (res)=>setCategories(res.data.categories)
    ).catch((err)=>console.log(err))
  }, []);

  let deleteItem = (id)=>{
    axios.delete('http://localhost:5000/api/categories/'+id).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }

  return (
    <>
      <div className='container'>
        <div className='addCategory'>
          <Link to="/admin/category/addCategory" className='btn btn-success' >Add Category</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">Image</th>

              <th scope="col">Update</th>
              <th scope="col">Delete</th>


            </tr>
          </thead>
          <tbody>
            {categories !== undefined ? categories.map((category,i)=>{
              return (
              <tr key={category._id}>
                <td >{i+1}</td>
                <td ><img width="20%" src={"../uploads/categories/"+category.icon} /></td>

                <td >{category.title}</td>
                
                <td ><Link to={'/admin/category/updateCategory/'+category._id} className="btn btn-primary" >Update</Link></td>

                <td ><a className="btn btn-danger" onClick={(e)=>deleteItem(category._id)}>Delete</a></td> 

              </tr>
              )
            })
            :
            null
            }

          </tbody>
        </table>

      </div>
    
    </>
  )
}

export default CategoriesAdmin