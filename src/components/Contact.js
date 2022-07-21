import React from "react";
import styles from "./App.module.css";
import { Form, Button } from "react-bootstrap";
import ParticlesBg from "particles-bg";
import Testimonial1 from "../img/IMG_8576.JPG";
import Testimonial2 from "../img/yelpreview.png";
import Testimonial3 from "../img/IMG_8679.PNG";
import insurance from "../img/Hercules Hosing_COI.pdf";
import sidewalk1 from "../img/sidewalkresult2.jpg";
import sidewalk2 from "../img/sidewalkresult1.jpg";
import patio from "../img/patioresult.jpg";
import walkway from "../img/walkwayresult.jpg";

const Contact = () => {
  return (
    <>
      <div
        className={`${styles.homeContainerSmaller} ${styles.contactContainer}`}
      >
        <div className={`${styles.innerContactContainer}`}>
          <div className={styles.homeTopFlex}>
            <div></div>
            <ul className={styles.nameList}>
              <li className={styles.contactName}>Request A free Estimate</li>
              <li className={styles.contactDescription}>
                Fill out our contact form below. We will get back to you during
                normal working hours.
              </li>
              <li className={styles.homeOccupation}></li>
            </ul>
            <div></div>
          </div>
          <div className={styles.contactBot}>
            <Form
              action="https://formsubmit.co/herculeshosing@gmail.com"
              method="POST"
              className={styles.form}
            >
              <div className={styles.nameAndEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    className={styles.nameForm}
                    onChange={(e) => {}}
                    type="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => {}}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    className={styles.phoneField}
                    onChange={(e) => {}}
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </Form.Group>
              </div>
              <div className={styles.nameAndEmail}>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="address"
                    name="address"
                    placeholder="Address"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="city"
                    name="city"
                    placeholder="City"
                    required
                  />
                </Form.Group> */}

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="zip"
                    name="zip"
                    placeholder="Zip Code"
                    required
                  />
                </Form.Group> */}
              </div>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  onChange={(e) => {}}
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Additional Notes"
                />
              </Form.Group>
              <p className={styles.servicesNeeded}>Services Needed:</p>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  name="concrete"
                  label="Concrete Cleaning"
                />
                <Form.Check
                  type="checkbox"
                  name="housewash"
                  label="House Washing"
                />
                <Form.Check
                  type="checkbox"
                  name="patiodeck"
                  label="Patio/Deck Cleaning"
                />
                <Form.Check
                  type="checkbox"
                  name="other"
                  label="Other (Include in Additional Notes)"
                />
              </Form.Group>
              <Button
                className={styles.submitButton}
                variant="primary"
                type="submit"
                onClick={(e) => window.fbq("track", "Contact")}
              >
                Request a Free Estimate
              </Button>

              <p className={styles.seeWhat}>
                See What Others Have To Say About Our Services!
              </p>
              <img src={Testimonial1} alt="" className={styles.test1} />
              <p className={`${styles.margBot} ${styles.margDiffLeft}`}>
                -Joe (Sterling Heights, MI)
              </p>
              <img src={Testimonial2} alt="" className={styles.test2} />
              <p className={`${styles.margBot} ${styles.margLeft}`}>
                -Amanda R (Shelby Charter Township, MI)
              </p>
              <img src={Testimonial3} alt="" className={styles.test3} />
              <p className={`${styles.margBot} ${styles.margLeft}`}>
                -Kami S (Rochester, MI)
              </p>

              <p className={styles.lighter}>For Immediate Assistance Call</p>
              <p className={styles.contactPhone}>(586) 696-4040</p>
              <p className={styles.center}>
                Fully Insured For Your Protection!
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
