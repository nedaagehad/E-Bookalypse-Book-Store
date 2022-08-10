import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/combineReducer';
import  bookSlice  from './reducers/booksReducer.js/BooksReducer';
import themeReducer from './reducers/theme';
import { booksApi } from './services';
import filterReducer from './reducers/filterReducer/filterReducer';
import  authSlice  from './reducers/authReducer/authReducer';
import cartSlice  from './reducers/cartReducer/CartReducer';
// const store = createStore (reducers, composeWithDevTools())

const store = configureStore({
    reducer: {
        filter:filterReducer,
        theme: themeReducer,
        auth:authSlice,
        cart:cartSlice,
        [booksApi.reducerPath] : booksApi.reducer,
        
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware)
    
})

export default store;