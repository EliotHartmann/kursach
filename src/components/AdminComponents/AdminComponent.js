import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Alert, Form} from "react-bootstrap";
import {Button} from "reactstrap";
import {createUser} from "../../store/actions/adminActions";
import WarningComponent from "../WarningComponent";
import {Col} from "reactstrap";

class AdminComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            passport: '',
            rank: 'officer',
            email: '',
            shift: '',
            p_id: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = name => event => {
        event.preventDefault();
        this.setState({
            [name]: event.target.value,
        });
        console.log(this.state);
    };

    createUser = (passport, rank, email, shift) => event => {
        event.preventDefault();
        this.props.createUser(passport, rank, email, shift);
    };

    render() {
        return(
            <div>
                <Form>
                    <Form.Row>
                        <Col/>
                        <Form.Group as={Col}>
                            <Form.Label>Passport</Form.Label>
                            <Form.Control type="text" placeholder="Enter passport number" onChange={this.handleChange('passport')}/>
                        </Form.Group>
                        <Col/>
                    </Form.Row>
                    <Form.Row>
                        <Col/>
                            <Form.Group as={Col}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange('email')}/>
                            </Form.Group>
                        <Col/>
                    </Form.Row>
                    <Form.Row>
                        <Col/>
                        <Form.Group as={Col}>
                            <Form.Control as="select" onChange={this.handleChange('shift')}>
                                <Form.Label>Shift</Form.Label>
                                <option>DAY</option>
                                <option>NIGHT</option>
                            </Form.Control>
                        </Form.Group>
                        <Col/>
                    </Form.Row>
                    <Form.Row>
                        <Col/>
                        <Form.Group as={Col}>
                            <Form.Label>Station id</Form.Label>
                            <Form.Control type="text" placeholder="Enter station id" onChange={this.handleChange('p_id')}/>
                        </Form.Group>
                        <Col/>
                    </Form.Row>
                    <Form.Row>
                        <Col/>
                            <Form.Group as={Col}>
                                <Form.Label>Rank</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange('rank')}>
                                    <option>OFFICER</option>
                                    <option>DETECTIVE</option>
                                    <option>CORPORAL</option>
                                    <option>SERGEANT</option>
                                    <option>LIEUTENANT</option>
                                    <option>CAPTAIN</option>
                                    <option>DISPATCHER</option>
                                </Form.Control>
                            </Form.Group>
                        <Col/>
                    </Form.Row>
                    <Form.Row>
                        <Col/>
                        <Col>
                            <Button outline color="primary" type="submit" onClick={this.createUser(this.state.passport, this.state.rank, this.state.email, this.state.shift, this.state.p_id)}>
                                Create
                            </Button>
                        </Col>
                        <Col/>
                    </Form.Row>
                </Form>
                <Alert variant={"light"}>{this.props.createdUserInfo.login}{this.props.createdUserInfo.password}</Alert>
                <WarningComponent/>
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        createdUserInfo: state.createdUserInfo,
        message: state.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        createUser: bindActionCreators(createUser, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent);