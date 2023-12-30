const express= require('express');
const mongoose=require('mongoose');



const app=express()


//connection to mongodb

mongoose.connect("mongodb://localhost:27017/to_do_app")

//Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine","ejs");



//routes
app.use(require('./routes/index'))
app.use(require('./routes/todo'))
//configuration of server
app.listen(3000,()=> console.log('server started listening on port: 3000'))
