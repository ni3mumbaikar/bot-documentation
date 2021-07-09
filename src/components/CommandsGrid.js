import React from "react";
import css from "../styles/commands-grid.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CommandsGrid() {
  return (
    <div className="grid-box w-100">
      <Container>
        <Row xs={1} md={2} lg={3}>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default CommandsGrid;
