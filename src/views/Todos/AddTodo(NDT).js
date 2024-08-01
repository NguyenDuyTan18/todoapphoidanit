import React from "react";
import { toast } from 'react-toastify';
class AddTodos extends React.Component {

    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState( {
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if(!this.state.title) {
            toast.warn('Missing...')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.AddNewTodo(todo)

       this.setState({
            title: ''
       })
    }
    render() {
        return (
            <div className="add-todo">
                <input type="text" 
                onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button className="btn-add"
                onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>
        )
    }
}

export default AddTodos;