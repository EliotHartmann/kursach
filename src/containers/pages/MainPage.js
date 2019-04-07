import React, {Component} from "react";
import UnauthorisedUserHeader from "../headers/UnauthorisedUserHeader";
import {Card} from "react-bootstrap";
import {Button, Col, Row} from "reactstrap";
import Footer from "../Footer";
import {CAREER_PAGE, NEWS_PAGE, PATH, REGISTER_PAGE} from "../../constants/paths";

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <UnauthorisedUserHeader/>
                <Row>
                    <Col md={1}/>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="../../static/img/join_us_v2_card.png" />
                            <Card.Body>
                                <Card.Title as={"h2"} className="text-primary">Join Us</Card.Title>
                                <Card.Text>
                                    Learn how to become a part of our team right now!
                                </Card.Text>
                                <Button outline color="primary" href={PATH+CAREER_PAGE}>Learn More!</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="../../static/img/news_card.jpg" />
                            <Card.Body>
                                <Card.Title as={"h2"} className="text-primary">News</Card.Title>
                                <Card.Text>
                                    Check the latest news
                                </Card.Text>
                                <Button outline color="primary" href={PATH+NEWS_PAGE}>Check!</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="../../static/img/register_card.png" />
                            <Card.Body>
                                <Card.Title as={"h2"} className="text-primary">Sign Up</Card.Title>
                                <Card.Text>
                                    Sign up now for free to check live statistics
                                </Card.Text>
                                <Button outline color="primary" href={PATH+REGISTER_PAGE}>Sign up!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={1}/>
                </Row>
                <Footer/>
            </div>
        )

    }
}