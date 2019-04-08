import React, {Component} from "react";
import SignOutComponent from "../../components/AuthComponents/SignOutComponent";
import {MAIN_PAGE} from "../../constants/paths";
import {Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse, Nav} from "reactstrap";
import NotificationComponent from "../../components/NotificationComponent";

export default class AdminHeader extends Component{
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
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href={MAIN_PAGE}>
                        <img src={"../../static/img/NYPD_logo.png"} width={36} height={45} alt={"картинка не грузица..."}/>
                        &nbsp;
                        New York Police Department
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
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