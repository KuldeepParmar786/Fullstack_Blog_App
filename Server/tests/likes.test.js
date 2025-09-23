const {test,describe}=require('node:test')
const assert=require('node:assert')

const totalLikes =require('../utils/list_helper').totalLikes

describe('calculating total likes',()=>{
    const blogs=[
        {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
        },
      {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Procrastination kills',
      author: 'Kuldeep S Parmar',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 9,
      __v: 0
      },
      {
       _id: '5a422aa71b54a676234d17f8',
      title:'Discipline is much better than motivation',
      author: 'Kapil L Bamotriya',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 7,
      __v: 0
      }
    ]
    test('likes are 21',()=>{
        const likes=totalLikes(blogs)
        assert.strictEqual(likes,21)
    })
})