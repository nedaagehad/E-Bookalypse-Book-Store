import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null,
  userId: '',
  userRole: localStorage.getItem('userRole') ? localStorage.getItem('userRole') : '',
  userExp: ''
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setCredntials: (state, action) => {
      state.userRole = action.payload.role
      state.token = action.payload.token
      localStorage.setItem("userRole", action.payload.role)
      localStorage.setItem("userToken", action.payload.token)
    },

    newPass: (state, action) => {
      state.token = action.payload.token
    },
    logOut: (state, action) => {
      state.token = null
      state.userRole = ''
      localStorage.setItem('userToken', state.token)
      localStorage.setItem('userRole', state.userRole)
    }

  }
})

export const { category,
  setCredntials, decodeToken, logOut, checkUser, newPass
} = authSlice.actions

export default authSlice.reducer