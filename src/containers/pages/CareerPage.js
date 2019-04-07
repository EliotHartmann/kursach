import React, {Component} from "react";
import UnauthorisedUserHeader from "../headers/UnauthorisedUserHeader";
import {Card, ListGroup} from "react-bootstrap";
import {Button, Col, Row} from "reactstrap";
import Footer from "../Footer";

export default class CareerPage extends Component {
    render() {
        return (
            <div>
                <UnauthorisedUserHeader/>
                <Row>
                    <Col md={1}/>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="../../static/img/career_card.png" />
                            <Card.Body>
                                <Card.Title as={"h2"}>Steps to become an officer</Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item>1. Meet the minimum qualifications for prospective officers</ListGroup.Item>
                                        <ListGroup.Item>2. Complete an online application.</ListGroup.Item>
                                        <ListGroup.Item>3. Pass the medical exam.</ListGroup.Item>
                                        <ListGroup.Item>4. Complete the personal character assessment.</ListGroup.Item>
                                        <ListGroup.Item>5. Complete oral and written psychological assessments.</ListGroup.Item>
                                        <ListGroup.Item>6. Pass the physical abilities test.</ListGroup.Item>
                                        <ListGroup.Item>7. Appear for a pre-hire interview.</ListGroup.Item>
                                        <ListGroup.Item>8. Complete police academy training.</ListGroup.Item>
                                        <ListGroup.Item>9. Begin working as an officer with the NYPD.</ListGroup.Item>
                                    </ListGroup>
                                    <Button outline color="success" href={"https://www.criminaljusticedegreeschools.com/program-listings/?program=&context=criminaljusticedegreeschoolscom&setting=all#context/api/listings/prefilter"}>Find schools</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title as={"h2"}> New York City Police Officer Job Description</Card.Title>
                                <Card.Text>
                                    The mission of the NYPD is to improve the quality of life in New York City. NYPD police officers work to maintain order and enforce local laws by preventing and investigating crimes and upholding the legal system. As the largest municipal police force in the US, the NYPD houses numerous specialty divisions, including bureaus dedicated to counterterrorism, housing, intelligence, transit and transportation, and detective and patrol services.1 Officers may also specialize in aviation, emergency services, highway patrol, or crime scene investigation. With so many departments and chances for specialization, there are always opportunities to pursue career interests and seek promotion within the NYPD.
                                </Card.Text>
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