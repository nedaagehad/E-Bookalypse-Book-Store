

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import cookie from 'js-cookie'
import jwt from 'jwt-decode'
import { useNavigate } from "react-router-dom";

const initialState= { 
    token:localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null,
    userId:'',
    userRole:localStorage.getItem('userRole') ? localStorage.getItem('userRole') : '',
    userExp:''
}
const getRole = localStorage.getItem('userRole')
const getToken = localStorage.getItem('userToken')

// console.log(getRole)
// if(getRole){
//     // console.log(user)
//     initialState.userRole = getRole;
//     initialState.token = getToken;

// }

export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
      setCredntials:(state,action)=>{
        // state.token  = action.payload
        // // console.log( action.payload)
        
        // const user = jwt(action.payload);
        // var in15minute = new Date(new Date().getTime() + 15 * 60 * 1000);

        // cookie.set("userToken", action.payload ,{ expires: in15minute, path: '' })
        state.userRole = action.payload.role
        state.token = action.payload.token
        localStorage.setItem("userRole", action.payload.role)
        localStorage.setItem("userToken", action.payload.token)

      },
    //   decodeToken:(state,action)=>{
    //     const getCookie = cookie.get("userToken")
    //     if(getCookie){
    //         const user = jwt(getCookie);
    //         // console.log(user)
    //         state.token = user.token
    //         state.userId=user.id;
    //         state.userRole = user.role;
    //         state.userExp =user.exp;
    //     }
    //   },

      logOut:(state,action)=>{
        // localStorage.removeItem("userToken")
        // localStorage.removeItem("userRole")
        state.token = null
        state.userRole = ''
        localStorage.setItem('userToken', state.token)
        localStorage.setItem('userRole', state.userRole)
      }

    }
})


export const { category,
    setCredntials,decodeToken,logOut,checkUser
} = authSlice.actions

export default authSlice.reducer