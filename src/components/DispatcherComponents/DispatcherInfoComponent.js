import React, {Component} from "react";
import {Col, Row, Table} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadInfo} from "../../store/actions/policemanActions";
import WarningComponent from "../WarningComponent";
import AdminHeader from "../../containers/headers/AdminHeader";
import DispatcherHeader from "../../containers/headers/DispatcherHeader";

class DispatcherInfoComponent extends Component{
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
                <DispatcherHeader/>
                <Table>
                    <Row>
                        <Col>
                            <Table>
                                <thead>
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
                            <Table>
                                <thead>
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
                            <Table>
                                <thead>
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
                            <Table bordered stripped>
                                <thead>
                                <tr>
                                    <td>Start</td>
                                    <td>Finish</td>
                                    <td>Police station №</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(DispatcherInfoComponent);