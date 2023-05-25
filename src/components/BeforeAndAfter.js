import React from "react";
import "./App.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import sidewalk1 from "../img/sidewalkresult2.jpg";
import sidewalk2 from "../img/sidewalkresult1.jpg";
import sidewalk3 from "../img/beforesidewalk.jpg";
import sidewalk4 from "../img/aftersidewalk.png";
import sidewalk5 from "../img/beforecabana.png";
import sidewalk6 from "../img/aftercabana.png";

const BeforeAndAfter = () => {
  const FIRST_IMAGE = {
    imageUrl: sidewalk1,
  };
  const SECOND_IMAGE = {
    imageUrl: sidewalk2,
  };
  const THIRD_IMAGE = {
    imageUrl: sidewalk3,
  };
  const FOURTH_IMAGE = {
    imageUrl: sidewalk4,
  };
  const FIFTH_IMAGE = {
    imageUrl: sidewalk5,
  };
  const SIXTH_IMAGE = {
    imageUrl: sidewalk6,
  };

  return (
    <div className="beforeandafter-background">
      <h1 className="beforeandafer-title">You Won't Even Recognize It...</h1>
      <div className="beforeandafter-container">
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          className="beforeandafter-card"
          // delimiterIconStyles={}
          // delimiterColor={"backgroundColor: #000"}
        />
        <ReactBeforeSliderComponent
          firstImage={THIRD_IMAGE}
          secondImage={FOURTH_IMAGE}
          className="beforeandafter-card"
          // delimiterIconStyles={}
          // delimiterColor={"backgroundColor: #000"}
        />
        <ReactBeforeSliderComponent
          firstImage={FIFTH_IMAGE}
          secondImage={SIXTH_IMAGE}
          className="beforeandafter-card"
          // delimiterIconStyles={}
          // delimiterColor={"backgroundColor: #000"}
        />
      </div>
    </div>
  );
};

export default BeforeAndAfter;
