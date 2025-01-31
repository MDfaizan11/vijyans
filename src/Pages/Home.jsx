import React, { useState, useEffect } from "react";
import Slider from "../Component/Slider";
import chooseImg from "../Assets/Images/intro.jpg";
import { FaCheckCircle } from "react-icons/fa";
import "../Style/home.css";
import wlmimg from "../Assets/Images/welcomeimg.jpg";
import TestimonialSlider from "../Component/TestimonialSlider";
import g1 from "../Assets/Images/g1.jpg";
import g2 from "../Assets/Images/g2.jpg";
import g3 from "../Assets/Images/g3.jpg";
import g4 from "../Assets/Images/g4.jpg";
import g5 from "../Assets/Images/g5.jpg";
import g6 from "../Assets/Images/program-2.jpg";
import heroImg from "../Assets/Images/Group 2.svg";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const texts = [
    "Welcome to VIJAYAN'S YOGA!",
    "We provide the best yoga services.",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBeforeDeleting = 2000;

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
      }
    } else {
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [displayText, isDeleting, currentTextIndex]);
  return (
    <>
      {/* <Slider /> */}

      <div className="home_hero_img">
        <div className="hero_text_side">
          <h2>
            {displayText} <span className="cursor">|</span>
          </h2>
          <p> Do Yoga today for a better tomorrow</p>
          <button className="hero_section_button"> Learn More</button>
        </div>
        <div className="hero_image_side">
          <img src={heroImg} alt="Welcome Image" />
        </div>
      </div>

      <div className="why_choose_container">
        <div className="why_choose_img">
          <img src={chooseImg} alt="Choose Us" />
        </div>
        <div className="why_choose_text">
          <h2>Why You Should Go To Yoga</h2>
          <p className="choose_lorem">
            Yoga is more than just a workout; it’s a holistic practice that
            nurtures your body, mind, and soul. Whether you’re a beginner or an
            experienced practitioner, yoga offers countless benefits that can
            transform your life.
          </p>
          <div className="choose_point">
            <p>
              <FaCheckCircle style={{ color: "#ff9800" }} /> Yoga boosts brain
              power
            </p>
            <p>
              <FaCheckCircle style={{ color: "#ff9800" }} /> Yoga improves
              flexibility and strength
            </p>
            <p>
              <FaCheckCircle style={{ color: "#ff9800" }} /> Yoga helps
              alleviate stress and anxiety
            </p>
            <p>
              <FaCheckCircle style={{ color: "#ff9800" }} /> Yoga promotes
              relaxation and well-being
            </p>
            <p>
              <FaCheckCircle style={{ color: "#ff9800" }} /> Yoga improves
              self-confidence and confidence in yourself
            </p>
          </div>
        </div>
      </div>

      <h2 className="welcome_heading">Welcome to Vijayan's Yoga</h2>
      <div className="welcome_container">
        <div className="welcome_text_container">
          <p>
            Vijayan’s Yoga Centre is a holistic wellness hub dedicated to
            promoting lifelong health through yoga. With tailored programs
            designed by Yogratna Yogacharya Vijayan C. Raman, the centre caters
            to diverse needs, from general fitness to addressing specific health
            conditions such as back pain, diabetes, arthritis, and even cancer
            rehabilitation. Special weight loss programs enable participants to
            shed 15–25 kilograms in three months naturally, without side
            effects. Emphasizing immunity-building and a balanced diet,
            Vijayan’s Yoga empowers individuals from all walks of life to
            enhance their lifestyle, achieve sustainable fitness, and prevent
            diseases.
          </p>
          <br />
          <p>
            At Vijayan’s Yoga there are solutions for various diseases like back
            problems, B.P., Diabetes, arthritis, menstrual problems and also
            rehabilitation for cancer patients. This is achieved completely by
            yoga. The main goal is to increase the immune of an individual as it
            will help him fight against diseases through yoga and good diet.
          </p>
          <button className="wlcome_read_more_button"> Read More</button>
        </div>
        <div className="wlc_img_container">
          <img src={wlmimg} alt="" />
        </div>
      </div>
      <div className="home_gallery_section">
        <h1
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          Our Gallery
        </h1>
        <div className="home_gallery_container">
          <img src={g1} alt="" />
          <img src={g2} alt="" />
          <img src={g3} alt="" />
          <img src={g4} alt="" />
          <img src={g5} alt="" />
          <img src={g6} alt="" />
        </div>
      </div>

      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        MemberShip Card
      </h1>
      <div className="memberShipDetail_card_wrapper">
        <div className="memberShip_card_container">
          <div className="memberShip_card_one">
            <p> YEAR CARD</p>
            <p> ₹ 5000 </p>
            <p>For 1 Year</p>
            <p>Enjoy All The Features</p>
            <p>Onetime Access To All Club</p>
            <p>Group Trainer</p>
            <p>Book A Group Class</p>
            <p>Fitness Orientation</p>
          </div>
          <div className="Book_button">
            <button onClick={() => navigate("/details")}> Get Started</button>
          </div>
        </div>
        <div className="memberShip_card_container">
          <div className="memberShip_card_one">
            <p> MONTHLY CARD</p>
            <p> ₹ 5000 </p>
            <p>For 1 Month</p>
            <p>Enjoy All The Features</p>
            <p>Onetime Access To All Club</p>
            <p>Group Trainer</p>
            <p>Book A Group Class</p>
            <p>Fitness Orientation</p>
          </div>
          <div className="Book_button">
            <button onClick={() => navigate("/details")}> Get Started</button>
          </div>
        </div>
        <div className="memberShip_card_container">
          <div className="memberShip_card_one">
            <p> WEEKLY CARD</p>
            <p> ₹ 5000 </p>
            <p>For 1 Week</p>
            <p>Enjoy All The Features</p>
            <p>Onetime Access To All Club</p>
            <p>Group Trainer</p>
            <p>Book A Group Class</p>
            <p>Fitness Orientation</p>
          </div>
          <div className="Book_button">
            <button onClick={() => navigate("/details")}> Get Started</button>
          </div>
        </div>
      </div>
      <div className="home_testimonial_slider_wrapper">
        <h2
          style={{
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          Our Testimonials
        </h2>
        <TestimonialSlider />
      </div>
    </>
  );
}

export default Home;
