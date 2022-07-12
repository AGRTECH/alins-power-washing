import React, { useState } from "react";
import styles from "./App.module.css";
import { Form, Button } from "react-bootstrap";
import ParticlesBg from "particles-bg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <ParticlesBg
        type="lines"
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          height: 1500,
        }}
      />
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
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
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
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Additional Notes"
                />
              </Form.Group>
              <p>Services Needed:</p>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  name="driveway"
                  label="Driveway Cleaning"
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
              <p className={styles.lighter}>For Immediate Assistance Call</p>
              <p className={styles.contactPhone}>(586) 696-4040</p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
