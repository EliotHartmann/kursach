import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {newCall} from "../../store/actions/dispatcherActions";
import {bindActionCreators} from "redux";
import WarningComponent from "../WarningComponent";

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
                <Form>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Street" onChange={this.handleChange('street')}/>
                        <Form.Control type="text" placeholder="Enter House №" onChange={this.handleChange('house')}/>
                        <Form.Control type="text" placeholder="Enter District name" onChange={this.handleChange('district')}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Status" onChange={this.handleChange('description')}/>
                    </Form.Group>
                    <Form.Group>
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
                    <Button variant="primary" type="submit" onClick={this.newCall(this.state.street, this.state.house, this.state.district, this.state.description, this.state.type)}>
                        Submit
                    </Button>
                </Form>
                <WarningComponent/>
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