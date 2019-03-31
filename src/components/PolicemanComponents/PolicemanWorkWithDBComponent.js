import React, {Component} from "react";
import {Table, Form, Button, Col, Row} from "react-bootstrap";
import {DBSearch, loadInfo} from "../../store/actions/policemanActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import WarningComponent from "../WarningComponent";

class PolicemanWorkWithDBComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: '',
            surname: '',
            p_number: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.renderResultTable = this.renderResultTable.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
        console.log(this.state);
    };

    DBSearch = (name, surname, p_number) => event => {
        this.props.DBSearch(name, surname, p_number);
    };

    renderResultTable(){
        let result = [];

        for(let i = 0; i<this.props.humans.length; i++){
            let human = this.props.humans[i];
            result.push(
                <tr>
                    <td>{i}</td>
                    <td>{human.name}</td>
                    <td>{human.p_number}</td>
                    <td>{human.location}</td>
                </tr>
            )
        }
        return result;
    }


    render() {
        return(
            <div>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Surmane</Form.Label>
                                <Form.Control type="text" placeholder="Enter Surname" onChange={this.handleChange('surname')}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={this.handleChange('name')}/>
                        </Col>
                        <Col>
                            <Form.Label>Passport number</Form.Label>
                            <Form.Control type="text" placeholder="Enter passport number" onChange={this.handleChange('p_number')}/>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" onClick={this.DBSearch(this.state.surname, this.state.name, this.state.p_number)}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name, Surname</th>
                            <th>Passport number</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderResultTable()}
                    </tbody>
                </Table>
                <WarningComponent/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        humans: state.humans
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        DBSearch: bindActionCreators(DBSearch, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PolicemanWorkWithDBComponent);