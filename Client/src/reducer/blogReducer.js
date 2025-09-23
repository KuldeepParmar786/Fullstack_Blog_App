import {createSlice} from '@reduxjs/toolkit'
import blogService from '../services/blogs'

const blogSlice=createSlice({
    name:'blogs',
    initialState:[],
    reducers:{
        createBlog(state,action){
            state.push(action.payload)
        },
        likeBlog(state,action){
            const updatedBlog=action.payload
            const id=updatedBlog.id
            return state.map(n=>n.id!==id?n:updatedBlog)
        },
        setBlogs(state,action){
            return action.payload
        },
        deleteBlog(state,action){
            const id=action.payload.id
            return state.filter(n=>n.id!==id)
        },
        addComment(state,action){
           const id=action.payload.id
           const comment=action.payload
           return state.map(b=>b.id!==id?b:action.payload)
        }
    }
})

export const {createBlog,likeBlog,setBlogs,deleteBlog,addComment}=blogSlice.actions

export const initializeBlogs=()=>{
    return async dispatch=>{
        const response=await blogService.getAll()
        dispatch(setBlogs(response))
    }
}

export const handleLike=(blog,id)=>{
    return async dispatch=>{
      const updated={...blog,likes:blog.likes+1}
      const response=await blogService.like(updated,id)
      dispatch(likeBlog(response))
    }
}

export const createNew=(blog)=>{
    return async dispatch=>{
        const response=await blogService.create(blog)
        dispatch(createBlog(response))
    }
}

export const removeBlog=(id)=>{
    return async dispatch=>{
       await blogService.remove(id)
       dispatch(deleteBlog({id}))
    }
}

export const newComment=(id,commentObject)=>{
    return async dispatch=>{
       const response=await blogService.comment(id,commentObject)
       dispatch(addComment(response))
       console.log(response)
    }
}

export default blogSlice.reducer