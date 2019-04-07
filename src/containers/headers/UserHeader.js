import React, {Component} from "react";
import SignOutComponent from "../../components/AuthComponents/SignOutComponent";
import {
    MAIN_PAGE,
    USER_INFO,
    USER_STATS
} from "../../constants/paths";
import {Navbar, NavbarBrand, NavLink, NavItem, NavbarToggler, Collapse, Nav} from "reactstrap";

export default class UserHeader extends Component{
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
                        <img src={"../../static/img/NYPD_logo.png"} width={36} height={45} alt={"картинка не грузица..."}/>
                        &nbsp;
                        New York Police Department
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
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