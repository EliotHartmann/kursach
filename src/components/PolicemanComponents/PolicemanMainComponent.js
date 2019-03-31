import React, {Component} from "react";
import {Tabs, Tab} from "react-bootstrap";
import PolicemanInfoComponent from "./PolicemanInfoComponent";
import PolicemanWorkWithDBComponent from "./PolicemanWorkWithDBComponent";
import PolicemanCallsComponent from "./PolicemanCallsComponent";

export default class PolicemanMainComponent extends Component{
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
                    <Tab eventKey="database" title="Database">
                        <PolicemanWorkWithDBComponent/>
                    </Tab>
                    <Tab eventKey="calls" title="Calls" >
                        <PolicemanCallsComponent/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}