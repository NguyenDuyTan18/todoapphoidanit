import React from "react";
import './ListTodo(NDT).scss'
import AddTodos from "./AddTodo(NDT)";
import { toast } from 'react-toastify';

class ListTodos extends React.Component {
    state = {
        ListTodo: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Making videos'},
            {id: 'todo3', title: 'Fixing bugs'}
        ], 
        editTodo: {}
    }

    AddNewTodo = (todo) => {
        
        this.setState({
            ListTodo: [...this.state.ListTodo, todo]
       })
       toast.success('Add Success...')
    }

    handleDeleteTodo = (todo) => {
        let ListTodos = this.state.ListTodo
        let currentTodo = ListTodos.filter((item) => item.id !== todo.id)
        this.setState({
            ListTodo: currentTodo
        })
        toast.success('Delete success...')
    }

    handleEditTodo = (todo) => {
        let { ListTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        if(editTodo.id === todo.id && isEmptyObj === false) {

            let ListTodoCopy = [...ListTodo]
            let objIndex = ListTodoCopy.findIndex(item => item.id === todo.id);

            ListTodoCopy[objIndex].title = editTodo.title
            this.setState({
                ListTodo: ListTodoCopy,
                editTodo: ''
            })
            toast.success('Update success...')
            return;
        }
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { ListTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        return(
            <div className="list-todo-container">
                <AddTodos
                AddNewTodo = {this.AddNewTodo}
                />

                <div className="list-todo-content">
                    {ListTodo && ListTodo.length > 0 &&
                    ListTodo.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>  
                                {isEmptyObj === true ?
                                    <span>{index + 1} - {item.title} </span>
                                :
                                    <>
                                    {editTodo.id === item.id ? 
                                        <input value={editTodo.title}
                                        onChange={(event) => this.handleOnchangeTodo(event)}
                                        />
                                        :
                                        <span>{index + 1} - {item.title} </span>
                                    }
                                    </>
                                }

                                <button className="btn-edit"
                                onClick={() => this.handleEditTodo(item)}>
                                    {isEmptyObj === false ?
                                        'Save' : 'Edit'
                                    }
                                
                                </button>

                                <button className="btn-delete"
                                onClick={() => this.handleDeleteTodo(item)}
                                >Delete</button>
                                
                            </div>
                        )
                    })
                    
                    }
                    
                </div>
            </div>
        )
    }
}

export default ListTodos;