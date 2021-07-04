import React from 'react'

const Item = ({ message }) => (
    <li>{ message }</li>
    );
    const TodoList = (props) => {
    const todos = ['finish doc', 'submit review', 'wait stackoverflow review'];
    return (
    <ul>
    <h1>{props.children}</h1>
    { todos.map(message => (<Item key={message} message={message} />)) }
    </ul>
    );
    };
    export default TodoList;
    