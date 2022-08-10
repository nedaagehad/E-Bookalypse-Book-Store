import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { booksApi } from '../../services'

const initialState = {
    bookIds:[],
    collectionIds:[],
    price:0,
    count : 0
    
}




export const cartSlice = createSlice({

    name:'cart',
    initialState,

    reducers:{
        FillCartFromDb (state,action){
            // console.log(action.payload)
            const {bookItems, collectionItems} = action.payload.cart
            // state.bookIds = action.payload.bookItems._id
            state.bookIds = bookItems
            state.collectionIds = action.payload.cart.collectionItems
            state.price = action.payload.finalPrice
            state.count = bookItems.length + collectionItems.length
            // state.entryFialPrice = action.payload.totalPrice
        },
        addToCartReducer(state,action){
            console.log(action.payload)   
            // const {bookId} = action.payload;
            
            if(!state.bookIds.includes(action.payload)){
                state.bookIds.push(action.payload)
                // toast.info('Added to cart',{position:'top-right'})
                localStorage.setItem('cartItems',JSON.stringify(state.bookIds))
            }
            // state.bookIds = action.payload;
            

        },
        removeFromCartReducer(state,action){
            let newArr ;
            let collectionArr;
            if(action.payload.bookIds){
                let deletePrice = state.bookIds.find(bookIds => bookIds._id === action.payload.bookIds)
                state.price -= deletePrice.price

                 newArr =  state.bookIds.filter(bookId => bookId._id !== action.payload.bookIds)
                 console.log(newArr)
                 state.bookIds = newArr
            }
             if(action.payload.collectionIds){
                console.log(action.payload.collectionIds)
                console.log( action.payload.collectionIds)
                let deleteCollection = state.collectionIds.find(collectionId => collectionId._id === action.payload.collectionIds)
                state.price -= deleteCollection.collectionPrice
                collectionArr =  state.collectionIds.filter(bookId => bookId._id !== action.payload.collectionIds)
//                      console.log(collectionArr)
    
                     state.collectionIds = collectionArr
           }


           localStorage.setItem('cartItems',JSON.stringify(newArr))


        },
        addToCollection(state,action){
            if(!state.collectionIds.includes(action.payload)){
                state.collectionIds.push(action.payload)
                
            }
        },
        removeAll(state,action){
            state.bookIds =[]
            state.collectionIds =[]
            state.entryFialPrice = 0
        }


    },


})



export const { addToCartReducer,removeAll,removeFromCartReducer,FillCartFromDb
} = cartSlice.actions

export default cartSlice.reducer