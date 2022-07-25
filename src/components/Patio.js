import React from "react";
import styles from "./App.module.css";
import Hercules from "../img/HerculesHosingLogo1.png";
import "./background.css";
import ParticlesBg from "particles-bg";
import Nav from "./Nav";
import Housewash from "../img/housewashnologo.jpg";
import SurfaceCleaning from "../img/surfacecleaning1.jpg";
import HouseWashCloseUp from "../img/housewashcloseup.jpg";
import SurfaceCleaningCloseUp from "../img/surfacecleanercloseup.jpg";
import droneViewHouse from "../img/dronehouse.jpg";

import patioCleaner from "../img/patiosurfacecleaner.jpg";
import serviceArea from "../img/servicearea.png";
import deck from "../img/wooddeck.jpg";
import Time from "../img/timeicon.png";
import Thumbs from "../img/thumbsupicon.png";
import License from "../img/license.webp";
import Money from "../img/moneyicon.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Patio = () => {
  return (
    <>
      <div
        className={`${styles.navHomeWrap} ${styles.backgroundBlue} ${styles.biggerCard}`}
      >
        <img src={deck} className={styles.backgroundImg} alt="" />
        <Nav />
        <div
          className={`${styles.homeContainer} ${styles.homeContainerSmaller} ${styles.margTop2}`}
        >
          <div className={`${styles.innerHomeContainer}`}>
            {/* <img src={Housewash} className={styles.backgroundImg} alt="" /> */}
            <div
              className={`${styles.homeTopFlex} ${styles.homeTopFlexIphone}`}
            >
              <ul className={styles.nameList}>
                <li
                  className={`${styles.thirdLineHome} ${styles.serviceLine1} ${styles.margBot4}`}
                >
                  Patio / Deck Cleaning Macomb & Oakland County
                </li>
                <li className={`${styles.homeName} ${styles.serviceLine2}`}>
                  Southeast Michigan's
                </li>
                <li className={`${styles.homeName} ${styles.serviceLine3}`}>
                  {" "}
                  <span className={styles.emphasis}>Pristine</span>{" "}
                </li>
                <li className={`${styles.homeName} ${styles.serviceLine3}`}>
                  Patio / Deck Cleaning
                </li>
                <li
                  className={`${styles.homeOccupation} ${styles.homeNameOccupationIphone}`}
                ></li>
              </ul>
              <div></div>
            </div>
            <div className={styles.homeBotFlex}>
              <div className={styles.homeBotLeft}>
                <Button
                  className={`${styles.estimateButton} ${styles.largerBtn} ${styles.phoneBtn}`}
                >
                  <a
                    className={`${styles.noStyle} ${styles.textWhite}`}
                    href="tel:(586) 696-4040"
                  >
                    Click To Call
                  </a>
                </Button>
                <Link className={styles.noStyle} to={"/contact"}>
                  <Button
                    className={`${styles.estimateButton} ${styles.largerBtn} ${styles.iphoneEstimate}`}
                  >
                    Request Estimate
                  </Button>
                </Link>
                <Link to={"/contact"}>
                  <Button
                    className={`${styles.estimateButton} ${styles.largerBtn}`}
                  >
                    Request A Free Estimate
                  </Button>
                </Link>
              </div>
              <div className={styles.homeBotRight}>
                <ul className={styles.homeBotRightLeftList}>
                  <li></li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navHomeWrap}>
        <div
          className={`${styles.biggerContainer} ${styles.homeContainerSmaller} ${styles.bigCard}`}
        >
          <div className={`${styles.smallerInnerContainer}`}>
            {/* <img src={Housewash} className={styles.backgroundImg} alt="" /> */}
            <div
              className={`${styles.homeTopFlex} ${styles.homeTopFlexIphone}`}
            >
              <ul className={styles.nameList}>
                <li className={styles.homeHeader2}>
                  Get The Best Patio & Deck Cleaning In Macomb County
                </li>
                <li
                  className={`${styles.homeDescription2} ${styles.homeNameOccupationIphone}`}
                ></li>
                <li className={styles.thirdLineHome}></li>
              </ul>
              <div></div>
            </div>
            <div className={styles.homeBotFlex}>
              <div className={styles.homeBotLeft}>
                <img
                  src={patioCleaner}
                  className={styles.surfaceCleaningPic}
                  alt=""
                />
              </div>
              <div className={styles.homeBotRight}>
                <ul className={styles.homeBotRightLeftList}>
                  <li className={`${styles.margBot2} ${styles.font2}`}>
                    {" "}
                    Getting a good pressure washing service can be difficult,
                    sorting the bad service from those that excel in the field
                    can sometimes be a nightmare. But our pressure washing
                    service in Macomb & Oakland County is, without a doubt, the
                    best. We pride ourselves on delivering superior results with
                    minimal disruption to your life. Your home is precious and
                    we value this, always displaying a professional and
                    respectful approach that has earned us our excellent
                    reputation. We offer a wide range of pressure cleaning
                    options so we are versatile as well as efficient and
                    top-quality. Whether it’s driveway cleaning, patio washing,
                    or anything else, we’ve got you covered. Our staff is fully
                    trained and ready to answer any of your questions. What’s
                    more, our dedicated team of pressure cleaners will not leave
                    until you are 100% satisfied with the work and we are
                    confident that you will be. After all, excellence is what we
                    strive for.
                  </li>
                  <li>
                    <Link to={"/contact"}>
                      <Button
                        className={`${styles.estimateButton} ${styles.largerBtn}`}
                      >
                        Request A Free Estimate
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navHomeWrap}>
        <div
          className={`${styles.biggerCointainer} ${styles.backgroundGray} ${styles.homeContainerSmaller} `}
        >
          <div className={`${styles.innerHomeContainer}`}>
            {/* <img src={Housewash} className={styles.backgroundImg} alt="" /> */}
            <div>
              <ul className={styles.nameList}>
                <li className={`${styles.homeDescription2} ${styles.center}`}>
                  We Want You To Know...
                </li>
                <li
                  className={`${styles.homeHeader2} ${styles.homeNameOccupationIphone} ${styles.center}`}
                >
                  We're Commited To{" "}
                  <span className={styles.span1}>Your Happiness</span>
                </li>
                <li className={styles.thirdLineHome}></li>
              </ul>
              <div></div>
            </div>
            <div className={styles.thirdCard}>
              <div className={`${styles.backgroundFullBlue}`}>
                <img className={`${styles.icons}`} src={Time} alt="" />
                <p className={styles.cardText}>Fast Quotes</p>
              </div>
              <div className={`${styles.backgroundFullBlue}`}>
                <img className={styles.icons} src={Money} alt="" />
                <p className={styles.cardText}>Affordable Prices</p>
              </div>
              <div className={`${styles.backgroundFullBlue}`}>
                <img className={styles.icons} src={License} alt="" />
                <p className={styles.cardText}>Licensed & Insured</p>
              </div>
              <div className={`${styles.backgroundFullBlue}`}>
                <img className={styles.icons} src={Thumbs} alt="" />
                <p className={styles.cardText}>100% Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.navHomeWrap} ${styles.backgroundNavy} ${styles.biggerCointainer2}`}
      >
        <div
          className={`${styles.homeContainer} ${styles.homeContainerSmaller} `}
        >
          <div className={`${styles.innerHomeContainer} ${styles.margTopNone}`}>
            {/* <img src={Housewash} className={styles.backgroundImg} alt="" /> */}
            <div
              className={`${styles.homeTopFlex} ${styles.homeTopFlexIphone}`}
            >
              <ul className={styles.nameList}>
                <li className={styles.homeHeader2}></li>
                <li
                  className={`${styles.homeDescription2} ${styles.homeNameOccupationIphone}`}
                ></li>
                <li className={styles.thirdLineHome}></li>
              </ul>
              <div></div>
            </div>
            <div className={styles.homeBotFlex}>
              <div className={styles.homeBotRight}>
                <ul className={styles.homeBotRightLeftList}>
                  <li>
                    <img
                      src={Hercules}
                      className={`${styles.hercPic} ${styles.margBot} ${styles.margLeft6}`}
                      alt=""
                    />
                  </li>
                  <li
                    className={`${styles.fontSizeDescription} ${styles.textWhite} ${styles.margBot} ${styles.margLeft} ${styles.margRight7}`}
                  >
                    <p className={styles.margBot3}>Macomb & Oakland County</p>
                  </li>
                  <li
                    className={`${styles.fontSizeDescription} ${styles.textWhite} ${styles.margBot3} ${styles.margLeft}`}
                  >
                    herculeshosing@gmail.com
                  </li>
                  <li
                    className={`${styles.fontSizeDescription} ${styles.textWhite} ${styles.margBot3} ${styles.margLeft3}`}
                  >
                    (586) 696-4040
                  </li>
                  <li
                    className={`${styles.fontSizeDescription} ${styles.textWhite}`}
                  >
                    <Link className={styles.noStyle} to={"/contact"}>
                      <Button
                        className={`${styles.estimateButton}  ${styles.iphoneEstimate} ${styles.margLeft5}`}
                      >
                        Request A Free Estimate
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footerLeft}>
                <p
                  className={`${styles.font1} ${styles.textWhite} ${styles.margLeft4}`}
                >
                  Our Service Area
                </p>
                <img
                  src={serviceArea}
                  className={styles.serviceareaPic}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patio;
