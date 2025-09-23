import blogReducer from './reducer/blogReducer'
import userReducer from './reducer/userReducer'
import messageReducer from './reducer/messageReducer'
import {configureStore} from '@reduxjs/toolkit'


const store=configureStore({
    reducer:{
        blogs:blogReducer,
        user:userReducer,
        message:messageReducer
    }
})

export default store