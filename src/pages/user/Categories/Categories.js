import React, { useEffect, useState } from 'react'
import TrendingBooksUp1 from '../../../components/TrendingBooksUp/TrendingBooksUp1';
import CategoryList from '../../../components/CategoryList/CategoryList'
import CategoryCard from '../../../components/CategoryCard/CategoryCard'
import axios from 'axios';
function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://e-bookalypse.herokuapp.com/api/categories")
    .then((res) => setCategories(res.data.categories)).catch((error) => console.log(error))
  }, [])

  return (
    <div className='content'>
      <CategoryList>
      {categories.map((category) => {
        return (
          <CategoryCard img={category.icon} alt={category.title} />
        )
      })}
        {/* reham's code */}
        {/* <CategoryCard img="./Images/Categories/Biography.jpg" alt="Biography" />
        <CategoryCard img="./Images/Categories/Children.jpg" alt="Children" />
        <CategoryCard img="./Images/Categories/horror.jpg" alt="Horror" />
        <CategoryCard img="./Images/Categories/history.jpg" alt="History" />
        <CategoryCard img="./Images/Categories/poeatries.jpg" alt="Poetry" />
        <CategoryCard img="./Images/Categories/Novels.jpg" alt="Novels" /> */}
      </CategoryList>
      <TrendingBooksUp1 />
    </div>
  )
}

export default Categories