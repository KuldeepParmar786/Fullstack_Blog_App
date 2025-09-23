const mongoose = require('mongoose')
const commentSchema=mongoose.Schema({
   content:String
})
const blogSchema = mongoose.Schema({
  title: String,
  discription: String,
  content: String,
  likes: Number,
  user:
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
  comment:[commentSchema]
  
})

blogSchema.set('toJSON',{
    transform:(document,returnedObject)=>{
       returnedObject.id=returnedObject._id.toString()
       delete returnedObject._id
       delete returnedObject.__v
    }
  })

commentSchema.set('toJSON',{
    transform:(document,returnedObject)=>{
       returnedObject.id=returnedObject._id.toString()
       delete returnedObject._id
       delete returnedObject.__v
    }
  })

module.exports=mongoose.model('Blog',blogSchema)
