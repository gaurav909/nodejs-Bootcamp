const mongoose = require('mongoose')

// url
const MONGOURL= 'mongodb://127.0.0.1:27017/hotel'

mongoose
  .connect(MONGOURL, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })

const db= mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDb server')
})

db.on('error',(err)=>{
    console.error('MongoDb connection error',err)
})

db.on('disconnected',()=>{
    console.log('MongoDb disconnected')
})

module.exports =db;