import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/Bot.png";
import { Search } from "@material-ui/icons";
import css from "../styles/header.css";
// import botstate from "../../sh_scripts/bot_status";

export default function Header() {
  return (
    <div className="w-100 justify-content-center">
      <Row className="bot-row">
        <Col className="intro-text" xs={8}>
          Welcome To Ni3's Bot <br /> <a href="#">click here </a> to check
          WhatsApp bot status
        </Col>
        <Col className="rev" xs={4}>
          <img src={Logo} className="img-fluid" alt="bot_logo" />
        </Col>
      </Row>

      <div className="searchbar justify-content-center">
        <div className="wrapper shadow justify-content-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search from the list of available commands"
          />
          {/* <Search className="search-icon" /> */}
          <Search className="search-icon" />
        </div>
      </div>
    </div>
  );
}
