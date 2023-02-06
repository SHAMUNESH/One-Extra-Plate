const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://Shamunesh:test1@cluster0.tke8vuj.mongodb.net/?retryWrites=true&w=majority"
const authRouter = require('./routes/auth')
const cors = require('cors')


//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authRouter)

mongoose.set("strictQuery", false);
mongoose.connect(mongoURI)
mongoose.connection.on('open', () => {
    console.log('database connected successfully!')
})

app.listen(3000, (err)=> {
    if(!err){
        console.log('App is listening..')
    }
})