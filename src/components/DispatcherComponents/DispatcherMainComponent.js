import React, {Component} from "react";
import {Tabs, Tab} from "react-bootstrap";
import DispatcherCallComponent from "./DispatcherCallComponent";
import PolicemanInfoComponent from "../PolicemanComponents/PolicemanInfoComponent";

export default class DispatcherMainComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            key: 'info',
        };
    }
    render() {
        return(
            <div>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab eventKey="info" title="Info">
                        <PolicemanInfoComponent/>
                    </Tab>
                    <Tab eventKey="new_call" title="New Call">
                        <DispatcherCallComponent/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}