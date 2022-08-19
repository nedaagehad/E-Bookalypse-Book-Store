import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './reducers/theme';
import langReducer from "./reducers/language";

import { booksApi } from './services';
import filterReducer from './reducers/filterReducer/filterReducer';
import  authSlice  from './reducers/authReducer/authReducer';
import cartSlice  from './reducers/cartReducer/CartReducer';

const store = configureStore({
    reducer: {
        filter:filterReducer,
        theme: themeReducer,
        lang: langReducer,
        auth:authSlice,
        cart:cartSlice,
        [booksApi.reducerPath] : booksApi.reducer,
        
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware)
    
})

export default store;