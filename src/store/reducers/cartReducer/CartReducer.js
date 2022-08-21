import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookIds: [],
    collectionIds: [],
    price: 0,
    count: 0

}

export const cartSlice = createSlice({

    name: 'cart',
    initialState,

    reducers: {
        increaseCount(state, action) {
            state.count += 1
        },
        decreaseCount(state, action) {
            state.count -= 1
        },
        setCartCount(state, action) {
            state.count = action.payload
        },
        FillCartFromDb(state, action) {
            const { bookItems, collectionItems } = action.payload.cart
            state.bookIds = bookItems
            state.collectionIds = action.payload.cart.collectionItems
            state.price = action.payload.finalPrice
            state.count = bookItems.length + collectionItems.length
        },
        addToCartReducer(state, action) {

            if (!state.bookIds.includes(action.payload)) {
                state.bookIds.push(action.payload)
                localStorage.setItem('cartItems', JSON.stringify(state.bookIds))
            }

        },
        removeFromCartReducer(state, action) {
            let newArr;
            let collectionArr;
            if (action.payload.bookIds) {
                let deletePrice = state.bookIds.find(bookIds => bookIds._id === action.payload.bookIds)
                state.price -= deletePrice.price

                newArr = state.bookIds.filter(bookId => bookId._id !== action.payload.bookIds)
                state.bookIds = newArr
            }
            if (action.payload.collectionIds) {
                let deleteCollection = state.collectionIds.find(collectionId => collectionId._id === action.payload.collectionIds)
                state.price -= deleteCollection.collectionPrice
                collectionArr = state.collectionIds.filter(bookId => bookId._id !== action.payload.collectionIds)

                state.collectionIds = collectionArr
            }


            localStorage.setItem('cartItems', JSON.stringify(newArr))


        },
        addToCollection(state, action) {
            if (!state.collectionIds.includes(action.payload)) {
                state.collectionIds.push(action.payload)

            }
        },
        removeAll(state, action) {
            state.bookIds = []
            state.collectionIds = []
            state.entryFialPrice = 0
        }
    },
})



export const { addToCartReducer, removeAll, removeFromCartReducer, FillCartFromDb,
    increaseCount,
    decreaseCount,
    getCount,
} = cartSlice.actions

export default cartSlice.reducer