import React, {Component} from "react";
import {Col, Row, Table} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadInfo} from "../../store/actions/policemanActions";
import WarningComponent from "../WarningComponent";
import Footer from "../../containers/Footer";
import PolicemanInfoHeader from "../../containers/headers/PolicemanHeaders/PolicemanInfoHeader";

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
                    <td>{a.policeStation.id}</td>
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
                        <Col md={1}/>
                        <Col>
                            <h3>Info</h3>
                            <Table>
                                <thead >
                                <tr>
                                    <th className={"text-danger"}>ID</th>
                                    <th className={"text-secondary"}>{this.props.info.id}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Rank</th>
                                    <th className={"text-secondary"}>{this.props.info.rank}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Salary</th>
                                    <th className={"text-secondary"}>{this.props.info.salary}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Premium</th>
                                    <th className={"text-secondary"}>{this.props.info.premium}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Police Station</th>
                                    <th className={"text-secondary"}>{this.props.info.p_station}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Name</th>
                                    <th className={"text-secondary"}>{this.props.info.name}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Surname</th>
                                    <th className={"text-secondary"}>{this.props.info.surname}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Status</th>
                                    <th className={"text-secondary"}>{this.props.info.status}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Jabber</th>
                                    <th className={"text-secondary"}>{this.props.info.jabber}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Email</th>
                                    <th className={"text-secondary"}>{this.props.info.email}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Shift</th>
                                    <th className={"text-secondary"}>{this.props.info.shift}</th>
                                </tr>
                                <tr>
                                    <th className={"text-danger"}>Officer Status</th>
                                    <th className={"text-secondary"}>{this.props.info.officerStatus}</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <h3>History of work</h3>
                            <Table>
                                <thead className={"text-danger"}>
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
                        <Col md={1}/>
                    </Row>
                </Table>
            </div>
        )
    };


    render() {

        return(
            <div>
                <PolicemanInfoHeader/>
                {this.loadInfo()}
                <WarningComponent/>
                <Footer/>
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