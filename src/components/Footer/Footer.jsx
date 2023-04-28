import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="Footer flex_direction_coloum">
      <div className="Footer_subscribe flex_direction_coloum">
        <div className="footer_head flex_direction_coloum">
          <p className="commonLetter">Newsletter</p>
          <img className="spoon" src="./assets/spoon.png" alt="" />
        </div>

        <h1 className="commonHTag">Subscribe To Our Newsletter</h1>
        <p className="commonPTag">
          And never miss latest Updates
        </p>

        <div className="footer_input">
          <input type="email" placeholder="Email Address" />
          <button className="commonBtn">Subscribe</button>
        </div>
      </div>

      <div className="footer_bottom">

        <div className="footer_bottom_conatactUs flex_direction_coloum">
          <h1 className="commonLetter" >
            Contact Us
          </h1>

          <div className="number">
            <p className="commonPTag">9 W 53rd St, New york, NY 10019, USA</p>
            <p className="commonPTag">+1 212-344-1230</p>
            <p className="commonPTag">+1 212-555-1230</p>
          </div>
        </div>

        <div className="footer_bottom_gericht flex_direction_coloum">
          <img src="./assets/gericht.png" alt="" />
          <p className="commonPTag">
            "The best way to find yourself is to lose yourself in the<br></br> service of
            others.”
          </p>
          <img className="spoon" src="./assets/spoon.png" alt="" />
          <div className="social_icon">
            <li>
              <i class="bi bi-facebook"></i>
            </li>
            <li>
              <i class="bi bi-instagram"></i>
            </li>
            <li>
              <i class="bi bi-whatsapp"></i>
            </li>
          </div>
        </div>

        <div className="footer_bottom_workingHour flex_direction_coloum">
          <p className="commonLetter">Working Hour</p>
          <div>
            <p className="commonPTag">Monday-Friday:</p>
            <p className="commonPTag">08:00 am-12:00 am</p>
            <p className="commonPTag">Saturday-Sunday</p>
            <p className="commonPTag">07:00 am-11:00 pm</p>
          </div>
        </div>
      </div>

      <div className="footer_copyRight">
        <p className="commonPTag">2021 Gericht. All Right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
