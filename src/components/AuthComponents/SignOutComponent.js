import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logout} from "../../store/actions/authActions";
import WarningComponent from "../WarningComponent";

class SignOutComponent extends Component{

    logout = () => event => {
        event.preventDefault();
        this.props.logout()
    };
    render() {
        return(
            <div>
                <Button variant={"outline-danger"} size={"sm"} onClick={this.logout()}>Logout</Button>
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