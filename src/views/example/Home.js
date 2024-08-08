import React from "react";
import { withRouter } from "react-router";
import logo from "../../assets/images/zt.png"
import { connect } from "react-redux";
class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
           
        // }, 3000)
    }

    render() {
        console.log('>>> check props redux: ',this.props.dataRedux)
        return (
            <>
            <div>Hello world from HomePages with ZT</div>
            <div>
                <img src={logo} style={{width: '200px', height: '200px', marginTop:'20px',borderRadius: '50%'}}/>
            </div>
            
            </>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        dataRedux: state.users
    }
}

export default connect( mapStateToProp)(withRouter(Home));