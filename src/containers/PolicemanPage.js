import React, {Component} from "react";
import AuthorisedUserHeader from "./AuthorisedUserHeader";
import PolicemanMainComponent from "../components/PolicemanComponents/PolicemanMainComponent";

export default class PolicemanPage extends Component{
    render() {
        return(
            <div>
                <AuthorisedUserHeader/>
                <PolicemanMainComponent/>
            </div>
        )
    }
}