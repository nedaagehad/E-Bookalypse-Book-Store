import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/user/Home/Home';
import Categories from './pages/user/Categories/Categories';
import Footer from './components/Footer/Footer';
import Promotions from './pages/user/Promotions/Promotions';

function App() {
  return (
    <Router>
      <Navbar />
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
