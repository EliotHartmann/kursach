import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadStats} from "../../store/actions/userActions";
import {Button, Form} from "react-bootstrap";
import {Col, Row, Table} from "reactstrap";
import UserHeader from "../../containers/headers/UserHeader";
import Footer from "../../containers/Footer";

class UserStatsComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            district: 'The Bronx'
        };
        this.handleChange = this.handleChange.bind(this);
        // this.renderDistrictStats = this.renderDistrictStats().bind(this);
    }

    componentDidMount() {
        this.props.loadStats();
    }

    handleChange = name => event => {
        event.preventDefault();
        this.setState({
            [name]: event.target.value,
        });
        console.log(this.state);
    };
    renderDistrictStats(){
        let result = [];
        for(let i = 0; i<this.props.stats.length; i++){
            let stat = this.props.stats[i];
            if(stat.name === this.state.district){
                result.push(
                    <tr>
                        <td>{stat.name}</td>
                        <td>{stat.area}</td>
                        <td>{stat.crimeNumber}</td>
                        <td>{stat.population}</td>
                    </tr>
                )
            }
        }
        return(result);
    }
    render() {
        return(
            <div>
                <UserHeader/>
                <Form>
                    <Form.Row>
                        <Col md={1}/>
                        <Form.Group as={Col}>
                            <Form.Label>District &nbsp;</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange('district')}>
                                <option>The Bronx</option>
                                <option>Brooklyn</option>
                                <option>Manhattan</option>
                                <option>Queens</option>
                                <option>Staten Island</option>
                            </Form.Control>
                        </Form.Group>
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
                                    <th>Area</th>
                                    <th>Crime number</th>
                                    <th>Population</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.renderDistrictStats()}
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={1}/>
                    </Row>
                </Table>

                <Footer/>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        stats: state.stats
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        loadStats: bindActionCreators(loadStats, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserStatsComponent);