import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '' 
    }

     handleChangeTitleJobs = (event) => {
        this.setState({
           title: event.target.value
        })
    }

     handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }


    handleClick = (event) => {
        event.preventDefault()

       if(!this.state.title || !this.state.salary){
            alert('Missinggg...')
            return;
       }

        console.log('<<< Check data input: ', this.state)

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render () {
        return (
            <form>
                <label htmlFor="fname">Job's tilte:</label><br/>
                <input type="text"  
                    value={this.state.titleJobs}
                    onChange={(event) => this. handleChangeTitleJobs(event)}
                />
                <br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input type="text"  
                    value={this.state.salary}
                    onChange={(event) => this. handleChangeSalary(event)}
                /><br/><br/>
                <input type="submit" 
                    onClick={(event) => this.handleClick(event)}
                />
            </form> 

        )
    }
}

export default AddComponent;