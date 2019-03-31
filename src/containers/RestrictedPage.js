import React, {Component} from "react";
import UnauthorisedUserHeader from "./UnauthorisedUserHeader";
import Alert from "react-bootstrap/Alert";

export default class RestrictedPage extends Component{
    render() {
        return(
            <div>
                <UnauthorisedUserHeader/>
                <Alert variant={"danger"}>
                    You have no access to this page
                </Alert>
            </div>
        )
    }
}