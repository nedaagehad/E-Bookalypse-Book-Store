import React from 'react'
import ViewCategoryPage from '../../../components/ViewCategoryPage/ViewCategoryPage'
import FilterBar from '../../../components/FilterBar/FilterBar'
import BooksView from '../../../components/BooksView/BooksView'

function Category() {
  return (
    <div className='content'>
         <ViewCategoryPage>
             <FilterBar/>
             <BooksView/>
         </ViewCategoryPage>
    </div>
  )
}

export default Category