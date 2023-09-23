// handler functions that will be executed 

const Todo = require("../models/todo")

const getTodos = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await Todo.find({})
    // respond with an object that has a message and the items from the DB
    res.json({
        message: "all items",
        todos: items
    })
}

const getTodo = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params
    // find todo with Model.findById()
    const todo = await Todo.findById(id)
    // response (res) with .json with the todo found
    res.status(200).json(todo)
}

const createTodo = async (req, res) => {
    // get the text from the req.body
    const {text} = req.body
    // create new todo object with model
    const todoObj = new Todo ({
        text
       })
    const newTodo = await todoObj.save()
       res.status(200).json(newTodo)
    // await for it to be saved
    // respond with json()
  
}

const editTodo = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndUpdate
  let todo = await Todo.findByIdAndUpdate(id,{text: req.body.text} )
  res.status(200).json(todo)
}

const deleteTodo = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndDelete
    let todo = await Todo.findByIdAndDelete(id)
    res.status(200).json(todo)

   
}

module.exports = {
    createTodo,
    getTodos,
    editTodo,
    deleteTodo,
    getTodo
}