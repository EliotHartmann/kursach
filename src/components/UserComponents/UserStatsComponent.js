import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadStats} from "../../store/actions/userActions";
import {Form, Table} from "react-bootstrap";

class UserStatsComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            district: 'The Bronx'
        };
        this.handleChange = this.handleChange.bind(this);
        this.renderDistrictStats = this.renderDistrictStats().bind(this);
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
            result.push(
                <tr>
                    <td>{stat.name}</td>
                    <td>{stat.area}</td>
                    <td>{stat.crimeNumber}</td>
                    <td>{stat.population}</td>
                </tr>
            )
        }
        return(result);
    }
    render() {
        return(
            <div>
                <Form inline>
                    <Form.Group>
                        <Form.Label>District</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange('district')}>
                            <option>The Bronx</option>
                            <option>Brooklyn</option>
                            <option>Manhattan</option>
                            <option>Queens</option>
                            <option>Staten Island</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Table>
                    <thead>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Crime number</th>
                    <th>Population</th>
                    </thead>
                </Table>

                {this.renderDistrictStats}
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