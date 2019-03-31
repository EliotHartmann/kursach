import React, {Component} from "react";
import {Tabs, Tab} from "react-bootstrap";
import UserInfoComponent from "./UserInfoComponent";
import UserStatsComponent from "./UserStatsComponent";

export default class UserMainComponent extends Component{
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
                        <UserInfoComponent/>
                    </Tab>
                    <Tab eventKey="stats" title="Stats">
                        <UserStatsComponent/>
                    </Tab>
                </Tabs>

            </div>
        )
    }
}