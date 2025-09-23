const supertest=require('supertest')
const Blog=require('../models/blog')
const {test,after}=require('node:test')
const assert=require('node:assert')
const app=require('../app')
const mongoose=require('mongoose')

const api=supertest(app)

test('all blogs are retured',async()=>{
   const response= await api.get('/api/blogs')
    .expect(200)
    .expect('Content-type',/application\/json/)
  
    const contents=response.body[0]
    assert.ok(contents.id)

})
test('new blog is added',async()=>{
    
})

after(async()=>{
    await mongoose.connection.close
})
