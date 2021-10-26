import React, { useEffect, useState } from 'react';
import Todos from '../Todos/Todos';

const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/users`
        fetch(url)
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);

    const handleDeleteTodo = id => {
        const proceed = window.confirm("are you sure you want to delete")
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUser = todos.filter(user => user._id !== id)
                        setTodos(remainingUser)
                    }
                })
        }
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