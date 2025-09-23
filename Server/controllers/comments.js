const CommentsRouter=require('express').Router()
const mongoose=require('mongoose')
const Comment=require('../models/comments')
const Blog=require('../models/blog')

const comments=[
    {
     content:'Awesome',
     blog:'68a98ecc5d9f663618de8a56',
    },
    {
     content:'Great',
     blog:'68a98ecc5d9f663618de8a56'
    },
    {
     content:'Nice',
     blog:'68a98ecc5d9f663618de8a56'
    },
    {
     content:'Hot',
     blog:'68a98ecc5d9f663618de8a56'
    }
]

CommentsRouter.get('/:id',async(request,response)=>{
      const comments=await Comment.find({})
      response.json(comments).populate('Blog')
})

CommentsRouter.post('/',async(request,response)=>{
     const id=String(request.params.id)
     console.log(id)
     const content=request.body.content
     const newcomment=new Comment({
        content:content
     })
     const result=await newcomment.save()
    //  const blog= await Blog.findById(id)
    //  const newblog=blog.comment.concat(newcomment)
    //  await Blog.findByIdAndUpdate(id,newblog)
     response.status(201).json(result)
})

module.exports=CommentsRouter