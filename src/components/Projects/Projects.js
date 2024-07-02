import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chromeExtension from '../../Assests/chromeExtension.png';
import rushFashion from '../../Assests/rushFashion.png';
import scrollDay from '../../Assests/scrollDay.png';

import Particle from '../Particle';


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chromeExtension}
              isBlog={false}
              title="Activity Tracker"
              description="This Chrome extension tracks your website usage in real-time, exposing hidden time sinks. Restrict distracting sites, 
              set usage limits, and reclaim your productivity. 14 days of development, countless hours - all to empower yours
              React & RubyonRails power this Chrome extension."
              ghLink="https://github.com/rawattji/"
              demoLink="https://drive.google.com/file/d/1dCANm1o_LkXPsLCX89FPD3Z6AS1x_EZo/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rushFashion}
              isBlog={false}
              title="E-Commerce Website"
              description="Created SRS, Developed a Live website for the client, investing 50+ hours while guiding and leading a team under the supervision of MHTECHIN. The website's core was built on WordPress, complemented by HTML, CSS, JavaScript, and PHP components."
              demoLink="https://RushFashions.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrollDay}
              isBlog={false}
              title="Scroll Day&night"
              description="Created & Developed a website using Elementor with <HTML> tags, integrated JavaScript, and custom CSS. Implemented animated scroll effects transitioning from day to night, simulating sunrise and sunset."
              ghLink="https://github.com/rawattji/Scroll-Day"
              demoLink="https://rawattji.github.io/Scroll-Day/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;