import React, {Component} from "react";
import UnauthorisedUserHeader from "../headers/UnauthorisedUserHeader";
import {Card, ListGroup} from "react-bootstrap";
import {Button, Col, Row} from "reactstrap";
import Footer from "../Footer";
import {CAREER_PAGE, NEWS_PAGE, PATH, REGISTER_PAGE} from "../../constants/paths";

export default class NewsPage extends Component {
    render() {
        return (
            <div>
                <UnauthorisedUserHeader/>
                <Row>
                    <Col md={1}/>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="../../static/img/news_1.jpg"  />
                            <Card.Body>
                                <Card.Title as={"h2"}>NYPD release safety tips for motorcycle riders</Card.Title>
                                <Card.Text>
                                    The tips include:
                                </Card.Text>
                                <ListGroup>
                                    <ListGroup.Item>1. Always wear a helmet whenever riding, even if it is for a short distance.</ListGroup.Item>
                                    <ListGroup.Item>2. Watch your speed at all times.</ListGroup.Item>
                                    <ListGroup.Item>3. Always use turn signals.</ListGroup.Item>
                                    <ListGroup.Item>4. Always keep a distance between oneself and the vehicles in front or beside you.</ListGroup.Item>
                                    <ListGroup.Item>5. When breaking, make sure to use both brakes.</ListGroup.Item>
                                    <ListGroup.Item>6.  Avoid riding in what could be blind spots for other vehicles.</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem'}}>
                            <Card.Img variant="top" src="../../static/img/news_2.jpg"  />
                            <Card.Body>
                                <Card.Title as={"h2"}>NYPD has all the latest crime-fighting tools: body cameras, algorithms, even drones.</Card.Title>
                                <Card.Text>
                                    <p>But it is now widely deploying a far simpler technology, a 5½-foot (1½-meter) piece of rope, to help officers deal with one of the diciest kinds of calls.</p>
                                    <p>The department this year started training all 35,000 officers in a technique of using a length of rope to secure the door of a home where a distressed person is threatening harm, temporarily trapping them until backup arrives. The rope makes it virtually impossible for the person inside to burst through the door and cause harm.</p>
                                    <p>The idea, commanders said, is to avoid having gun-toting officers, perhaps only lightly trained in dealing with such situations, in the same adrenaline-charged space as someone acting irrationally, waving a kitchen knife or a pistol.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={1}/>
                </Row>
                <Row>
                    <Col md={1}/>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="../../static/img/news_3.png"  />
                            <Card.Body>
                                <Card.Title as={"h2"}>Pair Swiped $400 From Church Donation Box: NYPD</Card.Title>
                                <Card.Text>
                                    <p>A man and a woman broke into a Roman Catholic church in Queens and stole about $400 from the donation boxes, police said. </p>
                                    <p>The man broke the front door of St. Helens Roman Catholic Church on 83rd Street in Howard Beach early Thursday and the woman went inside and took the money, police said. </p>
                                    <p>The woman is in her 40s and the man is in his 30s, police said. </p>
                                    <p><i>Anyone with information is asked to call NYPD's Crime Stoppers Hotline at 1-800-577-TIPS (8477).</i></p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="../../static/img/news_4.jpg"/>
                            <Card.Body>
                                <Card.Title as={"h2"}>NYPD tells 350 people they don’t have the right to know if they’re in a gang database, Legal Aid says</Card.Title>
                                <Card.Text>
                                    <p>New York City’s police department has told hundreds of people that they have no right to know if the NYPD thinks they’re in a gang, the Daily News has learned.</p>
                                    <p>About 350 people have filed Freedom of Information Law requests asking the NYPD if they’re listed in its controversial “gang database.” In each case, the department sent a “generic response” telling them they have no business knowing, the Legal Aid Society told The News.</p>
                                    <p>All of the requests, made through an automated service on Legal Aid’s website, also asked for the NYPD’s records on each person who filed a request, and how those records are shared, stored, maintained or destroyed. Legal Aid made the service available about a year ago.</p>
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