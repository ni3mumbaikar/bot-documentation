import css from "../styles/footer.css";
import React from "react";
import LinkedIn from "../assets/linkedin.png";
import Github from "../assets/github.png";

function Footer() {
  return (
    <div className="social w-100">
      <img src={Github} alt="github_logo" />
      <img src={LinkedIn} alt="linked_logo" />
    </div>
  );
}

export default Footer;
