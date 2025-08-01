import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aman Singh Rawat </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            Recently Graduated from Maharja Agrasen insitute of technology (MAIT), Delhi, Looking for full time Opputunities
            <br />
            <br />
            Apart from building better <span className="purple">code</span>, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Read about Mythology
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aman Singh Rawat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;