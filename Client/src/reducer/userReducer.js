import {createSlice} from '@reduxjs/toolkit'
import loginService from '../services/login'
import blogService from '../services/blogs'
const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        setUser(state,action){
           return action.payload
        }
    }
})

export const {setUser}=userSlice.actions

export const addUser=({username,password})=>{
     return async dispatch=>{
    const response=await loginService.login({username,password})
    dispatch(setUser(response))
    window.localStorage.setItem('loggedBlogappuser',JSON.stringify(response))
    blogService.setToken(response.Token)
  }

}
export default userSlice.reducer