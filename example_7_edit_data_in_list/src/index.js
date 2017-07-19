import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoForm from './component/ToDoForm.js'
import ToDoItem from './component/ToDoItem.js';

class ToDoList extends React.Component {

    constructor() {
        super();
        this.ChangeStatus = this.ChangeStatus.bind(this);
        this.changetaskstatus = this.changetaskstatus.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this); 
        this.updateTask = this.updateTask.bind(this); 
        this.state = {
            tasks: [{
                name: "Bulk Milk",
                completed: false
            },
            {
                name: "Bulk Test",
                completed: false
            },
            {
                name: "Alone Testing",
                completed: false
            }
            ],
            currenttask: ''
        }
    }
    updateTask(index , newvalue){
       var tasks = this.state.tasks;
        var task = tasks[index];
        task['name'] = newvalue;
        this.setState({
            tasks: tasks
        }) 
    }

    deleteTask(index){
        let tasks = this.state.tasks
        tasks.splice(index,1)

        this.setState({
            tasks
        })
    }

    addTask(event) {
        event.preventDefault()
        let currenttask = this.state.currenttask;
        let tasks = this.state.tasks;
        tasks.push({
            name: currenttask,
            completed: false
        })

        this.setState({
            tasks,
            currenttask: ''
        })
    }

    ChangeStatus(index) {
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks: tasks
        })
        console.log(this.state.tasks[index])
    }

    changetaskstatus(newvalue) {
        this.setState({
            currenttask: newvalue.target.value
        })
    }

    render() {
        return (
            <section>
                <ToDoForm
                    currenttask={this.state.currenttask}
                    changetaskstatus={this.changetaskstatus}
                    addTask={this.addTask}
                    
                />
                <ul>
                    {
                        this.state.tasks.map((task, index) => {
                            return <ToDoItem 
                                key={task.name} 
                                clickHandler={this.ChangeStatus} 
                                index={index}
                                deta={task}
                                deleteTask={this.deleteTask}
                                updateTask={this.updateTask} />
                        }
                        )
                    }
                </ul>
            </section>
        )
    }
}

ReactDOM.render(<ToDoList />, document.getElementById('root'));