import React, { useState } from "react";
import HamburgerNav from "./HamburgerNav";
import styles from "./Nav.module.css";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={styles.styledBurger}
        open={open}
        onClick={() => {
          setOpen(!open);
          console.log("clicked");
        }}
      >
        <div
          className={styles.burger}
          style={{
            backgroundColor: open ? "white" : "white",
            transform: open ? "rotate(45deg)" : "rotate(0)",
          }}
        />
        <div
          className={styles.burger}
          style={{
            backgroundColor: open ? "white" : "white",
            transform: open ? "translateX(100%)" : "translateX(0)",
            opacity: open ? "0" : "1",
          }}
        />
        <div
          className={styles.burger}
          style={{
            backgroundColor: open ? "white" : "white",
            transform: open ? "rotate(-45deg)" : "rotate(0)",
          }}
        />
      </div>
      <HamburgerNav open={open} />
    </>
  );
};

export default Hamburger;
