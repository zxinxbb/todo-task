const API_URL = `http://localhost:4000`

export const addTodo = async (todo) => {
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = {  }
    const response = await fetch(``, {
        // method type?
        method: '',
        // sending body, stringify data
        body: JSON.stringify(),
        // content type?
        headers: {
            
        }
    })
    const json = await response.json()
    return json
}
