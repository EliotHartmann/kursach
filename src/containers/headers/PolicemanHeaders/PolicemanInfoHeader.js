import React, {Component} from "react";
import SignOutComponent from "../../../components/AuthComponents/SignOutComponent";
import {MAIN_PAGE, POLICEMAN_CALLS, POLICEMAN_DATABASE, POLICEMAN_INFO} from "../../../constants/paths";
import {Navbar, NavbarBrand, NavLink, NavItem, NavbarToggler, Collapse, Nav, Button} from "reactstrap";
import NotificationComponent from "../../../components/NotificationComponent";

export default class PolicemanInfoHeader extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return(
            <div>
                <Navbar color="dark" expand="md">
                    <NavbarBrand href={MAIN_PAGE}>
                        <img src={"../../../static/img/NYPD_logo.png"} width={36} height={45} alt={"картинка не грузица..."}/>
                        &nbsp;
                        New York Police Department
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem active>
                                <NavLink href={POLICEMAN_INFO}>Info</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={POLICEMAN_CALLS}>Calls</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={POLICEMAN_DATABASE}>Database</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto">
                            <NavItem>
                                <NotificationComponent/>
                                &nbsp;
                            </NavItem>
                            <NavItem>
                                <SignOutComponent/>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}