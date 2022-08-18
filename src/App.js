// Style File
import './App.css';

// Hooks
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// User Elements
import Home from './pages/user/Home/Home';
import Categories from './pages/user/Categories/Categories';
import Category from './pages/user/Category/Category';
import BookDetails from './pages/user/BookDetails/BookDetails';
import Checkout from './pages/user/Checkout/Checkout';
import SuccessPayment from './pages/user/SuccessPayment/SuccessPayment';
import Offers from './pages/user/Offers/Offers';
import BookShelf from './pages/user/BookShelf/BookShelf';
import Login from './pages/user/Login/Login';
import ForgetPassword from './pages/user/ForgetPassword/ForgetPassword';
import NewPassword from './pages/user/NewPassword/NewPassword';
import Wishlist from './pages/user/Wishlist/Wishlist';
import SignUp from './pages/user/SignUp/SignUp';
import TermsOfUse from './pages/user/TermsOfUse/TermsOfUse';
import RefundPolicy from './pages/user/RefundPolicy/RefundPolicy';
import PaymentPolicy from './pages/user/PaymentPolicy/PaymentPolicy';
import PrivacyPolicy from './pages/user/PrivacyPolicy/PrivacyPolicy';
import NotFound from './pages/user/NotFound/NotFound';
import About from './pages/user/About/About';
import Contact from './pages/user/Contact/Contact';
import Publisher from './pages/user/Publisher/Publisher';
import UserLayout from './pages/user/UserLayout';
import EditProfile from './pages/user/EditProfile/EditProfile';
import UserProfile from './pages/user/UserProfile/UserProfile';
import UsersView from './pages/admin/Users/UsersView';

// Admin Elements
import Books from './pages/admin/Books/Books';
import AddBook from './pages/admin/Book/addBook';
import UpdateBook from './pages/admin/Book/updateBook';
import CategoriesAdmin from './pages/admin/Categories/CategoriesAdmin';
import AddCategory from './pages/admin/Categories/Category/AddCategory';
import UpdateCategory from './pages/admin/Categories/Category/UpdateCategory';
import WritersAdmin from './pages/admin/Writers/WritersAdmin';
import AddWriter from './pages/admin/Writers/Writer/AddWriter';
import UpdateWriter from './pages/admin/Writers/Writer/UpdateWriter';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import AdminLayout from './pages/admin/AdminLayout';
import PromotionsAdmin from './pages/admin/promotions/promotions';
import UpdatePromotion from './pages/admin/promotions/promotion/UpdatePromotion';
import AddPromotion from './pages/admin/promotions/promotion/AddPromotion';
import HomeDashboard from './pages/admin/Dashboard/HomeDashboard';


function App() {

  const authState = useSelector(state => state.auth.userRole);
  const dispatch  = useDispatch();
  const [isUser, setIsUser] = useState(true);
  

  useEffect(() => {
    if(authState === 'regUser'){
      setIsUser(true)

    }else if (authState === 'rootAdmin'){
      setIsUser(false)
    }
  }, [authState]);

  return (
    <Router>
        <Routes>
        {/* USER ROUTES */}
        <Route path='/' element={<UserLayout />} >
          <Route index element={<Home />}/>
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/category' element={<Category />} />
          <Route path='/categories/category/:id' element={<Category />} />
          <Route path='/books/BookDetails/:id' element={<BookDetails />} />
          <Route path='/cart' element={<Checkout />} />
          <Route path='/successPayment' element={<SuccessPayment />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile/bookshelf' element={<BookShelf />} />
          <Route path='/login' element={<Login />} />
          <Route path='/ForgetPassword' element={<ForgetPassword />} />
          <Route path='/NewPassword' element={<NewPassword />} />
          <Route path='/Wishlist' element={<Wishlist /> } />
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
          <Route index element={<HomeDashboard />}/>

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
