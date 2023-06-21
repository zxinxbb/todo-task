const API_URL = `http://localhost:4000`

export const updateTodo = async (todo) => {
    
    const response = await fetch(`${API_URL}/todos/items/${todo._id}`, {
        // what method?
      
        // type of content?
       
        // body updated the "text" in your model with the text you sent as parameter 
        
    })
    const json = await response.json()
    return json
}