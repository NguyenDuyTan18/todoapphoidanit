import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
           
        }, 3000)
    }

    render() {
        console.log('>>> check props: ',this.props)
        return (
            <div>Hello world from HomePages with ZT</div>
        )
    }
}

export default withRouter(Home);