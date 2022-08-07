import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { booksApi } from '../../../store/services';

const CategoriesAdmin = () => {
  const [categories, setCategories] = useState();
  const {data,isLoading,error} = booksApi.useGetAllCategoriesQuery();
  const [deleteCategory,response] = booksApi.useDeleteCategoryMutation()
  useEffect(() => {
    // axios.get('https://e-bookalypse.herokuapp.com/api/categories').then(
    //   (res)=>setCategories(res.data.categories)
    // ).catch((err)=>console.log(err))
    if(data){
      setCategories(data.categories)
    }
  }, [data]);

  let deleteItem = (id)=>{
    // axios.delete('https://e-bookalypse.herokuapp.com/api/categories'+id).then((res)=>console.log(res)).catch((err)=>console.log(err))
    const deletedItem = categories.find((c)=> c._id === id)
    deleteCategory({categoryId:id,icon:deletedItem.icon}).then((data)=>console.log(data)).catch((err)=>console.log(err)) 

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