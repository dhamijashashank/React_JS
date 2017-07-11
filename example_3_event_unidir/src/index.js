import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToDoList extends React.Component{

    constructor(){
        super();
        this.ChangeStatus = this.ChangeStatus.bind(this);
        this.state = {
            tasks: [{
               name:"Bulk Milk",
               completed:"false" 
            },
            {
               name:"Bulk Test",
               completed:"false" 
            },
            {
               name:"Alone Testing",
               completed:"false" 
            }
            ]
        }
    }

    ChangeStatus(index){
       var tasks = this.state.tasks;
       var task = tasks[index];
       task.completed = !task.completed;
       this.setState({
           tasks : tasks
       })
       console.log(this.state.tasks[index])
    }

render(){
    return (
        <ul>
            {
                this.state.tasks.map((task , index) => {
                return <ToDoItem key={task.name} clickHandler={this.ChangeStatus} index={index} deta={task} />
                }
                )
            }
            </ul>
        )   
    }
}
class ToDoItem extends React.Component {

render(){
    return <li onClick={ () => {
            this.props.clickHandler(this.props.index)
        }} className ={this.props.deta.completed ?'completed' :' '}>
        
            {this.props.deta.name}
        </li>
}
}
ReactDOM.render(<ToDoList/>, document.getElementById('root'));