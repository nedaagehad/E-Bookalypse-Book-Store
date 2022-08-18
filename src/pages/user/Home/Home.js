import React , { useState,useEffect }from 'react';
import { useSelector } from 'react-redux';

//Components
import HomeSlider from '../../../components/HomeSlider/HomeSlider';
import HomeCategories from '../../../components/HomeSlider/HomeCategories/HomeCategories';
import FlashSaleSlider from "../../../components/HomeSlider/FlashSaleSlider";
import TrendingBooksUp1 from '../../../components/TrendingBooksUp/TrendingBooksUp1';
import OurPartners from '../../../components/OurPartners/OurPartners';
import Benefits from '../../../components/Benefits/Benefits';

//loader
import Preloader from '../../../components/Preloader/Preloader';


function Home() {

  const theme = useSelector((state) => state.theme.currentTheme);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <>
    {
        loading ? 
          <Preloader/>
          :
          <div className={`mainContent ${theme === "night" ? "bg-dark" : ""}`}>
          <HomeSlider />
          <TrendingBooksUp1 />
          <Benefits />
          <HomeCategories/>
          <FlashSaleSlider />
          <OurPartners />
        </div>
    }
    </>
  )
}

export default Home