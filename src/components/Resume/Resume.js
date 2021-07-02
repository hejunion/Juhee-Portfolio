import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Ju_He.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks-no";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Working</h3>
            <Resumecontent
              title="Application Developer"
              date="May 2020 - "
              content={[
                "Working as software engineer/contract, focused on back-end built with Spring Boot API with backend data repository. Integration data repositories with Magento2 based products, product categories, rules.",
                " Supporting Ecommerce/Cloud App. Build the OAuth flow with cloud deployment;developing/Integration SSO/OAuth Flow, provisioning with multiple social login. Function deployment with Web Front (UX framework/React/ Typescript) integration with back end shop site Magento 2.",
              ]}
            />
            <h3 className="resume-title">Experiences</h3>
            <Resumecontent
              title="Senior Software Engineer [Vehicle ECommerce Portal, Nov 2017 – Feb 2020]"
              content={[
                "Working on online payment project for car lease turn-in, pricing, purchasing,synchronization and searching , integration with pricing system with price, tax rules,billing data.",
                "Developing spring boot based RestAPI with swagger Open API integration, Swagger UI test integration, AWS API Gateway building for mobile service requests.",
              ]}
            />
            <Resumecontent
              title="Software Application Developer [Payment Project for BMO, Dec 2015 – Nov 2017]"
              content={[
                "As a Java software consultant, working on online business payment projects, which provide pay service to business users.",
                "SOA/Web Services programming on message stacks, request message composition and response message consumption. Message collaboration and chronological processing;Payment Account classification;",
              ]}
            />
            <Resumecontent
              title="Software Application Developer [Pages Jaunes, Aug 2014 – Oct 2015]"
              content={[
                "Working on Merchant Content Management, interfacing with Order management,Account management through ESB/Tibco Business Work.",
                "Create and optimized reliable interaction layer with outside repositories provider in resolution of retries, delay, call-back, state management.Implemented task process flow for optimizing and improve data integration interface with external data repositories.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education and Certificates</h3>
            <Resumecontent
              title="University of Albert "
              date="2020 - 2021"
              content={[`Software Product Management Specialization`]}
            />
            <Resumecontent
              title="SouthEat University"
              date="2002"
              content={["School of Information Science and Engineering"]}
            />
            <Resumecontent
              title="Oracle Certified Associate"
              date=""
              content={[" Java SE 8 Programmer "]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
