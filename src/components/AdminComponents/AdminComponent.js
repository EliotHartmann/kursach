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
            jabber: '',
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

    createUser = (passport, rank, jabber, email, shift, p_id) => event => {
        event.preventDefault();
        this.props.createUser(passport, rank, jabber, email, shift, p_id);
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
                                <Form.Label>Jabber</Form.Label>
                                <Form.Control type="text" placeholder="Enter Jabber" onChange={this.handleChange('jabber')}/>
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
                            <Form.Label>Shift</Form.Label>
                            <Form.Control type="text" placeholder="Enter shift" onChange={this.handleChange('shift')}/>
                        </Form.Group>
                        <Col/>
                    </Form.Row>
                    <Form.Row>
                        <Col/>
                        <Form.Group as={Col}>
                            <Form.Label>Policeman ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter policeman ID" onChange={this.handleChange('p_id')}/>
                        </Form.Group>
                        <Col/>
                    </Form.Row>
                    <Form.Row>
                        <Col/>
                            <Form.Group as={Col}>
                                <Form.Label>Rank</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange('rank')}>
                                    <option>Officer</option>
                                    <option>Detective</option>
                                    <option>Corporal</option>
                                    <option>Sergeant</option>
                                    <option>Lieutenant</option>
                                    <option>Captain</option>
                                    <option>Dispatcher</option>
                                </Form.Control>
                            </Form.Group>
                        <Col/>
                    </Form.Row>
                    <Form.Row>
                        <Col/>
                        <Col>
                            <Button outline color="primary" type="submit" onClick={this.createUser(this.state.passport, this.state.jabber, this.state.email, this.state.rank, this.state.shift, this.state.p_id)}>
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