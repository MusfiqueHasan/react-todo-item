import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../localStorage/localDb';
import Todos from '../Todos/Todos';

const Home = () => {

    const [todos, setTodos] = useState([]);
    const savedData = getStoredCart()
    const loggedInUserEmail = Object.keys(savedData)[0]
    useEffect(() => {
        const url = `http://localhost:5000/users/${loggedInUserEmail}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTodos(data.userList));
    }, [loggedInUserEmail]);
    console.log(todos);

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