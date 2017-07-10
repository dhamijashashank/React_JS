import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToDoList extends React.Component{

    constructor(){
        super();
        this.state = {
            lastName: ['Thanks krishna for help','krishna','hare krishna']
        }
    }

render(){
    return (
        <ul>
            {
                this.state.lastName.map(function(name){
                return <ToDoItem key={name} deta={name}/>
                }
                )
            }
            </ul>
        )   
    }
}
class ToDoItem extends React.Component {

render(){
    return <li>
        
         {this.props.deta}
        </li>
}
}
ReactDOM.render(<ToDoList/>, document.getElementById('root'));
