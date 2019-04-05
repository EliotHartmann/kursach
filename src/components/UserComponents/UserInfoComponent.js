import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadInfo} from "../../store/actions/userActions";
import UserHeader from "../../containers/headers/UserHeader";

class UserInfoComponent extends Component{
    // constructor(props){
    //     super(props);
    //     // this.loadInfo = this.loadInfo().bind(this);
    // }

    loadInfo = () => {
        this.props.loadInfo();
        return(
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.props.userInfo.username}</td>
                        <td>{this.props.userInfo.email}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    };

    render() {

        return(
            <div>
                <UserHeader/>
                {this.loadInfo()}
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        userInfo: state.userInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        loadInfo: bindActionCreators(loadInfo, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoComponent);