import React from "react";
import styles from "./App.module.css";
import nftImg from "../img/mynft.png";
import powerWashLogo from "../img/powerwashlogo.png";

const Home = () => {
  return (
    <>
      <div className={`${styles.homeContainer} ${styles.homeContainerSmaller}`}>
        <div className={`${styles.innerHomeContainer}`}>
          <div className={`${styles.homeTopFlex} ${styles.homeTopFlexIphone}`}>
            <img
              className={`${styles.nftImage} ${styles.nftImageIphone}`}
              src={powerWashLogo}
              alt="no img"
            />
            <ul className={styles.nameList}>
              <li className={`${styles.homeName} ${styles.homeNameIphone}`}>
                Alin's Power Washing
              </li>
              <li
                className={`${styles.homeOccupation} ${styles.homeNameOccupationIphone}`}
              >
                Exterior Home & Driveway Cleaning
              </li>
            </ul>
            <div></div>
          </div>
          <div className={styles.homeBotFlex}>
            <div className={styles.homeBotLeft}>
              <p className={styles.homeDescription}>About Us</p>
              <p className={styles.homeDescription}>
                Our aim is to make your exterior home look and feel as
                beauitiful as possible and for as long as possible, for an
                affordable price.
              </p>
            </div>
            <div className={styles.homeBotRight}>
              <ul className={styles.homeBotRightLeftList}>
                <li></li>
                <li>Location</li>
                <li>Email</li>
                <li>Phone</li>
              </ul>
              <ul className={styles.homeBotRightRightList}>
                <li></li>
                <li>Macomb & Oakland County</li>
                <li>alinspowerwashing@gmail.com</li>
                <li>(586) 651-6917</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
