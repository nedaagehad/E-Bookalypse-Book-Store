import React , {lazy , Suspense }from 'react';
import { useSelector } from 'react-redux';
//loader
import Preloader from '../../../components/Preloader/Preloader';
//Components
const HomeSlider = lazy(() => import('../../../components/HomeSlider/HomeSlider') );
const HomeCategories = lazy(() => import('../../../components/HomeSlider/HomeCategories/HomeCategories') );
const FlashSaleSlider = lazy(() => import('../../../components/HomeSlider/FlashSaleSlider') );
const TrendingBooksUp1 = lazy(() => import('../../../components/TrendingBooksUp/TrendingBooksUp1') );
const OurPartners = lazy(() => import('../../../components/OurPartners/OurPartners') );
const Benefits = lazy(() => import('../../../components/Benefits/Benefits') );




function Home() {

  const theme = useSelector((state) => state.theme.currentTheme);
  
  return (
    <>
          <div className={`mainContent ${theme === "night" ? "bg-dark" : ""}`}>
            <Suspense fallback={<Preloader />}>
                 <HomeSlider />
            </Suspense>
            <TrendingBooksUp1 />
            <Suspense fallback={<Preloader />}>
                <Benefits />
            </Suspense>
            <Suspense fallback={<Preloader />}>
                <HomeCategories/>
            </Suspense>
            <Suspense fallback={<Preloader />}>
                <FlashSaleSlider />
            </Suspense>
            <Suspense fallback={<Preloader />}>
                <OurPartners />
            </Suspense>
        </div>
    </>
  )
}

export default Home