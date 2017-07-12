import React from 'react';

// class ToDoItem extends React.Component {

// render(){
//     return <li onClick={ () => {
//             this.props.clickHandler(this.props.index)
//         }} className ={this.props.deta.completed ?'completed' :' '}>
//             {this.props.deta.name}
//         </li>
// }
// }

// export default ToDoItem;


const ToDoItem  = (props) => {

    return <li onClick={ () => {
            props.clickHandler(props.index)
        }} className ={props.deta.completed ?'completed' :' '}>
            {props.deta.name}
        </li>
}

export default ToDoItem;