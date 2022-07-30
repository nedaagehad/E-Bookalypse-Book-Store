import { configureStore } from '@reduxjs/toolkit';
import { legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/combineReducer';
import  bookSlice  from './reducers/booksReducer.js/BooksReducer';
// const store = createStore (reducers, composeWithDevTools())

const store = configureStore({
    reducer: {
        books:bookSlice
    }
    
})

export default store;