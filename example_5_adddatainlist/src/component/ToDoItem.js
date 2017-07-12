import React from 'react';

const ToDoItem  = (props) => {

    return <li onClick={ () => {
            props.clickHandler(props.index)
        }} className ={props.deta.completed ?'completed' :' '}>
            {props.deta.name}
        </li>
}

export default ToDoItem;