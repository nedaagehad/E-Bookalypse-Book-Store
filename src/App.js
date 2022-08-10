import './App.css';
import React,{useState,useEffect} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home/Home';
import Categories from './pages/user/Categories/Categories';
import Category from './pages/user/Category/Category';
import BookDetails from './pages/user/BookDetails/BookDetails';
import Checkout from './pages/user/Checkout/Checkout';
import Promotions from './pages/user/Promotions/Promotions';
import Login from './pages/user/Login/Login';
import SignUp from './pages/user/SignUp/SignUp';
import Books from './pages/admin/Books/Books';
import AddBook from './pages/admin/Book/addBook';
import UpdateBook from './pages/admin/Book/updateBook';
import CategoriesAdmin from './pages/admin/Categories/CategoriesAdmin';
import AddCategory from './pages/admin/Categories/Category/AddCategory';
import UpdateCategory from './pages/admin/Categories/Category/UpdateCategory';
import WritersAdmin from './pages/admin/Writers/WritersAdmin';
import AddWriter from './pages/admin/Writers/Writer/AddWriter';
import UpdateWriter from './pages/admin/Writers/Writer/UpdateWriter';
import UsersView from './pages/admin/Users/UsersView';
import TermsOfUse from './pages/user/TermsOfUse/TermsOfUse';
import RefundPolicy from './pages/user/RefundPolicy/RefundPolicy';
import PaymentPolicy from './pages/user/PaymentPolicy/PaymentPolicy';
import PrivacyPolicy from './pages/user/PrivacyPolicy/PrivacyPolicy';
import NotFound from './pages/user/NotFound/NotFound';
import About from './pages/user/About/About';
import Contact from './pages/user/Contact/Contact';
import Publisher from './pages/user/Publisher/Publisher';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
import EditProfile from './pages/user/EditProfile/EditProfile';
import { useDispatch, useSelector } from "react-redux";
import PromotionsAdmin from './pages/admin/promotions/promotions';
import UpdatePromotion from './pages/admin/promotions/promotion/UpdatePromotion';
import AddPromotion from './pages/admin/promotions/promotion/AddPromotion';
import UserProfile from './pages/user/UserProfile/UserProfile';



function App() {
  const authState = useSelector(state => state.auth.userRole)
  const dispatch  = useDispatch();
  const [isUser,setIsUser] = useState(true)
  useEffect(() => {
    if(authState == 'regUser'){
      setIsUser(true)

    }else if (authState == 'rootAdmin'){
      setIsUser(false)
    }
  }, [authState]);

//   useEffect(() => {

//     })
//  }, []) 

  return (
    <Router>
      <Routes>
        {/* USER ROUTES */}

        <Route path='/' element={<UserLayout />} >
          <Route index element={<Home />}/>
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/category/' element={<Category />} />
          <Route path='/categories/category/:id' element={<Category />} />
          <Route path='/books/BookDetails/:id' element={<BookDetails />} />
          <Route path='/cart' element={<Checkout />} />
          <Route path='/promotions' element={<Promotions />} />
          <Route path='/login' element={<Login /> } />
          <Route path='/SignUp' element={<SignUp />} /> 
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/termsofuse' element={<TermsOfUse />} />
          <Route path='/refundpolicy' element={<RefundPolicy />} />
          <Route path='/paymentpolicy' element={<PaymentPolicy />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/publishwithus' element={<Publisher />} />
          <Route path={'*'} element={<NotFound />} />
        </Route>

        {/* ADMIN ROUTES */}
        {!isUser ? 
       
        
        <Route path='/admin' element={<AdminLayout />} >
          <Route index element={<Dashboard />}/>

          {/* Books Routes */}
          <Route path='/admin/books' element={<Books />} />
          <Route path='/admin/book/addBook' element={<AddBook />} />
          <Route path='/admin/book/updateBook/:id' element={<UpdateBook />} />

          {/* Categories Routes */}
          <Route path='/admin/categories' element={<CategoriesAdmin />} />
          <Route path='/admin/category/addCategory' element={<AddCategory />} />
          <Route path='/admin/category/updateCategory/:id' element={<UpdateCategory />} />

          {/* Writers Routes */}
          <Route path='/admin/writers' element={<WritersAdmin />} />
          <Route path='/admin/writer/addwriter' element={<AddWriter />} />
          <Route path='/admin/writer/updatewriter/:id' element={<UpdateWriter />} />  

          {/* Promotions Routes */}
          <Route path='/admin/promotions' element={<PromotionsAdmin/>} />
          <Route path='/admin/promotion/addPromotion' element={<AddPromotion/>} />
          <Route path='/admin/promotion/updatePromotion/:id' element={<UpdatePromotion/>} />

 


          {/* Users View Admin Panel*/}
          <Route path='/admin/users' element={<UsersView />} />
        </Route>
        
        
        :null}

      </Routes>
    </Router>


  );
}

export default App;
