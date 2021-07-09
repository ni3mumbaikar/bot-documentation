import React from "react";
import Header from "./Header";
import css from "../styles/app.css";
import Footer from "./Footer";
import CommandsGrid from "./CommandsGrid";

export default function app() {
  return (
    <>
      <Header />
      <CommandsGrid />
      <Footer />
    </>
  );
}
