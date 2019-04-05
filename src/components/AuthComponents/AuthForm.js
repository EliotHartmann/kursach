import React, {Component} from "react";
import {Form, Row, Col, Button} from "react-bootstrap";
import {connect} from 'react-redux';
import {login, makeWarning, register} from '../../store/actions/authActions';
import WarningComponent from "../WarningComponent";
import {bindActionCreators} from "redux";

class AuthForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            login: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
        console.log(this.state);
    };

    register = (login, password) => event => {
        event.preventDefault();
        this.props.register(login, password);
    };

    render() {
        return(
            <Form>
                <Row>
                    <Col/>
                    <Col>
                    <Form.Group>
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="text" placeholder="Enter Login" onChange={this.handleChange('login')}/>
                    </Form.Group>
                    </Col>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" onChange={this.handleChange('password')}/>
                    </Form.Group>
                    </Col>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col>
                <Button variant="primary" type="submit" onClick={this.register(this.state.login, this.state.password)}>
                    Sign Up
                </Button>
                    </Col>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col>
                        <WarningComponent/>
                    </Col>
                    <Col/>
                </Row>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        makeWarning : bindActionCreators(makeWarning, dispatch),
        register: bindActionCreators(register, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);

