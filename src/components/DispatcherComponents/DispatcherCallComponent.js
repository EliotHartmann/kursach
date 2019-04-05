import React, {Component} from "react";
import {Button, Col, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {newCall} from "../../store/actions/dispatcherActions";
import {bindActionCreators} from "redux";
import WarningComponent from "../WarningComponent";
import DispatcherCallHeader from "../../containers/headers/DispatcherHeaders/DispatcherCallHeader";
import Footer from "../../containers/Footer";

class DispatcherCallComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            street: '',
            house: '',
            district: '',
            description: '',
            type: 'Antisocial behavior'

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
    newCall = (street, house, district, description, type) => event => {
        event.preventDefault();
        this.props.newCall(street, house, district, description, type);
    };
    render() {
        return (
            <div>
                <DispatcherCallHeader/>
                <Form>
                    <Form.Row>
                        <Col md={1}/>
                        <Form.Group as={Col}>
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" placeholder="Enter Street" onChange={this.handleChange('street')}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>House №</Form.Label>
                            <Form.Control type="text" placeholder="Enter House №" onChange={this.handleChange('house')}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>District Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter District name" onChange={this.handleChange('district')}/>
                        </Form.Group>
                        <Col md={1}/>
                    </Form.Row>
                    <Form.Row>
                        <Col md={1}/>
                        <Form.Group as={Col}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Status" onChange={this.handleChange('description')}/>
                        </Form.Group>
                        <Col md={1}/>
                    </Form.Row>
                    <Form.Row>
                        <Col md={1}/>
                        <Form.Group as={Col}>
                        <Form.Label>Type</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange('type')}>
                                <option>Antisocial behavior</option>
                                <option>Arson</option>
                                <option>Burgary</option>
                                <option>Childhood abuse</option>
                                <option>Domestic abuse</option>
                                <option>Fraud</option>
                                <option>Hate crime</option>
                                <option>Murder</option>
                                <option>Rape</option>
                                <option>Robbery</option>
                                <option>Terrorism</option>
                                <option>Violent crime</option>
                            </Form.Control>
                        </Form.Group>
                        <Col md={1}/>
                    </Form.Row>
                    <Form.Row>
                        <Col md={1}/>
                        <Button variant="outline-primary" type="submit" onClick={this.newCall(this.state.street, this.state.house, this.state.district, this.state.description, this.state.type)}>
                            Create call
                        </Button>
                    </Form.Row>
                </Form>
                <WarningComponent/>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        newCall: bindActionCreators(newCall, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DispatcherCallComponent);