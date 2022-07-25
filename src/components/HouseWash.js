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
import serviceArea from "../img/servicearea.png";
import Time from "../img/timeicon.png";
import Thumbs from "../img/thumbsupicon.png";
import License from "../img/license.webp";
import Money from "../img/moneyicon.png";
import patioCleaner from "../img/patiosurfacecleaner.jpg";
import deck from "../img/wooddeck.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HouseWash = () => {
  return (
    <>
      <div
        className={`${styles.navHomeWrap} ${styles.backgroundBlue} ${styles.biggerCard}`}
      >
        <img src={HouseWashCloseUp} className={styles.backgroundImg} alt="" />
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
                  className={`${styles.thirdLineHome} ${styles.serviceLine1}`}
                >
                  House Washing Macomb & Oakland County
                </li>
                <li className={`${styles.homeName} ${styles.serviceLine2}`}>
                  Southeast Michigan's
                </li>
                <li className={`${styles.homeName} ${styles.serviceLine3}`}>
                  {" "}
                  <span className={styles.emphasis}>Pristine</span>{" "}
                </li>
                <li className={`${styles.homeName} ${styles.serviceLine3}`}>
                  House Washing
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
          className={`${styles.biggerContainer} ${styles.homeContainerSmaller}`}
        >
          <div className={`${styles.smallerInnerContainer}`}>
            {/* <img src={Housewash} className={styles.backgroundImg} alt="" /> */}
            <div
              className={`${styles.homeTopFlex} ${styles.homeTopFlexIphone}`}
            >
              <ul className={styles.nameList}>
                <li className={styles.homeHeader2}>
                  Get The Best House Washing In Macomb County
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
                  src={HouseWashCloseUp}
                  className={styles.surfaceCleaningPic}
                  alt=""
                />
              </div>
              <div className={styles.homeBotRight}>
                <ul className={styles.homeBotRightLeftList}>
                  <li className={`${styles.margBot2} ${styles.font2}`}>
                    {" "}
                    House washing is the perfect risk-free solution to cleaning
                    your home’s exterior, with house washing you can instantly
                    improve the curb appeal for your home making it look great
                    from the outside, this is particularly important if you ever
                    want to sell your house. It is also the most effective and
                    efficient way of removing any algae, moss, and other
                    residues that build up and cause a lot of staining. Get the
                    best house washing in Macomb & Oakland County, and have the
                    outside of your home looking exactly how you want it to with
                    our skilled and hardworking team; let the experts have your
                    home looking fresh and well maintained all year round.
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
                  We Guarentee 100% Satisfaction!
                </li>
                <li className={`${styles.homeDescription2} ${styles.center}`}>
                  Try Macomb & Oakland County's Pristine Pressure Washing
                  Risk-Free Today
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
                    className={`${styles.fontSizeDescription} ${styles.textWhite} ${styles.margBot} ${styles.margLeft}`}
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

export default HouseWash;
