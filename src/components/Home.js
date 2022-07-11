import React from "react";
import styles from "./App.module.css";
import nftImg from "../img/mynft.png";
import powerWashLogo from "../img/powerwashlogo.png";
import Hercules from "../img/HerculesHosingLogo1.png";
import "./background.css";
import ParticlesBg from "particles-bg";

const Home = () => {
  return (
    <>
      <div className={`${styles.homeContainer} ${styles.homeContainerSmaller}`}>
        <div className={`${styles.innerHomeContainer}`}>
          <div className={`${styles.homeTopFlex} ${styles.homeTopFlexIphone}`}>
            <img
              className={`${styles.nftImage} ${styles.nftImageIphone}`}
              src={Hercules}
              alt="no img"
            />
            <ul className={styles.nameList}>
              <li className={`${styles.homeName} ${styles.homeNameIphone}`}>
                Hercules Hosing
              </li>
              <li
                className={`${styles.homeOccupation} ${styles.homeNameOccupationIphone}`}
              >
                Power Washing & Exterior Home Cleaning
              </li>
            </ul>
            <div></div>
          </div>
          <div className={styles.homeBotFlex}>
            <div className={styles.homeBotLeft}>
              <p className={styles.homeDescription}>About Us</p>
              <p className={styles.homeDescription}>
                Our aim is to make your exterior home look and feel as{" "}
                <span className={styles.beauText}>beauitiful</span> as possible
                and for as <span className={styles.longText}>long</span> as
                possible, for an affordable price. Every clean starts with a
                pre-treament of perfectly curated chemicals followed by a
                precise, <span className={styles.red}>high-psi</span> power
                wash.
              </p>
            </div>
            <div className={styles.homeBotRight}>
              <ul className={styles.homeBotRightLeftList}>
                <li></li>
                <li>
                  Location<span className={styles.invisText}>ffFff</span>
                </li>
                <li>
                  Email <span className={styles.invisText}>fffffffffff</span>
                </li>
                <li>Phone</li>
              </ul>
              <ul className={styles.homeBotRightRightList}>
                <li></li>
                <li>Macomb & Oakland County, MI</li>
                <li>hercules hosing@ gmail.com</li>
                <li className={styles.phone}>(586) 696-4040</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <ParticlesBg
        type="lines"
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          height: 1400,
        }}
      />
    </>
  );
};

export default Home;
