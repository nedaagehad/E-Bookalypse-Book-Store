import React, { useEffect, useState , lazy , Suspense } from 'react';
import { booksApi } from '../../../store/services';
import { useSelector } from 'react-redux';

//Components
import Preloader from '../../../components/Preloader/Preloader';
const CategoryList = lazy(() => import('../../../components/CategoryList/CategoryList') );
const CategoryCard = lazy(() =>  import('../../../components/CategoryCard/CategoryCard') );
const TrendingBooksUp1 = lazy(() => import('../../../components/TrendingBooksUp/TrendingBooksUp1') );

function Categories() {

  const { data, isLoading, error } = booksApi.useGetAllCategoriesQuery();
  const [categories, setCategories] = useState();

  const theme = useSelector((state) => state.theme.currentTheme);

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {

    if (isLoading) {
      setLoading(true);
    }
    else {
      if(data)
      {
        setCategories(data.categories);
        setLoading(false);
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [data]);


  return (
    <>
      {
        loading ?
          <Preloader />
          :
          <div className={`content ${theme === "night" ? "bg-dark" : ""}`}>
            <Suspense fallback={<Preloader />}>
              <CategoryList>
                {categories ? categories.map(category => {
                  return (
                    <CategoryCard key={category._id} category={category} />
                  )
                }) : null}
              </CategoryList>
              <TrendingBooksUp1 />
            </Suspense>
          </div>
      }
      </>
  )
}

export default Categories;