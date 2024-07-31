import React from "react";
import ChildComponent from "./childcomponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', title: 'Dev', salary: '500'},
            { id: 'job2', title: 'Tester', salary: '400'},
            { id: 'job3', title: 'Project managers', salary: '1000'}
        ]
    }
    
    addNewJob = (job) => {
       console.log('<<< check job: ', job)
    //    let currentJob = this.state.arrJobs
    //    currentJob.push(job)
       this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJob
       })
    }
    
    DeleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter((item) => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('<< run didupdate ', 'prevState: ', prevState, 'current state: ', this.state)
    }

    componentDidMount() {
        console.log('<<< run coponent did mount')
    }
    /* 
    JSX => return one block (div...) 
    fragment => div dac biet giai quyet van de return one block
    */
    render() {
        console.log(this.state)
        return (
           <>
            <AddComponent
                addNewJob = {this.addNewJob}
            />
            
            <ChildComponent 
                arrJobs = {this.state.arrJobs}
                DeleteAJob = {this.DeleteAJob}
            />
           
           </>
        )
        
    }
}

export default MyComponent;