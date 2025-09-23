import {useState} from 'react'
import {createNew} from '../reducer/blogReducer'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Blogform=()=>{
  const [title,setTitle]=useState('')
  const [discription,setDiscription]=useState('')
  const [content,setContent]=useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const addBlog=(event)=>{
      event.preventDefault()
      const newBlog={
        title:title,
        discription:discription,
        content:content,
        likes:0
      }
      dispatch(createNew(newBlog))
      setTitle('')
      setDiscription('')
      setUrl('')
      setContent('')
      navigate('/')
  }
   return(
    <>
     <form 
      onSubmit={addBlog} 
      className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
     >
  <div>
    <input
      className="bg-gray-700 w-full focus:outline-none text-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
      placeholder="Title"
      type="text"
      name="title"
      value={title}
      onChange={({ target }) => setTitle(target.value)}
    />
  </div>

  <div>
    <input
      className="bg-gray-700 w-full focus:outline-none text-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
      placeholder="Description"
      type="text"
      name="description"
      value={discription}
      onChange={({ target }) => setDiscription(target.value)}
    />
  </div>

  <div>
    <textarea
      className="bg-gray-700 w-full h-40 resize-none focus:outline-none text-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
      placeholder="Write your blog content here..."
      name="content"
      value={content}
      onChange={({ target }) => setContent(target.value)}
    />
  </div>

  <button 
    type="submit"
    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
  >
    Add Blog
  </button>
</form>
    </>
)
 }

export default Blogform