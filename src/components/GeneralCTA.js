import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./App.module.css";
import droneViewHouse from "../img/dronehouse.jpg";

const GeneralCTA = () => {
  return (
    <div className={`${styles.navHomeWrap} ${styles.backgroundBlue}`}>
      <div
        className={`${styles.homeContainer} ${styles.homeContainerSmaller} ${styles.smallerCard} ${styles.margTop}`}
      >
        <div className={`${styles.innerHomeContainer}`}>
          <img src={droneViewHouse} className={styles.backgroundImg} alt="" />
          <div>
            <ul className={styles.nameList}>
              <li
                className={`${styles.homeHeader2} ${styles.homeNameOccupationIphone} ${styles.center}`}
              >
                Are You Ready To Restore Your Property?
              </li>
              <li className={`${styles.homeDescription2} ${styles.center}`}>
                {/* Try Macomb & Oakland County's Pristine Pressure Washing
                Risk-Free Today */}
              </li>
              <li className={styles.thirdLineHome}></li>
            </ul>
            <div></div>
          </div>
          <div className={styles.thirdCard}>
            <Link to={"/contact"}>
              <Button
                className={`${styles.estimateButton} ${styles.center} ${styles.larger} ${styles.blackBorder}`}
              >
                Request A Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralCTA;
