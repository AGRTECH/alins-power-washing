import React from "react";
import styles from "./App.module.css";
import { Button } from "react-bootstrap";
import driveway from "../img/beforeandafterfbad.png";
import ParticlesBg from "particles-bg";
import concrete from "../img/concretehouse.png";
import house from "../img/gorgeoushouse.jpg";
import deck from "../img/wooddeck.jpg";

const Portfolio = () => {
  return (
    <>
      <ParticlesBg
        type="lines"
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          height: 2600,
        }}
      />
      <div
        className={`${styles.aboutContainer} ${styles.homeContainerSmaller} `}
      >
        <div className={`${styles.innerAboutContainer}`}>
          <div className={styles.homeTopFlex}>
            <div></div>
            <ul className={styles.nameList}>
              <li className={styles.serviceName}>Services</li>
              <li className={styles.homeOccupation}></li>
            </ul>
            <div></div>
          </div>
          <div className={styles.homeBotFlex}>
            <div className={styles.homeBotLeft}>
              <p className={styles.everpayTitle}>Housing Washing</p>
              <p>
                When it comes to keeping the exterior of your home fresh,
                low-pressure house washing is the way to go. While power washing
                blasts away dirt and mildew quickly, soft washing protects
                sensitive surfaces by using cleaning agents in combination with
                lower water pressure to produce lasting results.
              </p>
              <div></div>
            </div>
            <div className={styles.homeBotLeft}>
              <p className={styles.transparentVotingTitle}></p>
              <img src={house} alt="hello" className={styles.baaPic} />
              <div></div>
            </div>
            <div></div>
          </div>
          <div className={styles.homeBotFlex}>
            <div className={styles.homeBotLeft}>
              <p className={styles.everpayTitle}>Concrete Washing</p>
              <p>
                Your want to keeping exterior concrete in bright, clean,
                like-new condition is important. Bergen Beach Pressure Washing
                is the perfect partner for this effort.Our concrete cleaning
                services are a smart investment in your curb appeal, property
                value, and brand reputation.
              </p>
              <div></div>
            </div>
            <div className={styles.homeBotLeft}>
              <p className={styles.transparentVotingTitle}></p>
              <img src={concrete} alt="hello" className={styles.baaPic} />
              <div></div>
            </div>
            <div></div>
          </div>
          <div className={styles.homeBotFlex}>
            <div className={styles.homeBotLeft}>
              <p className={styles.everpayTitle}>Wood Deck / Fence Washing</p>
              <p>
                Is your deck or fence looking less than ideal? Wish you knew how
                to restore your deck and fence to their beautiful and durable
                former glory? Well, you can by professionally washing it. Not
                sure how to wash a deck or fence, or worried of accidentally
                ruining your wood by soft washing incorrectly? We're covering
                everything you need to know about washing your deck. So, you can
                safely restore your deck and fence's beauty in no time.
              </p>
              <div></div>
            </div>
            <div className={styles.homeBotLeft}>
              <p className={styles.transparentVotingTitle}></p>
              <img src={deck} alt="hello" className={styles.baaPic} />
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
