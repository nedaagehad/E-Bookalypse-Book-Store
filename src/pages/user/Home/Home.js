import React from 'react';
import { useSelector } from 'react-redux';

//Component
import HomeSlider from '../../../components/HomeSlider/HomeSlider';
import HomeCategories from '../../../components/HomeSlider/HomeCategories/HomeCategories';
import FlashSaleSlider from '../../../components/HomeSlider/FlashSaleSlider';
import TrendingBooksUp1 from '../../../components/TrendingBooksUp/TrendingBooksUp1';
import OurPartners from '../../../components/OurPartners/OurPartners';
import Benefits from '../../../components/Benefits/Benefits';


function Home() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <>
      <div className={`mainContent ${theme === "night" ? "bg-dark" : "bg-white"}`}>
        <HomeSlider />
        <TrendingBooksUp1 />
        <Benefits />
        <HomeCategories />
        <FlashSaleSlider />
        <OurPartners />
      </div>
    </>
  )
}

export default Home