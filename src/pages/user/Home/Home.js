import React from 'react';
import HomeSlider from '../../../components/HomeSlider/HomeSlider';

function Home() {

  return (
    <div>
      <HomeSlider>New Releases</HomeSlider>
      <hr />
      <HomeSlider>Promotions</HomeSlider>
      <hr />
      <HomeSlider>Top 10</HomeSlider>
      <hr />
      <h1>Our Partners</h1>
      <hr />
    </div>
  )
}

export default Home