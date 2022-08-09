import { combineReducers } from "redux";
import langReducer from "./language";
import themeReducer from "./theme";


export default combineReducers({
    theme: themeReducer,
    lang: langReducer,
})