import {Navbar, NavbarBrand, NavLink, NavItem, NavbarToggler, Collapse, Nav} from "reactstrap";
import {MAIN_PAGE, REGISTER_PAGE} from "../../constants/paths";
import React, {Component} from "react";
import {login} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class UnauthorisedUserHeader extends Component{
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
    login = () => event => {
        event.preventDefault();
        this.props.login();
    };

    render() {
        return(
            <div>
            <Navbar color="dark" expand="lg">
                <NavbarBrand href={MAIN_PAGE}>
                    New York Police Department
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick={this.login()}>
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={REGISTER_PAGE}>
                                Sign up
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        login : bindActionCreators(login, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(UnauthorisedUserHeader);