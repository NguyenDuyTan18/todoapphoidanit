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
        ]
    }

    addNewTodo = (todo) => {
       this.setState({
            ListTodo: [...this.state.ListTodo, todo]
       })

        toast.success("Wow so easy!")
    }

    handleDelete = (todo) => {
        console.log(todo)
        let todos = this.state.ListTodo;
        todos = todos.filter((item) => item.id !== todo.id)
        console.log(todos)
        this.setState({
            ListTodo: todos
        })
        toast.success("Delelte success...")
    }
    render() {
        let { ListTodo } = this.state;
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
                                        <span>{index + 1} - {item.title}</span> <></>
                                        <button className="edit">Edit</button>
                                        <button className="delete"
                                        onClick={() => this.handleDelete(item)}
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

export default ListTodo;