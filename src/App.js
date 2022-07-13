import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/user/Home/Home';
import Categories from './pages/user/Categories/Categories';
import Footer from './components/Footer/Footer';
import Promotions from './pages/user/Promotions/Promotions';
import Login from './pages/user/Login/Login';
import SignUp from './pages/user/SignUp/SignUp';
import TermsOfUse from './pages/user/TermsOfUse/TermsOfUse';
import RefundPolicy from './pages/user/RefundPolicy/RefundPolicy';
import PaymentPolicy from './pages/user/PaymentPolicy/PaymentPolicy';
import PrivacyPolicy from './pages/user/PrivacyPolicy/PrivacyPolicy';
import NotFound from './pages/user/NotFound/NotFound';
import About from './pages/user/About/About';
import Contact from './pages/user/Contact/Contact';
import Publisher from './pages/user/Publisher/Publisher';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/promotions' element={<Promotions />} />
        <Route path='/login' element={<Login /> } />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/termsofuse' element={<TermsOfUse />} />
        <Route path='/refundpolicy' element={<RefundPolicy />} />
        <Route path='/paymentpolicy' element={<PaymentPolicy />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/publishwithus' element={<Publisher />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
