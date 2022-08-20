import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { booksApi } from '../../../store/services';

const CategoriesAdmin = () => {

  const [categories, setCategories] = useState();
  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetAllCategoriesQuery();
  // eslint-disable-next-line
  const [deleteCategory, response] = booksApi.useDeleteCategoryMutation()

  useEffect(() => {
    if (data) {
      setCategories(data.categories)
    }
  }, [data]);

  let deleteItem = (id) => {
    const deletedItem = categories.find((c) => c._id === id)
    deleteCategory({ categoryId: id, icon: deletedItem.icon }).then((data) => console.log(data)).catch((err) => console.log(err))

  }

  return (
    <>
      <div className="page-body-wrapper pt-5">
        <div className="content-wrapper pt-5">

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">title</th>

                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody className='text-white'>
              {categories !== undefined ? categories.map((category, i) => {
                return (
                  <tr key={category._id}>
                    <td >{i + 1}</td>
                    <td >{category.title}</td>

                    <td ><Link to={'/admin/category/updateCategory/' + category._id} className="btn btn-primary" >Update</Link></td>

                    <td>
                    {/* eslint-disable-next-line */}
                      <a className="btn btn-danger" onClick={(e) => deleteItem(category._id)}>Delete</a>
                    </td>

                  </tr>
                )
              })
                :
                null
              }

            </tbody>
          </table>
          <div className='addCategory'>
            <Link to="/admin/category/addCategory" className='btn btn-success text-white' >Add Category</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesAdmin