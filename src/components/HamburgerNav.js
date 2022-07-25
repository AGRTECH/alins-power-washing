import React, { useState } from "react";
import styles from "./Nav.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Hercules from "../img/HerculesHosingLogo1.png";
import styled from "styled-components";
import { Button, Navbar, Dropdown } from "react-bootstrap";

const Ul = styled.ul`
  @media (max-width: 1090px) {
    flex-direction: column;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 100px;

    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
`;

const HamburgerNav = ({ open }) => {
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
      <div></div>
      <Ul
        // style={{
        //   transform: open ? "translateX(0)" : "translateX(100%)",
        // }}
        className={`${styles.listFlex}`}
        open={open}
      >
        <li>
          <Link to={"/home"}>Home</Link>
        </li>

        <Dropdown>
          <Dropdown.Toggle variant="none" className={styles.dropdown}>
            Services
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link className={styles.noStyle} to={"/concrete"}>
                Concrete Cleaning
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className={styles.noStyle} to={"/housewash"}>
                House Washing{" "}
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className={styles.noStyle} to={"/patio"}>
                Patio & Deck Cleaning
              </Link>{" "}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* <li>
          <Link to={"/about"}>About</Link>
        </li> */}
        <li>
          <Link to={"/gallery"}>Gallery</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Button className={styles.phoneButton}>
            {" "}
            <a href="tel:(586) 696-4040">(586) 696-4040</a>{" "}
          </Button>{" "}
        </li>
        <li>
          <Link to={"/contact"}>
            <Button className={styles.phoneButton}>
              <a href="">Request Estimate</a>
            </Button>
          </Link>
        </li>
      </Ul>
    </Navbar>
  );
};

export default HamburgerNav;
