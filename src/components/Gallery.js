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
import deck from "../img/wooddeck.jpg";
import pic1 from "../img/guttershine.PNG";
import pic2 from "../img/housewashshine.jpeg";
import pic3 from "../img/patioshine.jpeg";
import pic4 from "../img/gallerypic1.jpg";
import pic5 from "../img/gallerypic2.jpg";
import sidewalk1 from "../img/sidewalkresult2.jpg";
import sidewalk2 from "../img/sidewalkresult1.jpg";
import patio from "../img/patioresult.jpg";
import walkway from "../img/walkwayresult.jpg";
import kriskumar1 from "../img/kriskumarba1.JPG";
import kriskumar2 from "../img/kriskumarba2.JPG";
import kriskumar3 from "../img/kriskumargraffiti1.JPG";
import kriskumar4 from "../img/kriskumargraffiti2.JPG";
import kriskumar5 from "../img/kriskumar3.jpg";
import kriskumarvid from "../img/kriskumarvid1.MOV";
import justinroof from "../img/justinroof.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <>
      <div
        className={`${styles.navHomeWrap} ${styles.backgroundBlue} ${styles.biggerCard}`}
      >
        <img src={Housewash} className={styles.backgroundImg} alt="" />
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
                <li className={styles.homeName}>Take A Look At</li>
                <li
                  className={`${styles.homeOccupation} ${styles.homeNameOccupationIphone} `}
                >
                  Some Of Our
                </li>
                <li className={`${styles.homeName} ${styles.serviceLine5}`}>
                  <span className={styles.emphasis}>Recent Projects</span>
                </li>
                <li className={styles.thirdLineHome}></li>
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
          className={`${styles.biggerCointainer} ${styles.homeContainerSmaller} ${styles.backgroundGray}`}
        >
          <div className={styles.galleryContainer}>
            {/* <img src={Housewash} className={styles.backgroundImg} alt="" /> */}
            <div>
              <ul className={styles.nameList}>
                <li
                  className={`${styles.homeDescription2} ${styles.center}`}
                ></li>
                <li
                  className={`${styles.homeHeader2} ${styles.homeNameOccupationIphone} ${styles.center}`}
                >
                  {/* Take A Look At Some Of{" "}
                  <span className={styles.span1}>Our Projects</span> */}
                </li>
                <li className={styles.thirdLineHome}></li>
              </ul>
              <div></div>
            </div>
            <div className={styles.thirdCard}>
              <div className={styles.galleryCard}>
                <img src={kriskumar4} className={styles.gutterImg} alt="" />
              </div>
              <div className={styles.galleryCard}>
                <video controls loop muted className={styles.galleryImg}>
                  <source
                    className={styles.krisvideo}
                    src={kriskumarvid}
                    type="video/mp4"
                  ></source>
                </video>
              </div>
              <div className={styles.galleryCard}>
                <img src={kriskumar2} className={styles.galleryImg} alt="" />
              </div>
              <div className={styles.galleryCard}>
                <img src={kriskumar5} className={styles.galleryImg} alt="" />
              </div>
            </div>
            <div className={styles.thirdCard}>
              <div className={styles.galleryCard}>
                <img src={kriskumar1} className={styles.galleryImg} alt="" />
              </div>
              <div className={styles.galleryCard}>
                <img src={justinroof} className={styles.galleryImg} alt="" />
              </div>
              <div className={styles.galleryCard}>
                <img src={patio} className={styles.galleryImg} alt="" />
              </div>
            </div>
            <div className={styles.thirdCard}>
              <div className={styles.galleryCard}>
                <img src={walkway} className={styles.galleryImg} alt="" />
              </div>

              <div className={styles.galleryCard}>
                <img src={pic3} className={styles.galleryImg} alt="" />
              </div>
            </div>
            {/* <div className={styles.thirdCard}>
              <div className={styles.concreteCleaningCard}>
                <img
                  src={SurfaceCleaningCloseUp}
                  className={styles.galleryImg}
                  alt=""
                />
              </div>
              <div className={styles.concreteCleaningCard}>
                <img
                  src={HouseWashCloseUp}
                  className={styles.galleryImg}
                  alt=""
                />
              </div>
              <div className={styles.concreteCleaningCard}>
                <img src={deck} className={styles.deckCleaningImg} alt="" />
              </div>
            </div> */}
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
      <div className={styles.navHomeWrap}>
        <div
          className={`${styles.biggerCointainer} ${styles.homeContainerSmaller} `}
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

export default Gallery;
