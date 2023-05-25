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
import dualSurfaceClean from "../img/dualsurfacecleanerpic1.jfif";
import pic2 from "../img/kriskumargraffiti2.JPG";
import droneViewHouse from "../img/dronehouse.jpg";
import dadSiding from "../img/dadsiding.jpg";
import serviceArea from "../img/servicearea.png";
import Time from "../img/timeicon.png";
import Thumbs from "../img/thumbsupicon.png";
import License from "../img/license.webp";
import Money from "../img/moneyicon.png";
import deck from "../img/wooddeck.jpg";
import flurrix from "../img/flurrixwhitetrans.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
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
                <li className={styles.homeName}>Power Washing,</li>
                <li
                  className={`${styles.homeOccupation} ${styles.homeNameOccupationIphone}`}
                >
                  Macomb & Oakland County
                </li>
                <li className={styles.thirdLineHome}>
                  Fully Rejuvenate Your Home Back to It's Formal Glory & Impress
                  Your Neighbors
                </li>
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
          className={`${styles.homeContainerSmaller} ${styles.bigContainer} `}
        >
          <div className={`${styles.innerHomeContainer}`}>
            {/* <img src={Housewash} className={styles.backgroundImg} alt="" /> */}
            <div
              className={`${styles.homeTopFlex} ${styles.homeTopFlexIphone}`}
            >
              <ul className={styles.nameList}>
                <li className={`${styles.homeHeader2} ${styles.negMargBot}`}>
                  {/* You Can Count On The Exterior Cleaning Experts */}
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
                <img src={pic2} className={styles.surfaceCleaningPic} alt="" />
                <img src={dadSiding} className={"section2-pic2"} alt="" />
              </div>
              <div className={styles.homeBotRight}>
                <ul className={styles.homeBotRightLeftList}>
                  <li className="section2-title">
                    You Can Count On The Exterior Cleaning Experts
                  </li>
                  <li className={`${styles.margBot} ${styles.font3}`}>
                    {" "}
                    Blast the dirt off your pathways, wooden platforms, vinyl
                    fences, store fronts, dumpster areas, driveways, garages and
                    more with the help of locally owned Hercules Power Washing
                    Crew. Add hygiene and cleanliness to your space instantly
                    with our washing services. We use quality pressure washing
                    equipment to power wash or soft wash your residential or
                    commercial exterior surfaces.
                  </li>
                  <li className={styles.font3}>
                    We know that your home is a big investment for you, both
                    personally and financially. Our team members have acquired
                    many years of experience in pressure washing services, and
                    we welcome the chance to add your name to our list of happy
                    customers. From the top of your home to the tip of your
                    driveway, we have the skills and the cleaning equipment to
                    wash away all types of mold, mildew, dirt, pollen, algae,
                    insect nests, and any other substance that has developed on
                    your exterior surfaces.
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.navHomeWrap} ${styles.backgroundGray}`}>
        <div
          className={`${styles.biggerCointainer} ${styles.homeContainerSmaller} `}
        >
          <div className={`${styles.innerHomeContainer}`}>
            {/* <img src={Housewash} className={styles.backgroundImg} alt="" /> */}
            <div>
              <ul className={styles.nameList}>
                <li className={`${styles.homeDescription2} ${styles.center}`}>
                  We Are So Glad You Are Here...
                </li>
                <li
                  className={`${styles.homeHeader2} ${styles.homeNameOccupationIphone} ${styles.center}`}
                >
                  How Can We Best{" "}
                  <span className={styles.span1}>Serve You?</span>
                </li>
                <li className={styles.thirdLineHome}></li>
              </ul>
              <div></div>
            </div>
            <div className={styles.thirdCard}>
              <div className={styles.concreteCleaningCard}>
                <img
                  src={SurfaceCleaningCloseUp}
                  className={styles.concreteCleaningImg}
                  alt=""
                />
                <p className={styles.cardCenter}>Concrete Cleaning</p>
                <Link
                  className={`${styles.center} ${styles.noStyle}`}
                  to={"/concrete"}
                >
                  <Button
                    className={`${styles.estimateButton} ${styles.center} `}
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className={styles.concreteCleaningCard}>
                <img
                  src={HouseWashCloseUp}
                  className={styles.concreteCleaningImg}
                  alt=""
                />
                <p className={styles.cardCenter}>House Washing</p>
                <Link
                  className={`${styles.center} ${styles.noStyle}`}
                  to={"/housewash"}
                >
                  <Button
                    className={`${styles.estimateButton} ${styles.center}`}
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className={styles.concreteCleaningCard}>
                <img src={deck} className={styles.deckCleaningImg} alt="" />
                <p className={styles.cardCenter}>Patio / Deck Cleaning</p>
                <Link
                  className={`${styles.center} ${styles.noStyle}`}
                  to={"/patio"}
                >
                  <Button
                    className={`${styles.estimateButton} ${styles.center} `}
                  >
                    Learn More
                  </Button>
                </Link>
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
      <div className={styles.navHomeWrap}>
        <div
          className={`${styles.biggerCointainer} ${styles.homeContainerSmaller} `}
        >
          <div className={`${styles.innerHomeContainer2}`}>
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
                    className={`${styles.fontSizeDescription} ${styles.textWhite} ${styles.margBot3} ${styles.margLeft}`}
                  >
                    (586) 696-4040
                  </li>
                  <li
                    className={`${styles.fontSizeDescription} ${styles.textWhite} ${styles.margBot3} ${styles.margLeft}`}
                  >
                    <p>Website Design by</p>
                    <a href="https://flurrix.vercel.app/home">
                      <img className="footer-flurrix" src={flurrix} alt="" />
                    </a>
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

export default Home;
