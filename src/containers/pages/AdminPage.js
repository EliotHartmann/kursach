import React, {Component} from "react";
import AdminComponent from "../../components/AdminComponents/AdminComponent";
import AdminHeader from "../headers/AdminHeader";

export default class AdminPage extends Component{
    render() {
        return(
            <div>
                <AdminHeader/>
                <AdminComponent/>
            </div>
        )
    }
}