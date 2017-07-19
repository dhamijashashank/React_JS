import React from 'react';

const ToDoForm = (props) => {

    return (
       <form onSubmit={props.addTask}>
            <input type="text"
            value={props.currenttask}
            onChange ={props.changetaskstatus}
            />
            <button type='submit'>Submit</button>
            
       </form>
    )

}

export default ToDoForm;