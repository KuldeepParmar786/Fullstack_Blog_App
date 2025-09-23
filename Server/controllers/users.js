const usersRouter=require('express').Router()
const bcrypt=require('bcrypt')
const User=require('../models/user')
const Blog=require('../models/blog')


usersRouter.post('/',async(request,response)=>{
    const {username,name,password}=request.body
    if(!password){
        return response.status(400).json({error:"Password is required"})
    }
    else if(password.trim().length<3){
        return response.status(400).json({error:"Password must be 3 characters long"})
    }
    const saltRounds=10
    const passwordHash= await bcrypt.hash(password,saltRounds)
    
    const newUser=new User({
        username,
        name,
        passwordHash
    })

    const saveduser=await newUser.save()
    
    response.status(201).json(saveduser)

})

usersRouter.get('/',async(request,response)=>{
    const users=await User
    .find({}).populate('blog')
    response.json(users)
})

usersRouter.get('/:id',async(request,response)=>{
    const id=request.params.id
    const user=await User.findById(id).populate('blog')
    response.json(user)
})

module.exports=usersRouter