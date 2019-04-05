import React, {Component} from "react";
import {Table, Form, Col, Button} from "react-bootstrap";
import {DBSearch} from "../../store/actions/policemanActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import WarningComponent from "../WarningComponent";
import PolicemanHeader from "../../containers/headers/PolicemanHeader";
// import Button from "../../paper-dashboard-react-master/src/components/CustomButton/CustomButton"

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
                <PolicemanHeader/>
                <Form>
                    <Form.Row>
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
                        </Form.Row>
                            <Form.Group>
                                <Button color="primary" round={true} onClick={this.DBSearch(this.state.surname, this.state.name, this.state.p_number)}>
                                    Search
                                </Button>
                            </Form.Group>
                </Form>
                <Table>
                    <thead className={"text-primary"}>
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