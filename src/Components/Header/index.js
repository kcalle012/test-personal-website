import React from "react";
import "./index.scss"

const Header = () => {
  return (
    <header>
      <a className="logo" href="/">Your Name</a>

      <div className="links">
        <a href="#home" className="link">Home</a>
        <a href="#about" className="link">About</a>
        <a href="#projects" className="link">Projects</a>
        <a href="#socials" className="link">Socials</a>
        <a href="#resume" className="link">Resume</a>
      </div>
    </header>
  );
};

export default Header;
