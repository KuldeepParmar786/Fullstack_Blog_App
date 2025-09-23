import axios from 'axios'
const baseUrl = '/api/blogs'

let token=null

const setToken=(newToken)=>{
   token=`Bearer ${newToken}`
}

const create=async(newObject)=>{
   const config={
     headers:{Authorization:token}
   }
   const response=await axios.post(baseUrl,newObject,config)
   return response.data
}

const getAll = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}
const like=async(updatedBlog,id)=>{
    const response=await axios.put(`${baseUrl}/${id}`,updatedBlog)
    return response.data
}

const remove=async(id)=>{
   const response=await axios.delete(`${baseUrl}/${id}`)
   return response.data
}

const comment=async(id,commentObject)=>{
    console.log(commentObject)
    console.log(id)
    const response=await axios.post(`${baseUrl}/${id}/comments`,commentObject)
    return response.data
}

export default {getAll,create,setToken,like,remove,comment}