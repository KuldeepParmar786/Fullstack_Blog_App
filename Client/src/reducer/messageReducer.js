import {createSlice} from '@reduxjs/toolkit'

const initialState=null
const messageSlice=createSlice({
    name:'message',
    initialState,
    reducers:{
        addMessage(state,action){
            return action.payload
        },
        clearMessage(state,action){
            return null
        }
    }
})

export const {addMessage,clearMessage}=messageSlice.actions

export const showMessage=(message,duration=3000)=>{
    return dispatch=>{
        dispatch(addMessage(message))
        setTimeout(()=>{
            dispatch(clearMessage())
        },3000)
    }
}
export default messageSlice.reducer