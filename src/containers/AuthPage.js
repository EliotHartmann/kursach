import React, {Component} from "react";
import UnauthorisedUserHeader from "./UnauthorisedUserHeader";
import {Alert, Button, Col, Row} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {login} from "../store/actions/authActions";
import {connect} from "react-redux";

class AuthPage extends Component{

    login = () => event => {
        event.preventDefault();
        this.props.login();
    };

    render() {
        return (
            <div>
                <UnauthorisedUserHeader/>
                <div>
                    <Row>
                        <Col/>
                        <Col>
                            <Alert variant={"info"}>
                                Please, log in
                            </Alert>
                        </Col>
                        <Col/>
                    </Row>
                    <Button variant={"primary"} type ="submit" onClick={this.login()}>Log in</Button>
                </div>

            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login : bindActionCreators(login, dispatch),
    }
};
export default connect(null, mapDispatchToProps)(AuthPage);