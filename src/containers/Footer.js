import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

export default class Footer extends React.Component {
    render() {
        return (
            <footer
                className={"footer" + (this.props.default ? " footer-default" : "")}
            >
                <Container fluid={this.props.fluid}>
                    <Row>
                        <nav className="footer-nav">
                            <ul>
                                <li>
                                    <a href="https://github.com/EliotHartmann/kursach" target="_blank">Github</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="credits ml-auto">
                            <div className="copyright">
                                2019, made with <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> by Avdeenko & Shishkin
                            </div>
                        </div>
                    </Row>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    default: PropTypes.bool,
    fluid: PropTypes.bool
};

