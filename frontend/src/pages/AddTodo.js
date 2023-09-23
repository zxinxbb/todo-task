import { useState } from "react"
import { addTodo } from "../api/addTodo"

const AddTodo = () => {
    const [userInput, setUserInput] = useState("")

    const handler = async (e) => {
        e.preventDefault() // prevents the page from refreshing as then we will lose the state a

        // what function will run?
        let response = await addTodo(userInput)
        console.log(response)
    }

    return (
        <div className="items">
            <h1>
                add item
            </h1>
            <form onSubmit={handler}>
                <input 
                type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="insert text here"
                />
                <div className="button">
                <button className="edit" type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo