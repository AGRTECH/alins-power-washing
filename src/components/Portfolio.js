import React from "react";
import styles from "./App.module.css";
import { Button } from "react-bootstrap";
import driveway from "../img/drivewaybaa.jpg";

const Portfolio = () => {
  return (
    <>
      <div
        className={`${styles.aboutContainer} ${styles.homeContainerSmaller}`}
      >
        <div className={`${styles.innerAboutContainer}`}>
          <div className={styles.homeTopFlex}>
            <div></div>
            <ul className={styles.nameList}>
              <li className={styles.aboutName}>Services</li>
              <li className={styles.homeOccupation}></li>
            </ul>
            <div></div>
          </div>
          <div className={styles.homeBotFlex}>
            <div className={styles.homeBotLeft}>
              <p className={styles.everpayTitle}>Power Washing</p>
              <ul>
                <li>Exterior House</li>
                <li>Driveway</li>
                <li>Deck & Patio</li>
                <li>Car & Truck</li>
                <li>Stairs & Walkway</li>
                <li>Garage Door/Floor</li>
              </ul>
              <div>
                {/* <Button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://drive.google.com/file/d/1aJtbq-9sHBH0fbW6bogfB6nCGes128dS/view",
                      "_blank"
                    );
                  }}
                  className={styles.buttonLiveDemo}
                >
                  Demo
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/AGRTECH/Everpay", "_blank");
                  }}
                >
                  Code
                </Button> */}
              </div>
            </div>
            <div className={styles.homeBotLeft}>
              <p className={styles.transparentVotingTitle}></p>
              <img src={driveway} alt="hello" />
              <div>
                {/* https://drive.google.com/file/d/1zA3Jx-ifjzlEBcXDVSX4othSllvrpSI4/view?usp=sharing */}
                {/* <Button
                  className={styles.buttonLiveDemo}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://drive.google.com/file/d/1zA3Jx-ifjzlEBcXDVSX4othSllvrpSI4/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  {" "}
                  Demo
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://github.com/AGRTECH/Transparent-Voting",
                      "_blank"
                    );
                  }}
                >
                  Code
                </Button> */}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
