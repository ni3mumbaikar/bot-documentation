import React from "react";
import css from "../styles/command-box.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CommandBox({ command, desc, emoji }) {
  return (
    <div className="cmdbox">
      <Card className="mx-3 my-1 shadow-sm" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="command">{command}</Card.Title>
          <Card.Text className="desc py-4">
            {desc} {emoji}
          </Card.Text>
          <Button variant="primary">Learn More </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CommandBox;
