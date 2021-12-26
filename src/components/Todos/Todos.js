import React from 'react';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router';
import './Todos.css'
const Todos = (props) => {
    const history = useHistory()
    const { id, name, email, phoneNumber } = props.todo;
    const handleTodoDetails = () => {
        history.push(`/update/${id}`)
    }

    return (
        <div className="todo-info">
            <div className="todo-info-details">
                <Avatar name={name} size="50" round={true} />

                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phoneNumber}</p>
            </div>
            <div className="todo-info-details-btn">
                <button className=" mr-3 text-indigo-500" onClick={handleTodoDetails}><i class="fas fa-user-edit"></i></button>


                <button className="delete-btn" onClick={() => { props.handleDeleteTodo(id) }}><i className="fas fa-trash-alt"></i></button>
            </div>

        </div>
    );
};

export default Todos;