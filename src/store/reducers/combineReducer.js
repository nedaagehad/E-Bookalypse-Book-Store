import { combineReducers } from "redux";
import { bookSlice } from "./booksReducer.js/BooksReducer";
import themeReducer from "./theme";


export default combineReducers({
    theme: themeReducer,
    books:bookSlice
})