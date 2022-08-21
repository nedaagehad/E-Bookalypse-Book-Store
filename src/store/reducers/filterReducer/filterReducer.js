import { createSlice } from '@reduxjs/toolkit'

const initialState= { 
    category:[],
    priceMin:'',
    priceMax:'',
    priceSort:'',
    rate:'',
    bookTitle:'',
    page:0
}

export const filterSlice = createSlice({
    name:'filterSlice',
    initialState,
    reducers:{
        category(state,action){
            state.category = action.payload
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
        },
        page(state,action){
            state.page  += 1 
        },
        decPage(state,action){
            if(state.page > 1 ){

                state.page -= 1
            }
        }
    }
})


export const { category,
    priceMin,
    priceMax,
    priceSort,
    rate ,
    bookTitle,
    page,
    decPage
} = filterSlice.actions

export default filterSlice.reducer