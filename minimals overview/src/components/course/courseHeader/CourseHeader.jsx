import React from "react";
import "./course-header.css";

import Stack from "react-bootstrap/Stack";

// Grid Import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const headerData = {
  header: {
    titles: {
      heading: "Hi, Frankie 👋",
      subheading: "Let's learn something new today!",
    },
    cards: [
      {
        cardNumber: 6,
        cardText: "Courses in progress",
        cardImage: "courses-progress.svg",
      },
      {
        cardNumber: 3,
        cardText: "Courses completed",
        cardImage: "courses-completed.svg",
      },
      {
        cardNumber: 2,
        cardText: "certificates",
        cardImage: "courses-certificates.svg",
      },
    ],
  },
};

function CourseHeader() {

  const colorClasses = ["color-orange", "color-green", "color-purple",];

  return (
    <div>
      <Stack gap={2}>
        <div className="header-content">
          <h4>{headerData.header.titles.heading}</h4>
          <p>{headerData.header.titles.subheading}</p>
        </div>
      </Stack>

      <Container>
        <Row>
          {headerData.header.cards.map((item, i) => (
            <Col key={i}>
              <div className="cardss">
                <div className="main-cards">
                  <div className="card1">
                    <div className="subcard1">
                      <div className="subcard1-number">{item.cardNumber}</div>
                      <div className="subcard1-text">{item.cardText}</div>
                    </div>
                    <span className="subcard2">
                      <img src={`../src/assets/images/Course-Images/course-header/${item.cardImage}`} />
                    </span>
                    <div
                      className={`subcard3 ${colorClasses[i % colorClasses.length]}`}
                    ></div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CourseHeader;
