import {Navbar, Nav} from "react-bootstrap";
import {LOGIN_PAGE, MAIN_PAGE, REGISTER_PAGE} from "../constants/paths";
import React, {Component} from "react";

export default class UnauthorisedUserHeader extends Component{
    render() {
        return(
            <div>
            <Navbar>
                <Navbar.Brand href={MAIN_PAGE}>
                    New York Police Department
                </Navbar.Brand>
                <Nav.Link href={LOGIN_PAGE}>
                    Login
                </Nav.Link>
                <Nav.Link href={REGISTER_PAGE}>
                    Sign up
                </Nav.Link>
            </Navbar>
            </div>
        )
    }
}