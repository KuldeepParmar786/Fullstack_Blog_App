import {useState} from 'react'
import {addUser,setUser} from '../reducer/userReducer'
import {showMessage} from '../reducer/messageReducer'
import {useDispatch,useSelector} from 'react-redux'
import blogService from '../services/blogs'

const LoginForm=()=>{
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const dispatch=useDispatch()
  const message=useSelector(state=>state.message)
  const user=useSelector(state=>state.user)
  const handlelogin=(event)=>{
      event.preventDefault()
      try{
      dispatch(showMessage(`god logged in successfully`))
      dispatch(addUser({username,password}))
      setUsername('')
      setPassword('')
      
      }
      catch(exception){
        dispatch(showMessage('Error logging in..'))
        console.log(message)
      }
    }
   return (
  <div className="min-h-dvh flex items-center justify-center bg-gray-900 px-4">
    <div className="w-full max-w-md bg-gray-800 bg-opacity-50 rounded-lg p-8 shadow-lg">
      <h1 className="text-3xl text-white font-bold mb-6 text-center">Login</h1>

      <form onSubmit={handlelogin} className="space-y-5">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-300 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-700 text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your username"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  </div>
);

}
export default LoginForm
