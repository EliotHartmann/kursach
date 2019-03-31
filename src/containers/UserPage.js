import React, {Component} from "react";
import UserMainComponent from "../components/UserComponents/UserMainComponent";
import AuthorisedUserHeader from "./AuthorisedUserHeader";

export default class UserPage extends Component{
    render() {
        return(
            <div>
                <AuthorisedUserHeader/>
                <UserMainComponent/>
            </div>
        )
    }
}