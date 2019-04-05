import React, {Component} from "react";
import UnauthorisedUserHeader from "../headers/UnauthorisedUserHeader";

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <UnauthorisedUserHeader/>
                <p>
                    ну это майн паге
                    тут будет какой то контент
                </p>
            </div>
        )

    }
}