import React, {Component} from "react";
import SignOutComponent from "../components/AuthComponents/SignOutComponent";
import {Form, Nav, Navbar} from "react-bootstrap";
import {MAIN_PAGE} from "../constants/paths";

export default class AuthorisedUserHeader extends Component{
    render() {
        return(
            <div>
                <Navbar>
                    <Navbar.Brand href={MAIN_PAGE}>
                        New York Police Department
                    </Navbar.Brand>
                    <SignOutComponent/>
                </Navbar>

            </div>
        )
    }
}