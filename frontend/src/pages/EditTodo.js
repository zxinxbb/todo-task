import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { updateTodo } from "../api/updateTodo"

const EditTodo = () => {

    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')

    const submitHandler = async () => {
            let obj = {
                _id: toUpdate._id, // Assuming your API expects _id for identification
            text: userInput,
            }
                let response = await updateTodo(obj)
                console.log(response)
                alert('edited item')
       

    } 

    useEffect(() => {
        const fetchTodo = async () => {
            let data = await getTodo(id)
            setToUpdate(data)
           // console.log(getTodo)
        }
        fetchTodo()
    },[])
    return (
        <div className="items">
            <h1>Edit:</h1>
         <h1>{toUpdate.text}</h1>
      
            <input 
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="insert text here"
            />
              <div className="button">
     
            <button className="edit" onClick={submitHandler}>submit</button>
            </div>
        </div>
    )
}
export default EditTodo