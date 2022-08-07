import React, { useEffect, useState } from 'react'
import TrendingBooksUp1 from '../../../components/TrendingBooksUp/TrendingBooksUp1';
import CategoryList from '../../../components/CategoryList/CategoryList'
import CategoryCard from '../../../components/CategoryCard/CategoryCard'
import { booksApi } from '../../../store/services';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import storage from '../../../Firebase/firebaseImage';
import { Link } from 'react-router-dom';



function Categories() {
  const {data,isLoading,error} = booksApi.useGetAllCategoriesQuery()
  const [categories,setCategories]  = useState()
  

  useEffect(() => {
   if(data){
    setCategories(data.categories)
    // console.log(data.categories)
   } 
   
  }, [data]);


  return (

    <div className='content'>
      <CategoryList>
        {categories ? categories.map(category =>{

          return(
           
            
              <CategoryCard key = {category._id} category={category}   />
         
           

          )
        }):null}

    

      </CategoryList>
      <TrendingBooksUp1 />
    </div>
  )
}

export default Categories