import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assests/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            My spirit animal is probably a semicolon; I can be a bit of a pain, but I'm essential.😉
                            <br />

                            <b>Aman Singh Rawat</b>: Software Dev Rock Star 😎(no, seriously)<br />

                            🥲🕶🤏

                            <br />
                            <br /><i><b className="purple">C++</b></i> my chai, code my life. I'm Aman, a software developer who builds things that make people say "wow" (or at least, "that button works!").

                            <br />
                            <br />
                            My playground? Languages from <i><b className="purple">C++</b></i> to <i> <b className="purple">JAVA</b></i> to <i> <b className="purple">JavaScript & TypeScript</b></i>, frameworks like <i><b className="purple">React</b> to <b className="purple">Redux</b> to <b className="purple">WebGIS</b></i> - I speak them all fluently.
                            <br />What next?<b className="purple"> Databases? </b> Done.<br /> Version control with Git? Nailed it.
                            <br />Backend?<b className="purple"> Node.js </b>
                            <br />
                            Basically, I'm your one-stop shop for turning ideas into digital awesomeness.✨


                            Yes, I can write code that would make a <i><b className="purple">Computer Dance</b></i> , But I also understand the real world. I've even collaborated with clients to launch <i><b className="purple">Live Websites</b></i> - no pressure, right?

                            <br />
                            <br />
                            Looking for someone who can translate your vision into reality?
                            Look no further. I'm a<i><b className="purple"> team player, a problem-solver </b></i> and most importantly, I bring a  <i><b className="purple">positive attitude</b></i> (and maybe a few bad coding puns) to every project.


                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h2>Let's connect! I'm always up for a challenge (or a good cup of chai).</h2>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">


                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/amanrawatmait/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="mailto:amanrawatmait@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineMail />
                                </a>
                            </li>


                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;