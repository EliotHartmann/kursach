import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Alert, Button, Form} from "react-bootstrap";
import {createUser} from "../../store/actions/adminActions";
import WarningComponent from "../WarningComponent";
import AdminHeader from "../../containers/headers/AdminHeader";

class AdminComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            passport: '',
            rank: 'officer',
            jabber: '',
            email: ''
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

    createUser = (passport, rank, jabber, email) => event => {
        event.preventDefault();
        this.props.createUser(passport, rank, jabber, email);
    };

    render() {
        return(
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Passport</Form.Label>
                        <Form.Control type="text" placeholder="Enter passport number" onChange={this.handleChange('passport')}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Jabber</Form.Label>
                        <Form.Control type="text" placeholder="Enter Jabber" onChange={this.handleChange('jabber')}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange('email')}/>
                    </Form.Group>
                    <Form.Group>
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
                    <Button variant="primary" type="submit" onClick={this.createUser(this.state.passport, this.state.jabber, this.state.email, this.state.rank)}>
                        Submit
                    </Button>
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