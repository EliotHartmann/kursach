import React, {Component} from "react";
import UnauthorisedUserHeader from "./UnauthorisedUserHeader";
import Alert from "react-bootstrap/Alert";

export default class NotFoundPage extends Component{
    render() {
        return(
            <div>
                <UnauthorisedUserHeader/>
                <Alert variant={"info"}>
                    This page not found
                </Alert>
            </div>
        )
    }
}