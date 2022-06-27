import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/user/Home/Home';
import Categories from './pages/user/Categories/Categories';
import Footer from './components/Footer/Footer';
import Promotions from './pages/user/Promotions/Promotions';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/promotions' element={<Promotions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
