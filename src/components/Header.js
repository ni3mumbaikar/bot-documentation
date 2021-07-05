import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Logo from "../assets/Bot.png";
import css from "../styles/header.css";

export default function Header() {
  return (
    
      <Row>
        <Col className="left" xs={8}>
          Welcome To Ni3's Bot <br /> <a href="#">click here </a> to check
          WhatsApp bot status
        </Col>
        <Col>
          <img src={Logo} alt="bot_logo" />
        </Col>
      </Row>
    
  );
}
