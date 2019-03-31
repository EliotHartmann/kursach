import React, {Component} from "react";
import {Table, Button} from "react-bootstrap";
import {loadCalls, callSubmit} from "../../store/actions/policemanActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import WarningComponent from "../WarningComponent";

class PolicemanCallsComponent extends Component{

    constructor(props){
        super(props);
        this.callTableRender = this.callTableRender.bind(this);
        // this.loadCalls = this.loadCalls().bind(this);
    }

    loadCalls = () =>{
        this.props.loadCalls();
        return(
            <div></div>
        );
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
                        variant={"outline-success"}
                        disabled={call.status}
                        onClick={this.props.callSubmit(call.description, call.time, call.status)}>
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
                {this.loadCalls()}
                <Table>
                    <thead>
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
                <WarningComponent/>
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