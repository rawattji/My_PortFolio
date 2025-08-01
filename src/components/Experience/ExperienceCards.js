// components/ExperienceCards.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { BsFillPatchCheckFill } from "react-icons/bs";

function ExperienceCard(props) {
  const formattedDescription = props.description
    .split("\n")
    .map((line, index) => <li key={index}>{line.replace(/^\u2022\s*/, "")}</li>);

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={`${props.company} logo`}
        style={{ objectFit: "contain", padding: "20px", maxHeight: "160px" }}
      />
      <Card.Body>
        <Card.Title className="purple">{props.jobTitle}</Card.Title>
        <Card.Subtitle className="mb-2" style={{ color: "#ccc" }}>
          {props.company} &mdash; {props.duration}
        </Card.Subtitle>
        <Card.Text as="div">
          <ul style={{ paddingLeft: "1.2rem", textAlign: "left" }}>
            {formattedDescription}
          </ul>
        </Card.Text>
        {props.certificateLink && (
          <Button
            variant="primary"
            href={props.certificateLink}
            target="_blank"
            style={{ marginTop: "10px" }}
          >
            <BsFillPatchCheckFill /> &nbsp; Certificate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
