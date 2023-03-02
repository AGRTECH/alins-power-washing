import React from "react";
import "./App.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import sidewalk1 from "../img/sidewalkresult2.jpg";
import sidewalk2 from "../img/sidewalkresult1.jpg";

const BeforeAndAfter = () => {
  const FIRST_IMAGE = {
    imageUrl: sidewalk1,
  };
  const SECOND_IMAGE = {
    imageUrl: sidewalk2,
  };
  /* ... */

  return (
    <div className="beforeandafter-background">
      <h1 className="beforeandafer-title">
        Restore Your Home to It's Former Glory
      </h1>
      <div className="beforeandafter-container">
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          className="beforeandafter-card"
          // delimiterIconStyles={}
          // delimiterColor={"backgroundColor: #000"}
        />
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          className="beforeandafter-card"
          // delimiterIconStyles={}
          // delimiterColor={"backgroundColor: #000"}
        />
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          className="beforeandafter-card"
          // delimiterIconStyles={}
          // delimiterColor={"backgroundColor: #000"}
        />
      </div>
    </div>
  );
};

export default BeforeAndAfter;
