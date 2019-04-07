import React, {Component} from "react";
import SignOutComponent from "../../../components/AuthComponents/SignOutComponent";
import {
    DISPATCHER_INFO,
    DISPATCHER_NEW_CALL,
    MAIN_PAGE
} from "../../../constants/paths";
import {Navbar, NavbarBrand, NavLink, NavItem, NavbarToggler, Collapse, Nav} from "reactstrap";

export default class DispatcherCallHeader extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
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
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href={MAIN_PAGE}>
                        <img src={"../../../static/img/NYPD_logo.png"} width={36} height={45} alt={"картинка не грузица..."}/>
                        &nbsp;
                        New York Police Department
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem >
                                <NavLink href={DISPATCHER_INFO}>Info</NavLink>
                            </NavItem>
                            <NavItem active={true}>
                                <NavLink href={DISPATCHER_NEW_CALL}>Calls</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto">
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