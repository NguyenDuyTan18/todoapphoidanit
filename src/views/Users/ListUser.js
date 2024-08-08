import React from "react";
import axios from "axios";
import './ListUsers.scss'
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
    state = {
        ListUser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : []
        })
        console.log('>>> check res: ', res.data.data)
    }


    handleViewDetail = (user) => {
        console.log('>>> check props: ', this.props)
      this.props.history.push(`user/${user.id}`)
    }
    render() {
        let {ListUser} = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fecth all list users    
                </div>    

                <div className="list-user-content">
                    {ListUser && ListUser.length > 0 &&
                        ListUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                onClick={() => this.handleViewDetail(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                   

                </div>
            </div>
        )
    }
}
export default withRouter(ListUser);