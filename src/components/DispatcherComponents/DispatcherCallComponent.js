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
            description: '',
            type: 'ANTISOCIAL_BEHAVIOR'

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
    newCall = (street, house, description, type) => event => {
        event.preventDefault();
        this.props.newCall(street, house, description, type);
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
                                <option>ANTISOCIAL_BEHAVIOR</option>
                                <option>ARSON</option>
                                <option>BURGARY</option>
                                <option>CHILDHOOD_ABUSE</option>
                                <option>DOMESTIC_ABUSE</option>
                                <option>FRAUD</option>
                                <option>HATE_CRIME</option>
                                <option>MURDER</option>
                                <option>RAPE</option>
                                <option>ROBBERY</option>
                                <option>TERRORISM</option>
                                <option>VIOLENT_CRIME</option>
                            </Form.Control>
                        </Form.Group>
                        <Col md={1}/>
                    </Form.Row>
                    <Form.Row>
                        <Col md={1}/>
                        <Button variant="outline-primary" onClick={this.newCall(this.state.street, this.state.house, this.state.description, this.state.type)}>
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