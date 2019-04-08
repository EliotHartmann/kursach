import React, {Component} from "react";
import {Table, Button, Row, Col} from "reactstrap";
import {loadCalls, callSubmit} from "../../store/actions/policemanActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import WarningComponent from "../WarningComponent";
import PolicemanCallsHeader from "../../containers/headers/PolicemanHeaders/PolicemanCallsHeader";
import Footer from "../../containers/Footer";

class PolicemanCallsComponent extends Component{

    constructor(props){
        super(props);
        this.callTableRender = this.callTableRender.bind(this);
    }

    loadCalls = () =>{
        this.props.loadCalls();
    };

    callTableRender() {
        let table = [];

        for(let i = 0; i<this.props.calls.length; i++) {

            let call = this.props.calls[i];
            table.push(
                <tr>
                    <td>{call.description}</td>
                    <td>{call.time}</td>
                    <td><Button
                        color={"outline-success"}
                        size={"sm"}
                        disabled={call.status}
                        onClick={ ()=>{this.props.callSubmit(call.description, call.time, call.status)}}>
                        Finish call
                    </Button></td>
                </tr>
            );

        }
        return table;

    }

    render() {
        return(
            <div>
                <PolicemanCallsHeader/>
                {this.loadCalls()}
                <Table>
                    <Row>
                        <Col md={1}/>
                        <Col>
                            <Table>
                                <thead className={"text-dark"}>
                                <tr>
                                    <th>Call Description</th>
                                    <th>Call time</th>
                                    <th>Call status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.callTableRender()}
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

const mapStateToProps = (state) =>{
    return{
        calls: state.calls
    }
};

const mapDispatchToProps = dispatch => ({
        loadCalls: bindActionCreators(loadCalls, dispatch),
        callSubmit: bindActionCreators(callSubmit, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(PolicemanCallsComponent);