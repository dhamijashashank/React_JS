import React from 'react';


//const ToDoItem  = (props) => {
class ToDoItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isEditable:false
        }
        this.toggleState = this.toggleState.bind(this);
        this.getinputform = this.getinputform.bind(this);
        this.getInputList = this.getInputList.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    updateItem(evnt){
        evnt.preventDefault();
        console.log(this.input.value);
        this.props.updateTask(this.props.index , this.input.value)
        this.toggleState();

    }
    toggleState(){
        const {isEditable} = this.state;
        this.setState({
            isEditable : !isEditable
        })
    }

    getinputform(){
        
       return (<form onSubmit={this.updateItem}>
            <input type="text" ref={(value) => {
                this.input = value
            }} defaultValue={this.props.deta.name}/>
            <button type="submit" >Update button</button>
        </form>)
    }

    getInputList(){
       return ( <li
         onClick={ () => {
             this.props.clickHandler(this.props.index)
         }} 
         className ={this.props.deta.completed ?'completed' :' '}>
         {this.props.deta.name}
         <button onClick={(event) => {
             event.stopPropagation();
             this.props.deleteTask(this.props.index)
             }}>Delete </button>
             <button onClick={(event) => {
             event.stopPropagation();
             this.toggleState()
             }}>Edit </button>
      </li>
       )
    }
 
 render(){
     // one query where to use colon and where to you = operator
     //const isEditable = this.state.isEditable // this and below line do same thing only representation is different
     const {isEditable} = this.state;
     return (
         <section>
             {
         isEditable ? this.getinputform() : this.getInputList()
             }
        </section>
     )
    }
}

export default ToDoItem;