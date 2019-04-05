import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logout} from "../../store/actions/authActions";

class SignOutComponent extends Component{

    logout = () => event => {
        event.preventDefault();
        this.props.logout()
    };
    render() {
        return(
            <div>
                <Button variant={"danger"} size={"sm"} onClick={this.logout()}>Logout
                    &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
                </Button>
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