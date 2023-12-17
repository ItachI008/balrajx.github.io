import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Balraj </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am currently pursuig B.E in Computer Science and Engineering at CMR Institute Of Technology.
            <br />
            I have completed Diploma in Computer Science and Engineering at Govt. Polytechnic Immadihalli 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manga/Webtoons
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never Stop Until You Are Finished"{" "}
          </p>
          <footer className="blockquote-footer">Balraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
