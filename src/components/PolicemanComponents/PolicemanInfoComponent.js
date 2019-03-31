import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadInfo} from "../../store/actions/policemanActions";
import WarningComponent from "../WarningComponent";

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
                <tr>
                    <td width={"50%"}>
                        <Table borderer stripped>
                            <tr><b>Rank</b></tr>
                            <br/>
                            <tr>{this.props.info.rank}</tr>
                            <br/>
                            <tr><b>Salary</b></tr>
                            <br/>
                            <tr>{this.props.info.salary}</tr>
                            <br/>
                            <tr><b>Name</b></tr>
                            <br/>
                            <tr>{this.props.info.name}</tr>
                            <br/>
                            <tr><b>Surname</b></tr>
                            <br/>
                            <tr>{this.props.info.surname}</tr>
                            <br/>
                            <tr><b>Status</b></tr>
                            <br/>
                            <tr>{this.props.info.status}</tr>
                            <br/>
                            <tr><b>Jabber</b></tr>
                            <br/>
                            <tr>{this.props.info.jabber}</tr>
                            <br/>
                            <tr><b>Email</b></tr>
                            <br/>
                            <tr>{this.props.info.email}</tr>
                            <br/>
                            <tr><b>Police Station</b></tr>
                            <br/>
                            <tr>{this.props.info.p_station}</tr>
                            <br/>
                        </Table>
                    </td>
                    <td>
                        <Table>
                            <thead>
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
                    </td>
                </tr>
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

export default connect(mapStateToProps, mapDispatchToProps)(PolicemanInfoComponent);