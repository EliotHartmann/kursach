import React, {Component} from "react";
import DispatcherMainComponent from "../components/DispatcherComponents/DispatcherMainComponent";
import AuthorisedUserHeader from "./AuthorisedUserHeader";

export default class DispatcherPage extends Component{
    render() {
        return(
            <div>
                <AuthorisedUserHeader/>
                <DispatcherMainComponent/>
            </div>
        )
    }

}