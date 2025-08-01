import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import amazon from "../../Assests/amazon.png";
import geoSolutions from "../../Assests/geosolutionsindia.png";
import siemens from "../../Assests/Siemens.svg"
function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experiences</strong>
        </h1>
        <p style={{ color: "white" }}>
          Companies where I’ve gained valuable industry experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath= {amazon}
              jobTitle="SDE Intern"
              company="Amazon"
              duration="Jan 2025 – Jun 2025"
              description={`• Built diff checker to eliminate redundant seller verification (saved $60/sec).
• Solved cross-region validation bugs with region-aware DB logic.
• Replaced legacy service using AWS SNS + Lambda.
• Led full QA with dashboard reporting.`}
              certificateLink="https://drive.google.com/file/d/1MAoG58HIHgtwJGl8IqTExIeoYMsxTRt7/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath= {geoSolutions}
              jobTitle="SDE Intern"
              company="GeoSolutions India"
              duration="Sep 2024 – Dec 2024"
              description={`• Led ₹5+ Cr WebGIS project using Cesium, OpenLayers.
• Managed geospatial datasets (vector/raster) for 2D/3D viz.
• Delivered WMS/WFS/WCS powered defense-grade tools.`}
              certificateLink="https://drive.google.com/file/d/1bE_SypopM0PJibvrJsefJaZj5JHSsDOo/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath= {siemens}
              jobTitle="SDE Intern"
              company="Siemens"
              duration="Aug 2024 – Sep 2024"
              description={`• Built Data Cloud page and optimized Python pipelines.
• Automated emails, API integrations, and PowerBI workflows.
• 75% manual effort and 80% DB efficiency gains.`}
              certificateLink="https://drive.google.com/file/d/1N5Zl09TivMccwk3V8j7SEFEobFRMScll/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
