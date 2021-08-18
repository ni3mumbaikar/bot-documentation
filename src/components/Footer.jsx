import css from "../styles/footer.css";
import React from "react";
import LinkedIn from "../assets/linkedin.png";
import Github from "../assets/github.png";

function Footer() {
  return (
    <div className="social w-100 py-4">
      <a href="https://github.com/ni3mumbaikar" target="_blank">
        <img src={Github} alt="github_logo" />
      </a>

      <a href="https://linkedin.com/in/ni3mumbaikar" target="_blank">
        <img src={LinkedIn} alt="linked_logo" />
      </a>
    </div>
  );
}

export default Footer;
