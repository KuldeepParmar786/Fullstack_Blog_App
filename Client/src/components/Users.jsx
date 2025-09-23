import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const baseURL='/api/users'

const User = () => {
const[users,setUsers]=useState([])
    useEffect(()=>{
      axios.get(baseURL).then(res=>setUsers(res.data))
    },[])
const loggedUser=useSelector(state=>state.user)
  return (
    
    <div className="min-h-dvh bg-gray-900 text-gray-400 px-5 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Users</h1>
        
        {loggedUser && (
         <h1 className="text-white text-md font-semibold mb-6">
          {loggedUser.username} Logged in
        </h1>
          )}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 bg-opacity-40 rounded-lg p-6 shadow-lg hover:shadow-indigo-500/30 transition"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {user.username}
              </h2>
              <p className="text-sm text-gray-300 mb-3">
                Added {user.blog.length} blogs
              </p>

              <ul className="space-y-1 text-gray-400 text-sm">
                {user.blog.length > 0 ? (
                  user.blog.map((blog) => (
                    <li
                      key={blog.id}
                      className="truncate hover:text-indigo-400 cursor-pointer"
                    >
                      <Link to={`/${blog.id}`}>{blog.title}</Link>
                    </li>
                  ))
                ) : (
                  <li className="italic text-gray-500">No blogs yet.</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;

