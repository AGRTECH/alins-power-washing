import React from "react";
import customer1 from "../img/customerpic1.jpg";
import customer2 from "../img/customerpic2.jpg";
import customer3 from "../img/customerpic3.jpeg";
import stars from "../img/5stars.png";

const Reviews = () => {
  return (
    <div className="reviews-background">
      <p className="reviews-title">Don't Just Take Our Word For It...</p>
      <div className="reviews-container">
        <div className="reviews-section">
          <div className="reviews-quotecontainer">
            <p className="reviews-quotetitle">
              Power Washing in Macomb Michigan
            </p>
            <p>
              Amazing Power Washing service! From quote to finish the team did a
              great job. Everyone was very professional and the owner even
              stopped by to make sure everything was going well. I would hire
              them again and will be recommending them to my own clients and
              family:)
            </p>
          </div>
          <div className="reviews-customercontainer">
            <img className="reviews-customerimg" src={customer1} alt="" />
            <div className="reviews-reviewcontainer">
              <div className="reviews-name">Josh Rickeinburg</div>{" "}
              <img className="reviews-stars" src={stars} alt="" />{" "}
            </div>
          </div>
        </div>
        <div className="reviews-section">
          <div className="reviews-quotecontainer">
            <p className="reviews-quotetitle">
              Power Washing in Macomb Michigan
            </p>
            <p>
              My wife and I had gotten behind on cleaning the exterior of our
              home and certainly don’t have time to get all the attachments and
              tools needed to properly clean hard to reach places. After calling
              we had a reasonable quote within 24hrs and 24hrs after that our
              yard had new life. Quality work, professional services, great
              communication.
            </p>
          </div>
          <div className="reviews-customercontainer">
            <img className="reviews-customerimg" src={customer2} alt="" />
            <div className="reviews-reviewcontainer">
              <div className="reviews-name">Horrace Peterson</div>{" "}
              <img className="reviews-stars" src={stars} alt="" />{" "}
            </div>
          </div>
        </div>
        <div className="reviews-section">
          <div className="reviews-quotecontainer">
            <p className="reviews-quotetitle">
              Power Washing in Macomb Michigan
            </p>
            <p>
              My husband and I will continue to recommend this company to
              neighbors and friends! Each job has been done with care and in a
              timely manner. In each project Tron has been especially hard
              working & friendly! Thank you for all your help in keeping our
              house and driveway looking it’s best! We truly appreciate the
              attention to detail
            </p>
          </div>
          <div className="reviews-customercontainer">
            <img className="reviews-customerimg" src={customer3} alt="" />
            <div className="reviews-reviewcontainer">
              <div className="reviews-name">Kim Miller</div>{" "}
              <img className="reviews-stars" src={stars} alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
