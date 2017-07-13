import React from 'react';

const ToDoItem  = (props) => {

    return <li 
        onClick={ () => {
            props.clickHandler(props.index)
        }} 
        className ={props.deta.completed ?'completed' :' '}>
        {props.deta.name}
        <button onClick={(event) => {
            event.stopPropagation();
            props.deleteTask(props.index)
            }}>Delete </button>

        </li>
}

export default ToDoItem;