import React from "react";
import "../Style/about.css";
import ownerImg from "../Assets/Images/owner_img.png";
import ac1 from "../Assets/Images/ac1.jpeg";
import ac2 from "../Assets/Images/ac2.jpeg";
import ac3 from "../Assets/Images/ac3.jpeg";
import ac4 from "../Assets/Images/ac4.jpeg";
import ac5 from "../Assets/Images/ac5.jpeg";
import ac6 from "../Assets/Images/ac6.jpeg";
import ac7 from "../Assets/Images/ac7.jpeg";
function About() {
  return (
    <>
      <div className="about_owner_detail_wrapper">
        <div className="owner_photo_side">
          <img src={ownerImg} alt="Owner" />
        </div>
        <div className="owner_details_side">
          <h2>About Vijayan's Yoga</h2>
          <p>
            Vijayan's Yoga and Meditation Center is a renowned yoga and Vijayan
            Raman, a celebrated figure from Nagpur, is the founder of Vijayan's
            Yoga and Meditation Center and a multifaceted personality known for
            his expertise as an artist, yoga trainer, face reader, palmist,
            vastu consultant, and astrologer. A recipient of prestigious awards
            like the "Yoga Ratna" (2010) and "Yoga Acharya" (2011), he is deeply
            committed to the philosophy of "Health is Wealth" and advocates yoga
            as a solution to modern physical and mental challenges. <br /> His
            center, recognized as the best in central India, operates from
            branches in Dharampeth, Wardhamannagar, and Pratap Nagar, drawing
            students from diverse professions, including doctors, engineers,
            businesspeople, and even foreign nationals. Renowned for curing
            ailments like asthma, diabetes, hypertension, back pain, arthritis,
            and depression, his tailored yoga techniques also benefit children
            by enhancing memory, concentration, and physical development.
          </p>
        </div>
      </div>
      <div className="mission_vission_container">
        <div className="mission_side">
          <h2>Mission</h2>
          Vijayan's Yoga is an organization devoted to changing lives and
          communities. Our mission is to offer affordable yoga to everyone who
          is committed to starting or continuing the practice of yoga. <br /> We
          provide quality yoga instruction and a welcoming and supportive
          environment to grow as both a yoga student and as a person. <br />{" "}
          Through the practice of yoga we celebrate life and elevate ourselves
          and communities through our actions.
        </div>
        <div className="vision_side">
          <h2>Vision</h2>
          Our vision is to provide a safe supportive space where individuals and
          families come together to create a compassionate and sustainable
          community, surrounded in an atmosphere where they are inspired to grow
          physically, spiritually and emotionally. <br /> We believe that when
          individuals change, their families and communities also change. <br />{" "}
          We want to inspire this change by reminding individuals of the love,
          compassion and energy that dwell within them, guiding them to health,
          happiness and well-being.
        </div>
      </div>
      <div className="achievement_wrapper">
        <h2 style={{ textAlign: "center", marginBottom: "35px" }}>
          My Achievements
        </h2>
        <div className="achievement_images">
          <img src={ac1} alt="Achievement" />
          <img src={ac2} alt="Achievement" />
          <img src={ac3} alt="Achievement" />
          <img src={ac4} alt="Achievement" />
          <img src={ac5} alt="Achievement" />
          <img src={ac6} alt="Achievement" />
          <img src={ac7} alt="Achievement" />
        </div>
      </div>
    </>
  );
}

export default About;
