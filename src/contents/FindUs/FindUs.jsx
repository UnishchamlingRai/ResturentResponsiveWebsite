import React from "react";
import "./FindUs.scss";
const FindUs = () => {
  return (
    <div className="FindUs unversal_Padding">

      <div className="findUs_left">
        <div className="head flex_direction_coloum">
          <div className="flex_direction_coloum">
            <p className="commonLetter">Contact</p>
            <img className="spoon" src="./assets/spoon.png" alt="" />
          </div>
          <h1 className="commonHTag" style={{ fontSize: "40px" }}>
            Find Us
          </h1>
        </div>

        <div className="findUs_hour flex_direction_coloum">
          <p className="commonPTag">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <h1 className="commonHTag" style={{ fontSize: "25px" }}>
            Opening Hour
          </h1>
          <p className="commonLetter" style={{ fontSize: "15px" }}>
            Mon-Fri:10:00 am-02:00 am
          </p>
          <p className="commonLetter" style={{ fontSize: "15px" }}>
            Sat-sun:10:00 am-03:00 am
          </p>
        </div>

        <button className="commonBtn">Vist Us</button>
      </div>

      <div className="findUs_image">
        <img src="./assets/findus.png" alt="" />
      </div>
    </div>
  );
};

export default FindUs;
