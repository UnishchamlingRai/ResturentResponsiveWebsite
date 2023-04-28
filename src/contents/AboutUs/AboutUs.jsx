import React from "react";
import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <div className="aboutUs unversal_Padding">
      <div className="aboutUs_G">
        <img src="./assets/G.png" alt="" />
      </div>

    
        <did className="aboutUs_content">
        <div className="aboutUs_left">
          <div className="head">
            <h1 className="commonHTag">About Us</h1>
            <img className="spoon" src="./assets/spoon.png" alt="" />
          </div>
          <div className="aboutUs_paragraph">
            <p className="commonPTag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <button className="commonBtn">Know More</button>
          </div>
        </div>

        <div className="knife">
          <img src="./assets/knife.png" alt="Knife" />
        </div>

        <div className="aboutUs_right">
          <div className="head">
            <h1 className="commonHTag">Our History</h1>
            <img className="spoon" src="./assets/spoon.png" alt="" />
          </div>
          <div className="aboutUs_paragraph">
            <p className="commonPTag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <button className="commonBtn">Know More</button>
          </div>
        </div>
        </did>
        
  
    </div>
  );
};

export default AboutUs;
