import React, { useEffect, useState } from 'react';
import Todos from '../Todos/Todos';

const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/todos`
        fetch(url)
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);

    const handleDeleteTodo = (id) => {
        const removeTodo = todos.filter(todo => todo.id !== id);
        setTodos(removeTodo)
    }
    return (
        <>
            <div >
                {
                    todos.map(todo => <Todos key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />)
                }
            </div>

        </>
    );
};

export default Home;