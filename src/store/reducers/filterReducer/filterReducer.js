

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState= { 
    category:[],
    priceMin:'',
    priceMax:'',
    priceSort:'',
    rate:'',
    bookTitle:''
}

export const filterSlice = createSlice({
    name:'filterSlice',
    initialState,
    reducers:{
        category(state,action){
            state.category = action.payload
            // state.aa = "aaaa"
            // let count = 1;
            // for(let i=0; i<state.category.length; i++) {
            //     state.cat = state.category[i]
            //     count++
            // }
        },
        priceMin(state,action){
            state.priceMin = action.payload
        },
        priceMax(state,action){
            state.priceMax = action.payload
        },
        priceSort(state,action){
            state.priceSort = action.payload
        },
        rate(state,action){
            state.rate=action.payload
        },
        bookTitle(state,action){
            state.bookTitle = action.payload
        }
    }
})


export const { category,
    priceMin,
    priceMax,
    priceSort,
    rate ,
    bookTitle
} = filterSlice.actions

export default filterSlice.reducer