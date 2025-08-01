import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assests/AmanSinghRawatResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {
  Viewer,
  Worker,
  SpecialZoomLevel,
} from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
  <Worker workerUrl={`//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
    <div
      style={{
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "900px",
        margin: "auto",
        height: "90vh",
        overflow: "auto",
      }}
    >
      <Viewer fileUrl={pdf} defaultScale={SpecialZoomLevel.PageWidth} />
    </div>
  </Worker>
</Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
