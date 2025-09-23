const User=require('../models/user')
const bcrypt=require('bcrypt')
const loginRouter=require('express').Router()
const jwt=require('jsonwebtoken')

loginRouter.post('/',async(request,response)=>{
    const {username,password}=request.body
    const user=await User.findOne({username})

    const passwordCorrect=user===null
    ?false
    :await bcrypt.compare(password,user.passwordHash)

    if(!(user && passwordCorrect)){
        return response.status(401).json({error:"Invalid Username or Password"})
    }

    const userforToken={
        username:user.username,
        id:user._id
    }
    
   const Token= jwt.sign(userforToken,process.env.SECRET)
   response
   .status(201)
   .send({Token,username:user.username,name:user.name})
  

})
module.exports=loginRouter