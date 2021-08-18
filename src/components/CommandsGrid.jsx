import React from "react";
import css from "../styles/commands-grid.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommandBox from "./CommandBox";
import { commands } from "../assets/commands.js";

function CommandsGrid() {
  return (
    <div className="grid-box w-100 py-2">
      <Container className="w-100">
        <Row xs={1} s={2} md={2} lg={3}>
          {commands.map((cmd, key) => {
            return (
              <Col key={key}>
                <CommandBox
                  command={cmd.command}
                  desc={cmd.desc}
                  emoji={cmd.emoji}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CommandsGrid;
