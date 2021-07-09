import React from "react";
import css from "../styles/commands-grid.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommandBox from "./CommandBox";

function CommandsGrid() {
  return (
    <div className="grid-box w-100 py-1">
      <Container className="w-100">
        <Row xs={1} s={2} md={2} lg={3}>
          <Col>
            <CommandBox
              className=""
              command="/help"
              desc="This command will return all the available whatsapp commands to you"
              emoji="🦄"
            />
          </Col>
          <Col>
            <CommandBox
              className=""
              command="/help"
              desc="This command will return all the available whatsapp commands to you"
              emoji="🦄"
            />
          </Col>
          <Col>
            <CommandBox
              className=""
              command="/help"
              desc="This command will return all the available whatsapp commands to you"
              emoji="🦄"
            />
          </Col>
        </Row>
        <Row xs={1} s={2} md={2} lg={3}>
          <Col>
            <CommandBox
              className=""
              command="/help"
              desc="This command will return all the available whatsapp commands to you"
              emoji="🦄"
            />
          </Col>
          <Col>
            <CommandBox
              className=""
              command="/help"
              desc="This command will return all the available whatsapp commands to you"
              emoji="🦄"
            />
          </Col>
          <Col>
            <CommandBox
              className=""
              command="/help"
              desc="This command will return all the available whatsapp commands to you"
              emoji="🦄"
            />
          </Col>
        </Row>
        <Row xs={1} s={2} md={2} lg={3}>
          <Col>
            <CommandBox
              className=""
              command="/help"
              desc="This command will return all the available whatsapp commands to you"
              emoji="🦄"
            />
          </Col>
          <Col>
            <CommandBox
              className=""
              command="/help"
              desc="This command will return all the available whatsapp commands to you"
              emoji="🦄"
            />
          </Col>
          <Col>
            <CommandBox
              className=""
              command="/help"
              desc="This command will return all the available whatsapp commands to you"
              emoji="🦄"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CommandsGrid;
