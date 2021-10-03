import React from 'react';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router';
import './Todos.css'
const Todos = (props) => {
    const history = useHistory()
    const { id, title, completed } = props.todo;
    const handleTodoDetails = () => {
        history.push(`/details/${id}`)
    }

    return (
        <div className="todo-info">
            <div className="todo-info-details">
                <Avatar name={title} size="50" round={true} />
                <h2>{title}</h2>
                {completed ? <h2 className="todo-details-btn-1">complete</h2> : <h2 className="todo-details-btn-2">Incomplete</h2>}
            </div>
            <div className="todo-info-details-btn">
                <button className="todo-details-btn" onClick={handleTodoDetails}>see details</button>
                <button className="delete-btn" onClick={() => { props.handleDeleteTodo(id) }}><i className="fas fa-trash-alt"></i></button>
            </div>

        </div>
    );
};

export default Todos;