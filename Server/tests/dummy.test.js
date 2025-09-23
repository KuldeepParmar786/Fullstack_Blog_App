const {test,describe}=require('node:test')
const assert=require('node:assert')
const listhelper=require('../utils/list_helper')

test('dummy returns one',()=>{
    const blogs=4
    const result=listhelper.dummy(blogs)
    assert.strictEqual(result,1)
})