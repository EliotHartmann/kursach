import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logout} from "../../store/actions/authActions";
import WarningComponent from "../WarningComponent";

class SignOutComponent extends Component{
    render() {
        return(
            <div>
                You logged as <b>{this.props.login}</b>
                <Button variant={"outline-danger"}>Logout</Button>
                <WarningComponent/>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        login: state.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        logout: bindActionCreators(logout, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOutComponent);