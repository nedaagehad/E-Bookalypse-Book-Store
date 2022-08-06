import { configureStore } from '@reduxjs/toolkit';
import { legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/combineReducer';
import  bookSlice  from './reducers/booksReducer.js/BooksReducer';
import themeReducer from './reducers/theme';
import { booksApi } from './services';
import filterReducer from './reducers/filterReducer/filterReducer';
import  authSlice  from './reducers/authReducer/authReducer';
// const store = createStore (reducers, composeWithDevTools())

const store = configureStore({
    reducer: {
        filter:filterReducer,
        theme: themeReducer,
        auth:authSlice,
        [booksApi.reducerPath] : booksApi.reducer,
    
    }
    
})

export default store;