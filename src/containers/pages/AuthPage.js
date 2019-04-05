import React, {Component} from "react";
import UnauthorisedUserHeader from "../headers/UnauthorisedUserHeader";
import {Alert, Button, Col, Row} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {login} from "../../store/actions/authActions";
import {connect} from "react-redux";
import Send from "@material-ui/icons/Send";
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
                    <Row>
                        <Col/>
                        <Col>
                            <Button color={"primary"} onClick={this.login()}> Log in <Send /></Button>
                        </Col>
                        <Col/>
                    </Row>
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