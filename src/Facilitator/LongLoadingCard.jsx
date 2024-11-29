import React from "react";
import { Card, Placeholder, Row, Col } from "react-bootstrap";

function LongLoadingCourseCard() {
  return (
    <Card className="facilitator-course-card" style={{ width: "100%", maxWidth: "100%", padding: "0" }}>
      <Row className="g-0 align-items-center" style={{ padding: "0" }}>
        <Col md={4}>
          <Placeholder as="div" animation="wave">
            <div className="img-fluid rounded-start w-100" style={{ height: "150px", backgroundColor: "#e0e0e0" }} />
          </Placeholder>
        </Col>
        <Col md={8}>
          <Card.Body className="d-flex flex-column text-start">
            <div className="flex-grow-1">
              <Placeholder as={Card.Title} animation="wave">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="wave">
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="wave">
                <Placeholder xs={4} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="wave">
                <Placeholder xs={5} />
              </Placeholder>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default LongLoadingCourseCard;
