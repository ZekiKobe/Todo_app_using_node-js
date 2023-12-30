const router = require('express').Router()
const Todo = require("../models/todo");


//routes
router.get('/',async(req,res) => {
    const allToDo=await Todo.find();
    res.render("index",{
        todo:allToDo
    })
})




module.exports=router;