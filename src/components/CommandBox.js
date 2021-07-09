import React from "react";
import css from "../styles/command-box.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CommandBox(props) {
  return (
    <div className="cmdbox">
      <Card className="mx-3 my-1 shadow-sm" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="command">{props.command}</Card.Title>
          <Card.Text className="desc py-4">
            {props.desc} {props.emoji}
          </Card.Text>
          <Button variant="primary">Learn More </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CommandBox;
