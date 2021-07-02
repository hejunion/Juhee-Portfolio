import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ju He </span>
            from <span className="purple"> Canada.</span>
            <br />Graduated from engineering, Growing as Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Walking in forest
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies, a few
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Success is best when it’s shared. !"{" ~ Howard Schultz, CEO of Starbucks "}
          </p>
          <footer className="blockquote-footer">Read by Ju He</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
