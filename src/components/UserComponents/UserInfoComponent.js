import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadInfo} from "../../store/actions/userActions";
import UserInfoHeader from "../../containers/headers/UserHeaders/UserInfoHeader";
import {Col, Row} from "reactstrap";
import Footer from "../../containers/Footer";

class UserInfoComponent extends Component{

    loadInfo = () => {
        this.props.loadInfo();
        return(
            <div>
                <Table>
                    <Row>
                        <Col/>
                        <Col>
                            <Table>
                                <thead className={"text-danger"}>
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{this.props.userInfo.username}</td>
                                    <td>{this.props.userInfo.email}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col/>
                    </Row>
                </Table>
            </div>
        )
    };

    render() {

        return(
            <div>
                <UserInfoHeader/>
                {this.loadInfo()}
                <Footer/>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        userInfo: state.userInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        loadInfo: bindActionCreators(loadInfo, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoComponent);