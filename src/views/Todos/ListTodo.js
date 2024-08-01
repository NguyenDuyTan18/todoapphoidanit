import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo.js";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        ListTodo: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Making videos'},
            {id: 'todo3', title: 'Fixing bugs'}
        ], 
        editTodo: {}
    }

    addNewTodo = (todo) => {
       this.setState({
            ListTodo: [...this.state.ListTodo, todo]
       })

        toast.success("Add success!")
    }

    handleDelete = (todo) => {
        let todos = this.state.ListTodo;
        todos = todos.filter((item) => item.id !== todo.id)
        console.log(todos)
        this.setState({
            ListTodo: todos
        })
        toast.success("Delete success...")
    }

    handleEditTodo = (todo) => {
        let { ListTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(todo).length === 0
        console.log('<<< check obj ', isEmptyObj)
        if(isEmptyObj === false && editTodo.id === todo.id ) {
            
            let ListTodoCopy = [...ListTodo]
            let objIndex = ListTodoCopy.findIndex(item => item.id === editTodo.id );


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

    handleOnChangeTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { ListTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log('>>> check is Empty Obj: ', isEmptyObj)
        return (
            <div className="list-todo-container">
                <AddTodo
                addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {ListTodo && ListTodo.length > 0 &&
                        ListTodo.map((item, index) => {
                            return(
                                <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <input value={editTodo.title}
                                                onChange={(event) => this.handleOnChangeTodo(event)}
                                                />
                                            :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                        </>
                                        }
                                        <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false ? 
                                                'Save' : 'Edit'
                                            }
                                       </button>                                     
                                        <button className="delete"
                                        onClick={() => this.handleDelete(item)}>
                                            Delete
                                        </button>
                                    </div> 


                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;