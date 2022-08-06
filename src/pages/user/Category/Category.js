import React from 'react'
import ViewCategoryPage from '../../../components/ViewCategoryPage/ViewCategoryPage'
import FilterBar from '../../../components/FilterBar/FilterBar'
import BooksView from '../../../components/BooksView/BooksView'
import { useSelector } from 'react-redux'


function Category() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
         <ViewCategoryPage>
             <FilterBar/>
             <BooksView/>
         </ViewCategoryPage>
    </div>
  )
}

export default Category