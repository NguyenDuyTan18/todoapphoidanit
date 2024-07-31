import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('<<< Check handleOnClickDelete: ', job)
        this.props.DeleteAJob(job)
    }
    render() {
        // console.log(this.state.showJobs)
        let  { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs: true' : 'showJobs: false';
        console.log('check conditional: ', check);
        return (
           <>
                {!showJobs ? 
                    <div>
                        <button className="btn-show"
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                :
                <>
                    <div className="job-lists">
                    {
                        arrJobs.map((item,  index) => {
                            return (
                                <div key = {item.id}>
                                    {item.title} - {item.salary} $ <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                </div>
                            )
                        })

                    }
                    
                    </div>
                    <div>
                        <button onClick={() => this.handleShowHide()}>
                            Hide
                        </button>
                    </div>
                </>
                }
           </>
        )
        
    }
}

// const ChildComponent = (props) => {
//     let  { arrJobs } = props;
//         return (
//            <>
//                 <div className="job-lists">
//                     {
//                         arrJobs.map((item,  index) => {
//                             if(item.salary > 400 ) {
//                                 return (
//                                     <div key = {item.id}>
//                                         {item.title} - {item.salary} $
//                                     </div>
//                                 )
                                
//                             }
//                         })

//                     }
                    
//                 </div>
                   
                    
//            </>
//         )
        
// }

export default ChildComponent;