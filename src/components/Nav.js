import React, { useState } from "react";
import styles from "./Nav.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import HamburgerNav from "./HamburgerNav";
import Hamburger from "./Hamburger";
import Hercules from "../img/HerculesHosingLogo1.png";
import { Button, Navbar, Dropdown } from "react-bootstrap";

const Nav = (props) => {
  // Change nav on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Navbar
      fixed="top"
      className={`${styles.nav} ${styles.navSmaller} ${styles.navIphone}
      ${color ? styles.navColor : styles.nav}`}
    >
      <h4 className={styles.nameNav}>
        <Link to={"/home"}>
          <img src={Hercules} alt="HH" className={styles.hercPic} />
        </Link>
      </h4>
      <Hamburger />
    </Navbar>
  );
};

export default Nav;
