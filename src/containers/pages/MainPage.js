import React, {Component} from "react";
import UnauthorisedUserHeader from "../headers/UnauthorisedUserHeader";
import {Button, Card} from "react-bootstrap";

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <UnauthorisedUserHeader/>
                контента нет но вы держитесь
            </div>
        )

    }
}