import React, {Component} from "react";
import SignOutComponent from "../../components/AuthComponents/SignOutComponent";
import {MAIN_PAGE, POLICEMAN_CALLS, POLICEMAN_DATABASE, POLICEMAN_INFO} from "../../constants/paths";
import {Navbar, NavbarBrand, NavLink, NavItem, NavbarToggler, Collapse, Nav, Button} from "reactstrap";

export default class PolicemanHeader extends Component{
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
                        New York Police Department
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline color={"info"} href={POLICEMAN_INFO}>Info</Button>
                            </NavItem>
                            <NavItem>
                                <Button outline color={"info"} href={POLICEMAN_CALLS}>Calls</Button>
                            </NavItem>
                            <NavItem>
                                <Button outline color={"info"} href={POLICEMAN_DATABASE}>Database</Button>
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