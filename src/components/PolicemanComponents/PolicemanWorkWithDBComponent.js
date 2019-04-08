import React, {Component} from "react";
import {Table, Form, Col} from "react-bootstrap";
import Button from "reactstrap/es/Button";
import {DBSearch} from "../../store/actions/policemanActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import WarningComponent from "../WarningComponent";
import PolicemanDBHeader from "../../containers/headers/PolicemanHeaders/PolicemanDBHeader";
import {Row} from "reactstrap";
import Footer from "../../containers/Footer";

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

    DBSearch = (surname, name, p_number) => event => {
        this.props.DBSearch(surname, name, p_number);
    };

    renderResultTable(){
        let result = [];

        for(let i = 0; i<this.props.humans.length; i++){
            let human = this.props.humans[i];
            result.push(
                <tr>
                    <td>{human.name}</td>
                    <td>{human.surname}</td>
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
                <PolicemanDBHeader/>
                <Form>
                    <Form.Row>
                        <Col md={1}/>
                        <Form.Group as={Col}>
                             <Form.Label>Surname</Form.Label>
                             <Form.Control type="text" placeholder="Enter Surname" onChange={this.handleChange('surname')}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" onChange={this.handleChange('name')}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Col>
                                <Form.Label>Passport number</Form.Label>
                                <Form.Control type="text" placeholder="Enter passport number" onChange={this.handleChange('p_number')}/>
                            </Col>
                        </Form.Group>
                        <Col md={1}/>
                        </Form.Row>
                        <Form.Row>
                            <Col md={1}/>
                            <Col>
                                <Form.Group>
                                    <Button outline color="primary" size="sm" onClick={this.DBSearch(this.state.surname, this.state.name, this.state.p_number)}>
                                        Search
                                        &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                                    </Button>
                                </Form.Group>
                            </Col>
                            <Col md={1}/>
                        </Form.Row>
                </Form>
                <Table>
                    <Row>
                        <Col md={1}/>
                        <Col>
                            <Table>
                                <thead className={"text-danger"}>
                                <tr>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Passport number</th>
                                    <th>Location</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.renderResultTable()}
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={1}/>
                    </Row>
                </Table>
                <WarningComponent/>
                <Footer/>
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