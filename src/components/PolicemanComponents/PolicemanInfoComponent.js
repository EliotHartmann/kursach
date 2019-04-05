import React, {Component} from "react";
import {Col, Row, Table} from "reactstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadInfo} from "../../store/actions/policemanActions";
import WarningComponent from "../WarningComponent";
import PolicemanHeader from "../../containers/headers/PolicemanHeader";

class PolicemanInfoComponent extends Component{
    constructor(props){
        super(props);
        // this.loadInfo = this.loadInfo().bind(this);
    }

    createHistory = () =>{
        let result =[];
        for(let i = 0; i<this.props.info.historyOfWork.length; i++){
            let a = this.props.info.historyOfWork[i];
            result.push(
                <tr>
                    <td>{a.start}</td>
                    <td>{a.finish}</td>
                    <td>{a.policeStation.name}</td>
                </tr>
            )
        }
        return result;
    };

    loadInfo = () => {
        this.props.loadInfo();
        return(
            <div>
                <Table>
                <Row>
                <Col>
                    <Table>
                        <thead className="text-primary">
                        <tr>
                            <th>Rank</th>
                            <th>Salary</th>
                            <th>Police Station</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{this.props.info.rank}</td>
                            <td>{this.props.info.salary}</td>
                            <td>{this.props.info.p_station}</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Table >
                        <thead className="text-primary">
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{this.props.info.name}</td>
                            <td>{this.props.info.surname}</td>
                            <td>{this.props.info.status}</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Table >
                        <thead className="text-primary">
                        <tr>
                            <th>Jabber</th>
                            <th>E-mail</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{this.props.info.jabber}</td>
                            <td>{this.props.info.email}</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Table>
                        <thead className="text-primary">
                            <tr>
                                <th>Start</th>
                                <th>Finish</th>
                                <th>Police station №</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.createHistory()}
                        </tbody>
                    </Table>
                </Col>
                </Row>
                </Table>
            </div>
        )
    };


    render() {

        return(
            <div>
                <PolicemanHeader/>
                {this.loadInfo()}
                <WarningComponent/>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        info: state.info
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        loadInfo: bindActionCreators(loadInfo, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PolicemanInfoComponent);