import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';


const TodoDetails = () => {
    const { todoId } = useParams();
    const history = useHistory()
    const [todoDetails, setTodoDetails] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTodoDetails(data))
    }, []);

    const handleTodo=()=>{
        history.push('/home')
    }
    return (
        <div>
            <h1>{todoDetails.title}</h1>
            <button className="todo-details-btn" onClick={handleTodo}>Home Page</button>
        </div>
    );
};

export default TodoDetails;