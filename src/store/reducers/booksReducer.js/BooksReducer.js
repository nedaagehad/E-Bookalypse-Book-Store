import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const getBooksApi = "https://e-bookalypse.herokuapp.com/api/books"
// const getBooksApi = "http://localhost:8080/api/books"

const initialState = {
    books:[],
    status:'idle',
    error:null,
    n_pages:null,
    page:null,
    n_results:null,
    updatedData:{}
}

export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks',async(bookParams)=>{
    try{
        const response =await axios.get(getBooksApi,
            {params:
                {   
                    page:bookParams.page,
                    limit:bookParams.limit,
                    category:bookParams.category,
                    rate:bookParams.rate,
                    priceMin:bookParams.priceMin,
                    priceMax:bookParams.priceMax,
                    priceSort:bookParams.priceSort
                }
            })
        // console.log(response)
            return response
    }catch(err){
        return  err.message
    }
})

export const addNewBooks = createAsyncThunk('books/addNewBooks',async(newBook)=>{
   
    try {
        const response = await axios.post(getBooksApi,newBook)
        return response
    } catch (error) {
        return error.message
    }
})

export const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        // increase:(state)=>{
        //     state.count+=1
        // },
        // decrease:(state)=>{ state.count-=1 }
    },
    extraReducers(builder){
        builder
            .addCase(fetchAllBooks.pending,(state,action)=>{
                state.status="Loading"
            })
            .addCase(fetchAllBooks.fulfilled,(state,action)=>{
                state.status="Success"
                state.books = action.payload.data
                state.statusCode = action.payload.status
                state.n_pages=action.n_pages

            })
            .addCase(fetchAllBooks.rejected,(state,action)=>{
                // state.books= [{"_id":1,"title":"asdasdas"}]
                // state.status="Error"
                state.error = "Error Response "

            })
            .addCase(addNewBooks.fulfilled,(state,action)=>{
                console.log(action.payload)
            })
            

    }
    
})
// export const {increase,decrease} = bookSlice.actions
export default bookSlice.reducer