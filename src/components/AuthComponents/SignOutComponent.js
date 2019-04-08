import React, {Component} from "react";
import {Button} from "reactstrap";
import {Image} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logout} from "../../store/actions/authActions";

class SignOutComponent extends Component{

    logout = () => event => {
        event.preventDefault();
        this.props.logout()
    };
    render() {
        return(
            <div>
                <Button color={"danger"} size={"sm"} onClick={this.logout()}>Logout
                    &nbsp;
                    <Image src={"../../static/svg/exit_to_app_24px.svg"} width={18}/>
                </Button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        login: state.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        logout: bindActionCreators(logout, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOutComponent);