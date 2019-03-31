import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadInfo} from "../../store/actions/userActions";

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
                    <tr>Username</tr>
                    <tr>{this.props.info.username}</tr>
                    <tr>Email</tr>
                    <tr>{this.props.info.email}</tr>
                </Table>
            </div>
        )
    };

    render() {

        return(
            <div>
                {this.loadInfo}
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        info: state.info
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        loadInfo: bindActionCreators(loadInfo, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoComponent);