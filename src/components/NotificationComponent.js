import React, {Component} from "react";
import {
    Badge,
    Button, ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Image} from "react-bootstrap";
import {deleteMessage} from "../store/actions/anotherActions";

class NotificationComponent extends Component{



    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    deleteMessage = (id) =>{
        this.props.deleteMessage(id);
    };

    renderMessages = () =>{
        let result = [];

        for(let i = 0; i<this.props.messages.length; i++) {
            let message = this.props.messages[i];
            result.push(
                <DropdownItem>
                    {message.data}
                    &nbsp;
                    <Button close onClick={ () => {this.deleteMessage(message.id)}}/>
                </DropdownItem>
            );

        }
        return result;
    };

    render() {
        return(
            <div>
                <ButtonDropdown color="primary" isOpen={this.state.dropdownOpen} toggle={this.toggle} size={"sm"}>
                    <DropdownToggle caret>
                        <Image src={"../static/svg/bell.svg"} width={18}/>
                        &nbsp;
                        <Badge>{this.props.messages.length}</Badge>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Notifications</DropdownItem>
                        {this.renderMessages()}
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        messages: state.messages
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        deleteMessage: bindActionCreators(deleteMessage, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationComponent);