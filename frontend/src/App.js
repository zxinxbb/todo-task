import Navbar from "./components/Navbar"
import AddTodo from "./pages/AddTodo"
import Home from "./pages/Home"
import EditTodo from "./pages/EditTodo"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
const App = () => {
  return (
    
    <div >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link>
      
      <BrowserRouter>
      <div className="App">
       <div className="nav"> <h1 className="Appchild"  >Todo List</h1></div>
        <Navbar  /></div>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/add-todo'
            element={<AddTodo />}
          />
          <Route
            // dynamic :id to create custom route
            path='/:id'
            element={<EditTodo />}
          />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App