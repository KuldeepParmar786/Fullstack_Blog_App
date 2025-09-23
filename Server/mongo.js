const config=require('./utils/config')
const Blog=require('./models/blog')
const mongoose = require('mongoose')


mongoose.set('strictQuery',false)

const url="mongodb+srv://Kuldeep:123654@cluster0.1eun9yi.mongodb.net/TestblogApp?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)


 const blog=new Blog({
  title:'Life is hard',
  author:'Kuldeep Parmar',
  url:'http://life.com',
  likes: 2000,
})


blog.save().then(result => {
  console.log('blog saved!')
  mongoose.connection.close()
})