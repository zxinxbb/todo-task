import { useEffect, useState } from "react";
import { readTodos } from "../api/readTodos";
import Card from '../components/Card'
import { deleteTodo } from "../api/deleteTodo";
const Home = () => {
    const [todos, setTodos] = useState([])


    const deleteHandler = async (todo) => {
        let response = await deleteTodo(todo)
        console.log(response)
        let updated= [...todos]
        updated = updated.filter(items=> items._id !== response._id)
        setTodos(updated)
    }
    useEffect(() => {
        const fetchTodos = async () => {
            let data = await readTodos()
            setTodos(data.todos)
            console.log(data.message)
        }
        fetchTodos()
    }, [])
 
    if (!todos) return <h1>loading...</h1>
    return (
        
        <div className="container" >
            <>
                {
                    todos ? todos.map((todo) => <Card key={todo._id} deleteHandler={deleteHandler} todo={todo}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
   
    );

}

export default Home