import {Navbar, NavbarBrand, NavLink, NavItem, NavbarToggler, Collapse, Nav, Button} from "reactstrap";
import {MAIN_PAGE, REGISTER_PAGE} from "../../constants/paths";
import React, {Component} from "react";
import {login} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Image} from "react-bootstrap";

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
    login = () => {
        this.props.login();
    };

    render() {
        return(
            <div>
            <Navbar color="dark" expand="lg">
                <NavbarBrand href={MAIN_PAGE}>
                    <Image src={"../../static/img/NYPD_logo.png"} width={36} height={45} />
                    &nbsp;
                    New York Police Department
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button size={"sm"} color="success" onClick={ ()=>{this.login()}}>
                                Login
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button size={"sm"} color="primary" href={REGISTER_PAGE}>
                                Sign up
                            </Button>
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