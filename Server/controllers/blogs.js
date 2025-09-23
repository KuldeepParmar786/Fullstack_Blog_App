const blogsRouter=require('express').Router()
const Blog=require('../models/blog')
const User=require('../models/user')
const jwt=require('jsonwebtoken')

blogsRouter.get('/', async(request, response) => {
    const blogs=await Blog
    .find({}).populate('user',{username:1,name:1,id:1}).populate('comment',{content:1})
    response.json(blogs)
  
})

blogsRouter.put('/:id',async(request,response)=>{
    const id=String(request.params.id)
    console.log(id)
    const body=request.body
    const updatedBlog = {
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
    }
    const blog=await Blog.findByIdAndUpdate(id,updatedBlog).populate('user', { username: 1 })
    response.json(blog)
})

blogsRouter.delete('/:id',async(request,response)=>{
   const id=request.params.id
   await Blog.findByIdAndDelete(id)
   response.status(204).end()
})
blogsRouter.post('/', async(request,response) => {
  const body=request.body
  
  const decoded=jwt.verify(request.token,process.env.SECRET)
  if(!decoded.id){
    return response.status(401).send({error:"Invalid Token"})
  }
  const user=await User.findById(decoded.id)
  if(!user){
    return response.status(400).json({error:"User Id missing or Invalid"})
  }
  console.log(user)
  const newblog=new Blog ({
     title:body.title,
     discription:body.discription,
     content:body.content,
     likes:body.likes,
     user:user._id

  })
  const result=await newblog.save()
  user.blog=user.blog.concat(result._id)
  await user.save()
  response.status(201).json(result)
  
})

blogsRouter.post('/:id/comments',async(request,response)=>{
   const id=request.params.id
   console.log(id)
   const body=request.body
   const blog=await Blog.findById(id).populate('user',{username:1})
   blog.comment=blog.comment.concat(body)
   const result=await blog.save()
   response.status(201).json(result)
})

module.exports=blogsRouter
