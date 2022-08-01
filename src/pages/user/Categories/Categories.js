import React from 'react'
import TrendingBooksUp1 from '../../../components/TrendingBooksUp/TrendingBooksUp1';
import CategoryList from '../../../components/CategoryList/CategoryList'
import CategoryCard from '../../../components/CategoryCard/CategoryCard'
function Categories() {
  return (

    <div className='content'>
      <CategoryList>
        <CategoryCard img="./Images/Categories/Biography.jpg" alt="Biography" />
        <CategoryCard img="./Images/Categories/Children.jpg" alt="Children" />
        <CategoryCard img="./Images/Categories/horror.jpg" alt="Horror" />
        <CategoryCard img="./Images/Categories/history.jpg" alt="History" />
        <CategoryCard img="./Images/Categories/poeatries.jpg" alt="Poetry" />
        <CategoryCard img="./Images/Categories/Novels.jpg" alt="Novels" />
      </CategoryList>
      <TrendingBooksUp1 />
    </div>
  )
}

export default Categories