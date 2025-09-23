const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })

  } else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
    return response.status(400).json({ error: 'expected `username` to be unique' })
  }
   else if(error.name==='JsonWebTokenError'){
      return response.status(401).json({error:'token invalid'})
     }
     else if(error.name==='TokenExpiredError'){
      response.status(401).json({error:'token expired'})
     }
    

  next(error)
}

const TokenExtractor=(request,response,next)=>{
       const auth=request.get('authorization')
       if(auth && auth.startsWith('Bearer')){
          request.token=auth.substring(7)
       }
       else{
         request.token=null
       }
       next()
    }
    


module.exports={errorHandler,TokenExtractor}