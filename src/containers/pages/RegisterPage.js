import React, {Component} from "react";
import UnauthorisedUserHeader from "../headers/UnauthorisedUserHeader";
import {Alert, Col, Row} from "react-bootstrap";
import AuthForm from "../../components/AuthComponents/AuthForm";

export default class RegisterPage extends Component{
    render() {
        return (
            <div>
                <UnauthorisedUserHeader/>

                        <div>
                            <Row>
                                <Col/>
                                <Col>
                                    <Alert variant={"info"}>
                                        Enter your data to register
                                    </Alert>
                                </Col>
                                <Col/>
                            </Row>
                            <AuthForm/>
                        </div>

            </div>
        );
    }
}