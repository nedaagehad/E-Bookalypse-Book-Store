import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {count:0}

export const bookSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increase:(state)=>{
            state.count+=1
        },
        decrease:(state)=>{ state.count-=1 }
    }
})
export const {increase,decrease} = bookSlice.actions
export default bookSlice.reducer