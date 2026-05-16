import { useState } from "react"

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault()

        if(inputValue.trim()) {
            setTodos([...todos, inputValue])
            setInputValue("");
        }
    }

    const handleChange = e => {
        setInputValue(e.target.value);
    }
     
    return (
        <> 
            <h3>List of Tasks</h3>
            
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} placeholder="add a new todo" />
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map((todo, index) => 
                     <li key={index}>{todo}</li>
                )}
            </ul>
        </>
    )
}