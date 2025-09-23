import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
const IndividualUser=()=>{
    const [user,setUser]=useState(null)
    const {id}=useParams()
     useEffect(()=>{
       axios.get(`/api/users/${id}`).then(res=>setUser(res.data))
     },[id])
     if(!user){
        return null
     }
    return(

        <div>
          <h1>{user.username}</h1>
          <h2>Added Blogs</h2>
          {user.blog.map(b=><li key={b.id}>{b.title}</li>)}
        </div>
    )
}
export default IndividualUser