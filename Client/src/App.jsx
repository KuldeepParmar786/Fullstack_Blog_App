import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import IndividualUser from './components/IndividualUser'
import Toggelabe from './components/Toggelabe'
import {initializeBlogs} from './reducer/blogReducer'
import {useDispatch,useSelector} from 'react-redux'
import {addUser,setUser} from './reducer/userReducer'
import User from './components/Users'
import {Routes,Route,Link} from 'react-router-dom'
import Bloginfo from './components/IndividualBlog'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import {showMessage} from './reducer/messageReducer'

const App = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
  },[])
  
  useEffect(()=>{
    const logged=window.localStorage.getItem('loggedBlogappuser')
    if(logged){
      const loggeduser=JSON.parse(logged)
      dispatch(setUser(loggeduser))
      blogService.setToken(loggeduser.Token)
    }
  },[])

 const user=useSelector(state=>state.user)
 const blogs=useSelector(state=>state.blogs)
 const message=useSelector(state=>state.message)
 
 const blogstoshow=()=>{
   const blogss=[...blogs].sort((a,b)=>a.likes-b.likes)
   
   return(
     <section className="mt-25 md:mt-0 text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex justify-center mb-8">
          <Toggelabe buttonLabel="Add Blog">
            <BlogForm />
          </Toggelabe>
        </div>
        <div className="grid gap-y-6 gap-x-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {blogss.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
   )
 }
 if(!user){
   return(
    <LoginForm />
   )
 }
  return (
     <div className="flex flex-col min-h-dvh">
      <Header  />
      <div className="flex-grow">
    <Routes>
      <Route path='/' element={blogstoshow()} />
      <Route path='/users' element={<User/>}/>
      <Route path='/login' element={<LoginForm/>} />
      <Route path='/users/id' element={<IndividualUser />}/>
      <Route path='/:id' element={<Bloginfo/>} />
    </Routes>
      </div>
      <Footer />                                                                                                                                                               
     </div>
  )
}

export default App