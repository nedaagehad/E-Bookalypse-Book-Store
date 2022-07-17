import React from 'react';
import { useSelector } from 'react-redux';
import HomeSlider from '../../../components/HomeSlider/HomeSlider';
import OurPartners from '../../../components/OurPartners/OurPartners';

function Home() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`${theme === "night" ? "bg-secondary" : ""}`}>
      <HomeSlider>New Releases</HomeSlider>
      <hr />
      <HomeSlider>Promotions</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <OurPartners />
    </div>
  )
}

export default Home