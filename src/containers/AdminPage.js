import React, {Component} from "react";
import PolicemanMainComponent from "../components/PolicemanComponents/PolicemanMainComponent";
import AdminComponent from "../components/AdminComponents/AdminComponent";

export default class AdminPage extends Component{
    render() {
        return(
            <div>
                <AdminComponent/>
                <PolicemanMainComponent/>
            </div>
        )
    }
}