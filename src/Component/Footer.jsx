import React from "react";
import "../Style/footer.css";
import footerlogo from "../Assets/Images/Group 3.svg";
import { IoTime } from "react-icons/io5";
import facebookIcon from "../Assets/Images/facebook (1).png";
import instagramIcon from "../Assets/Images/instagram.png";
import twitter from "../Assets/Images/twitter.png";
import linkedIn from "../Assets/Images/linkedin.png";
import PinitIcon from "../Assets/Images/pinit.png";
function Footer() {
  const myYear = new Date().getFullYear();
  console.log(myYear);
  return (
    <>
      <div className="footer_main_wrapper">
        <div className="footer_conatiner_first">
          <div className="footer_conatiner_first_child">
            <img src={footerlogo} alt="" />
            <h2> VIJAYAN'S YOGA</h2>
          </div>
          <div className="footer_conatiner_first_child_two">
            <p>
              <IoTime /> Mon - Fri : 6:30am to 8.30am
            </p>
            <p>
              <IoTime /> Sat - Sun : 6:30pm to 8.30pm
            </p>
          </div>
        </div>
        <div className="Quick_link_main_conatiner">
          <div className="quick_link_heading">
            <h2> Quick Link</h2>
          </div>
          <div className="quick_link_wrapper">
            <div className="quick_link">
              <p> Home</p>
              <p> About</p>
              <p> Vijayan's Yoga</p>
              <p> Student Say's</p>
            </div>
            <div className="quick_link">
              <p> Articles</p>
              <p> FAQ</p>
              <p> Feedback</p>
              <p> Chetna</p>
            </div>
            <div className="quick_link">
              <p> Contact</p>
              <p> Blog</p>
              <p> Career</p>
              <p> Sitemap</p>
            </div>
          </div>
        </div>
        <div className="social_icon">
          <h2>Follow us on</h2>
          <div className="social_icon_wrapper">
            <a href="#">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={linkedIn} alt="" />
            </a>
            <a href="#">
              <img src={PinitIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <p> Vijayan's Yoga {myYear}. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
