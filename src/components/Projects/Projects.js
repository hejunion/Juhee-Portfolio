import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import JuheePortfolio from "../../Assets/Projects/Juhee-Portfolio.PNG";
import DemoSquareUpAPI from "../../Assets/Projects/DemoSquareUpAPI.PNG";
import FoodFusionScreen from "../../Assets/Projects/Food-Fusion.png";


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
              imgPath={FoodFusionScreen}
              isBlog={false}
              title="Food Fusion"
              description="A sharing site for Food Lovers"
              link="http://foodfusion2022.herokuapp.com"
            />
        </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={DemoSquareUpAPI}
              isBlog={false}
              title="The Square Unboxed Hackathon 2021"
              description="A Demo Project MochaUp Online Shop to integrate with Square Payment API"
              link="https://square-stonebraker-e885b7.netlify.app/"
            />
        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JuheePortfolio}
              isBlog={false}
              title="Juhee Portfolio"
              description="Project for My Online Portfolio"
              link="https://juhee.dataquorums.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/hejunion/Chatify"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
